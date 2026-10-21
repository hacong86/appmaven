/** Keep form app choices in sync with the public Apps directory. */
document.addEventListener('DOMContentLoaded', async () => {
  const selects = Array.from(document.querySelectorAll('select[data-app-catalog]'));
  if (!selects.length) return;

  // The HTML options remain usable while loading, offline, or without JavaScript.
  selects.forEach(select => { select.dataset.catalogState = 'loading'; });
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 5000);

  try {
    const response = await fetch('/apps/', { cache: 'no-cache', signal: controller.signal });
    if (!response.ok) throw new Error('App directory unavailable');

    // A template keeps fetched markup inert; only plain names become options.
    const template = document.createElement('template');
    template.innerHTML = await response.text();
    const apps = new Map();
    template.content.querySelectorAll('.app-card').forEach(card => {
      const link = card.querySelector('a.app-card-link-wrapper[href]');
      const name = card.querySelector('.app-card-title')?.textContent.replace(/\s+/g, ' ').trim();
      if (!link || !name) return;
      const url = new URL(link.getAttribute('href'), new URL('/apps/', location.origin));
      if (url.origin !== location.origin || !/^\/apps\/[^/]+\/(?:index\.html)?$/.test(url.pathname)) return;
      const path = url.pathname.replace(/index\.html$/, '');
      if (!apps.has(path)) apps.set(path, name);
    });
    if (!apps.size) throw new Error('No apps found');

    selects.forEach(select => {
      // Do not change a form that is already submitting its captured values.
      if (select.form?.getAttribute('aria-busy') === 'true') {
        select.dataset.catalogState = 'fallback';
        return;
      }
      const previous = select.selectedOptions[0];
      const current = previous?.value || '';
      const selectedPath = previous?.dataset.appPath;
      const options = [];
      const staticOptions = Array.from(select.querySelectorAll('option[data-static-option]'));
      const placeholder = staticOptions.find(option => option.value === '');
      if (placeholder) options.push(placeholder.cloneNode(true));

      apps.forEach((name, path) => {
        const option = new Option(name, name);
        option.dataset.appPath = path;
        options.push(option);
      });
      staticOptions.filter(option => option.value !== '').forEach(option => options.push(option.cloneNode(true)));

      const selected = options.find(option => selectedPath
        ? option.dataset.appPath === selectedPath
        : option.value === current);
      // A directory update must not silently discard a choice made while loading.
      if (!selected && previous && current) options.splice(apps.size + 1, 0, previous.cloneNode(true));
      select.replaceChildren(...options);
      select.value = selected?.value ?? current;
      select.dataset.catalogState = 'ready';
    });
  } catch {
    selects.forEach(select => { select.dataset.catalogState = 'fallback'; });
  } finally {
    clearTimeout(timeout);
  }
});
