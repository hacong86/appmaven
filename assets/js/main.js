/**
 * AppMaven Studio - Main JavaScript
 * Vanilla JavaScript for interactions and functionality
 */

// ==========================================
// MOBILE NAVIGATION TOGGLE
// ==========================================

document.addEventListener('DOMContentLoaded', () => {

  const navbarToggle = document.querySelector('.navbar-toggle');
  const navbarMenu = document.querySelector('.navbar-menu');

  if (navbarToggle && navbarMenu) {
    navbarToggle.addEventListener('click', () => {
      // Toggle active class
      navbarToggle.classList.toggle('active');
      navbarMenu.classList.toggle('active');

      // Update ARIA attribute
      const isExpanded = navbarToggle.classList.contains('active');
      navbarToggle.setAttribute('aria-expanded', isExpanded);

      // Prevent body scroll when menu is open
      if (isExpanded) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = '';
      }
    });

    // Close menu when clicking on a link
    const navLinks = navbarMenu.querySelectorAll('a');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navbarToggle.classList.remove('active');
        navbarMenu.classList.remove('active');
        navbarToggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      });
    });

    // Close menu on ESC key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && navbarMenu.classList.contains('active')) {
        navbarToggle.classList.remove('active');
        navbarMenu.classList.remove('active');
        navbarToggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      }
    });
  }

});


// ==========================================
// FAQ ACCORDION
// ==========================================

document.addEventListener('DOMContentLoaded', () => {

  const faqItems = Array.from(document.querySelectorAll('.faq-item')).map(item => ({
    item,
    question: item.querySelector('.faq-question'),
    answer: item.querySelector('.faq-answer')
  })).filter(({ question, answer }) => question && answer);

  function setExpanded({ item, question, answer }, expanded) {
    item.classList.toggle('active', expanded);
    question.setAttribute('aria-expanded', String(expanded));
    answer.hidden = !expanded;
    // Long answers must remain readable when text wraps on narrow screens.
    answer.style.maxHeight = expanded ? 'none' : '';
  }

  faqItems.forEach((faq, index) => {
    const { question, answer } = faq;
    question.type = 'button';
    if (!answer.id) answer.id = `faq-answer-${index + 1}`;
    question.setAttribute('aria-controls', answer.id);
    setExpanded(faq, false);

    question.addEventListener('click', () => {
      const expanded = question.getAttribute('aria-expanded') !== 'true';
      faqItems.forEach(item => setExpanded(item, item === faq && expanded));
    });
  });

});


// ==========================================
// WEBSITE FORMS (Data Deletion & Support)
// Sent to the AppMaven form relay (Cloudflare Worker), which checks the
// Turnstile verification and emails support@appmavenstudio.com.
// ==========================================

document.addEventListener('DOMContentLoaded', () => {

  const forms = Array.from(document.querySelectorAll('form[data-validate]'));
  if (!forms.length) return;

  const SUPPORT_EMAIL = 'support@appmavenstudio.com';
  const KEPT = `Your entries have been kept. You can also email ${SUPPORT_EMAIL}.`;
  const LOAD_FAILED = `The security check could not load or complete (it may be blocked by your browser or network). Please email ${SUPPORT_EMAIL} instead. Your entries have been kept.`;
  const TURNSTILE_SRC = 'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit&onload=appmavenTurnstileReady';
  const ENDPOINT_RE = /^https:\/\/appmaven-forms\.appmavenstudio\.workers\.dev\/(support|data-deletion)$/;
  const REF_ALPHABET = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  const LOAD_TIMEOUT_MS = 20000;
  const MAX_LOAD_ATTEMPTS = 3;
  const MAX_RENDERS = 4;
  const FIELD_LABELS = {
    name: 'Your Name',
    email: 'Email Address',
    'app-name': 'app',
    message: 'Your Message',
    'user-id': 'User ID',
    'request-type': 'Request Type',
    'additional-info': 'Additional Information',
    consent: 'confirmation checkbox'
  };

  function newRef() {
    const bytes = crypto.getRandomValues(new Uint8Array(8));
    return Array.from(bytes, b => REF_ALPHABET[b % REF_ALPHABET.length]).join('');
  }

  function withRef(ref) {
    return ref ? ` (reference ${ref})` : '';
  }

  function errorMessage(code, field, ref) {
    switch (code) {
      case 'invalid_field':
        return `Please check the ${FIELD_LABELS[field] || 'highlighted'} field and try again.`;
      case 'verification_required':
      case 'verification_failed':
        return 'The security check did not pass. Please wait for the check above the button to finish, then send again.';
      case 'verification_unavailable':
        return 'The security check service is temporarily unavailable. Please try again in a few minutes.';
      case 'rate_limited':
        return 'Too many requests were sent in a short time. Please wait a minute and try again.';
      case 'too_large':
        return 'Your request is too long. Please shorten your message and try again.';
      case 'send_failed':
        // The mail server may have accepted the message before the connection failed.
        return `We could not confirm delivery${withRef(ref)}. Please wait a few minutes and try again.`;
      default:
        return 'The form could not send your request automatically.';
    }
  }

  // Turnstile is loaded once, only after a visitor starts filling in a form.
  // A slow or failed load can be retried a few times. A script that arrives after
  // a form stopped waiting still wakes that form up.
  const loader = { attempts: 0, script: null, waiters: new Set(), wakers: new Set() };

  window.appmavenTurnstileReady = () => {
    if (!window.turnstile) return;
    const waiters = Array.from(loader.waiters);
    loader.waiters.clear();
    waiters.forEach(waiter => waiter.resolve(window.turnstile));
    loader.wakers.forEach(wake => wake(window.turnstile));
  };

  function loadTurnstile() {
    if (window.turnstile) return Promise.resolve(window.turnstile);
    return new Promise((resolve, reject) => {
      // A script removed from the page without an error event will never finish: forget it.
      if (loader.script && !loader.script.isConnected) loader.script = null;
      if (!loader.script && loader.attempts >= MAX_LOAD_ATTEMPTS) {
        reject(new Error('gave_up'));
        return;
      }
      const waiter = {};
      const timer = setTimeout(() => { loader.waiters.delete(waiter); reject(new Error('timeout')); }, LOAD_TIMEOUT_MS);
      waiter.resolve = value => { clearTimeout(timer); resolve(value); };
      waiter.reject = error => { clearTimeout(timer); reject(error); };
      loader.waiters.add(waiter);
      // A script from an earlier attempt may still be downloading; wait for it instead of adding another.
      if (loader.script) return;
      loader.attempts += 1;
      const script = document.createElement('script');
      script.src = TURNSTILE_SRC;
      script.async = true;
      script.onerror = () => {
        script.remove();
        if (loader.script === script) loader.script = null;
        // Every form waiting right now hears about the failure, not only the first one.
        const waiters = Array.from(loader.waiters);
        loader.waiters.clear();
        waiters.forEach(w => w.reject(new Error('load')));
      };
      loader.script = script;
      document.head.appendChild(script);
    });
  }

  forms.forEach(form => {
    const submitButton = form.querySelector('button[type="submit"]');
    const status = form.querySelector('[data-form-status]');
    const widgetBox = form.querySelector('[data-turnstile]');
    const refField = form.querySelector('input[name="ref"]');
    if (!submitButton || !status) return;

    const formType = form.dataset.formType;
    const isDeletion = formType === 'data-deletion';
    const buttonText = submitButton.textContent;
    let submitting = false;
    let widgetId = null;
    let holder = null;
    // Callbacks from a widget that has since been replaced are ignored.
    let generation = 0;
    // idle | loading | loadfailed | pending | interactive | ready | error | failed
    let widgetState = 'idle';
    let renders = 0;
    // A token is single-use: once sent it no longer counts, until Turnstile reports a new one
    // or the widget holds a response different from the one sent.
    let tokenSpent = false;
    let sentToken = '';

    if (refField) refField.value = newRef();

    // The live region stays in the accessibility tree; it is empty (and takes no space) when idle.
    // kind: 'sticky' survives typing; 'wait' also clears once the security check is ready.
    function showStatus(message, type, { focus = type !== 'info', kind = '' } = {}) {
      status.textContent = message;
      status.className = `alert alert-${type}`;
      status.dataset.kind = kind;
      if (focus) status.focus();
    }

    function clearStatus() {
      status.textContent = '';
      status.className = '';
      status.dataset.kind = '';
      // An empty region keeping focus would show a bare focus ring; Send is the next step anyway.
      if (document.activeElement === status && !submitButton.disabled) submitButton.focus();
    }

    status.hidden = false;
    clearStatus();

    // Each render uses a fresh container, so a broken or missing widget can be replaced.
    function renderWidget(turnstile) {
      generation += 1;
      const gen = generation;
      if (widgetId !== null) {
        try { turnstile.remove(widgetId); } catch { /* already gone */ }
        widgetId = null;
      }
      holder = null;
      if (renders >= MAX_RENDERS) {
        widgetBox.replaceChildren();
        widgetState = 'failed';
        return;
      }
      renders += 1;
      const box = document.createElement('div');
      widgetBox.replaceChildren(box);
      holder = box;
      // Flexible needs at least 300px; narrow screens get the compact widget, centred.
      const compact = widgetBox.clientWidth < 300;
      widgetBox.style.display = compact ? 'flex' : '';
      widgetBox.style.justifyContent = compact ? 'center' : '';
      widgetState = 'pending';
      const current = handler => (...args) => { if (gen === generation) handler(...args); };
      try {
        const id = turnstile.render(box, {
          sitekey: widgetBox.dataset.sitekey,
          action: formType,
          theme: 'dark',
          size: compact ? 'compact' : 'flexible',
          callback: current(() => {
            widgetState = 'ready';
            // During a request the sent token may still be in the widget; reset() follows anyway.
            if (!submitting) tokenSpent = false;
            if (!submitting && ['sticky', 'wait'].includes(status.dataset.kind)) clearStatus();
          }),
          'before-interactive-callback': current(() => { widgetState = 'interactive'; }),
          'after-interactive-callback': current(() => { if (widgetState === 'interactive') widgetState = 'pending'; }),
          'expired-callback': current(() => { widgetState = 'pending'; }),
          'timeout-callback': current(() => { widgetState = 'pending'; }),
          'unsupported-callback': current(() => { widgetState = 'failed'; }),
          // Turnstile keeps retrying by itself; returning nothing keeps its console warning.
          'error-callback': current(() => { widgetState = 'error'; })
        });
        widgetId = id === undefined || id === null ? null : id;
        if (widgetId === null) widgetState = 'error';
      } catch {
        widgetState = 'error';
      }
    }

    // True when the rendered widget is no longer on the page (removed, or its container emptied).
    function widgetMissing() {
      if (widgetId === null || !holder || !holder.isConnected || !holder.firstChild) return true;
      try {
        window.turnstile.getResponse(widgetId);
        return false;
      } catch {
        return true;
      }
    }

    function startWidget() {
      if (!widgetBox || !['idle', 'loadfailed'].includes(widgetState)) return;
      widgetState = 'loading';
      loadTurnstile().then(renderWidget).catch(() => {
        // A late script may already have woken this form.
        if (widgetState !== 'loading') return;
        widgetState = 'loadfailed';
        // Announced without pulling focus away from the field being filled in.
        if (!submitting) showStatus(LOAD_FAILED, 'error', { focus: false, kind: 'sticky' });
      });
    }

    loader.wakers.add(turnstile => {
      if (widgetState !== 'loadfailed') return;
      renderWidget(turnstile);
      if (!submitting && status.dataset.kind === 'sticky') clearStatus();
    });

    function currentToken() {
      if (!window.turnstile || widgetId === null) return '';
      try {
        if (window.turnstile.isExpired(widgetId)) return '';
        const token = window.turnstile.getResponse(widgetId) || '';
        return tokenSpent && token === sentToken ? '' : token;
      } catch {
        return '';
      }
    }

    function resetTurnstile() {
      if (!window.turnstile || widgetId === null) return;
      // Set first: a callback fired from inside reset() must not be overwritten afterwards.
      widgetState = 'pending';
      try {
        window.turnstile.reset(widgetId);
      } catch {
        // Replace the widget at once rather than leave the spent token in it.
        renderWidget(window.turnstile);
      }
    }

    // Start only when a form field is used, not when a link inside the form is focused.
    const startFrom = event => {
      if (event.target.closest && event.target.closest('input, select, textarea, button, label')) startWidget();
    };
    form.addEventListener('focusin', startFrom);
    form.addEventListener('pointerdown', startFrom);

    form.addEventListener('input', event => {
      if (typeof event.target.setCustomValidity === 'function') {
        event.target.setCustomValidity('');
      }
      if (!submitting && status.dataset.kind !== 'sticky') clearStatus();
    });

    // Without JavaScript the button stays disabled and the <noscript> note gives the email address.
    submitButton.disabled = false;

    form.addEventListener('submit', async event => {
      event.preventDefault();
      if (submitting) return;

      form.querySelectorAll('input[required], textarea[required]').forEach(field => {
        if (field.type !== 'checkbox' && field.type !== 'radio') {
          field.setCustomValidity(field.value.trim() ? '' : 'Please complete this field.');
        }
      });
      if (!form.reportValidity()) return;

      const endpoint = form.getAttribute('action') || '';
      const match = ENDPOINT_RE.exec(endpoint);
      if (!match || match[1] !== formType || !widgetBox) {
        showStatus(`This form is temporarily unavailable. Please email ${SUPPORT_EMAIL}. Your entries have been kept.`, 'error');
        return;
      }

      const token = currentToken();
      if (!token) {
        if (widgetState === 'idle' || widgetState === 'loadfailed') {
          startWidget();
        } else if (window.turnstile && !['loading', 'failed'].includes(widgetState)
          && (widgetState === 'error' || widgetMissing())) {
          // Only a broken or vanished widget is replaced; one still working is given time to finish.
          renderWidget(window.turnstile);
        }
        if (widgetState === 'failed' || widgetState === 'loadfailed') {
          showStatus(LOAD_FAILED, 'error', { kind: 'sticky' });
        } else if (widgetState === 'interactive') {
          showStatus('Please complete the security check above the button, then send again. Your entries have been kept.', 'warning', { kind: 'wait' });
        } else {
          showStatus(`Please wait a moment for the security check above the button to finish, then send again. If it does not appear, email ${SUPPORT_EMAIL}. Your entries have been kept.`, 'warning', { kind: 'wait' });
        }
        return;
      }

      const formData = new FormData(form);
      formData.set('cf-turnstile-response', token);
      tokenSpent = true;
      sentToken = token;
      const ref = refField ? refField.value : '';

      // Capture data first, then lock fields so edits cannot be lost during a request.
      const controls = Array.from(form.querySelectorAll('input, select, textarea, button'));
      const disabledStates = controls.map(control => control.disabled);
      controls.forEach(control => { control.disabled = true; });
      submitting = true;
      form.setAttribute('aria-busy', 'true');
      submitButton.textContent = 'Sending…';
      showStatus('Sending your request…', 'info');

      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), 30000);
      let fieldToFocus = null;
      try {
        const response = await fetch(endpoint, {
          method: 'POST',
          body: formData,
          headers: { Accept: 'application/json' },
          signal: controller.signal
        });
        const result = await response.json().catch(() => null);

        if (response.ok && result && result.ok === true) {
          // Always show the reference that was sent (it is also in the email subject).
          const returnedRef = typeof result.ref === 'string' && /^[A-Z0-9]{8}$/.test(result.ref) ? result.ref : '';
          const shownRef = ref || returnedRef;
          form.reset();
          if (refField) refField.value = newRef();
          showStatus(isDeletion
            ? `Your data deletion request has been received for review${withRef(shownRef)}. This does not mean your data has already been deleted. We will contact you at the email address you provided.`
            : `Your message has been received${withRef(shownRef)}. We will reply to the email address you provided, usually within 24–48 hours.`, 'success');
        } else if (response.ok) {
          showStatus(`We could not confirm delivery${withRef(ref)}. ${KEPT}`, 'error');
        } else {
          const code = result && typeof result.code === 'string' ? result.code : '';
          const field = result && typeof result.field === 'string' ? result.field : '';
          const input = code === 'invalid_field' && field ? form.querySelector(`[name="${CSS.escape(field)}"]`) : null;
          // For a field problem, move to the field; the status is still announced politely.
          showStatus(`${errorMessage(code, field, ref)} ${KEPT}`, 'error', { focus: !input });
          fieldToFocus = input;
        }
      } catch {
        // A timeout may occur after receipt: never automatically retry or claim failure to deliver.
        showStatus(`We could not confirm delivery${withRef(ref)}. Check your connection and try again, or email ${SUPPORT_EMAIL}. Your entries have been kept.`, 'error');
      } finally {
        clearTimeout(timeout);
        controls.forEach((control, index) => { control.disabled = disabledStates[index]; });
        submitButton.textContent = buttonText;
        form.removeAttribute('aria-busy');
        submitting = false;
        // A Turnstile token is single-use, so every attempt needs a fresh check.
        resetTurnstile();
        if (fieldToFocus && typeof fieldToFocus.focus === 'function') fieldToFocus.focus();
      }
    });
  });

});


// ==========================================
// SMOOTH SCROLL FOR ANCHOR LINKS
// ==========================================

document.addEventListener('DOMContentLoaded', () => {

  const anchorLinks = document.querySelectorAll('a[href^="#"]');

  anchorLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const targetId = link.getAttribute('href');

      if (targetId === '#') return;

      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        e.preventDefault();

        const headerHeight = document.querySelector('.navbar')?.offsetHeight || 0;
        const targetPosition = targetElement.offsetTop - headerHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

});


// ==========================================
// NAVBAR SCROLL EFFECT
// ==========================================

document.addEventListener('DOMContentLoaded', () => {

  const navbar = document.querySelector('.navbar');
  let lastScrollTop = 0;

  if (navbar) {
    window.addEventListener('scroll', () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

      // Add shadow on scroll
      if (scrollTop > 10) {
        navbar.style.boxShadow = 'var(--shadow-md)';
      } else {
        navbar.style.boxShadow = 'none';
      }

      lastScrollTop = scrollTop;
    });
  }

});


// ==========================================
// IMAGE LAZY LOADING FALLBACK (for older browsers)
// ==========================================

document.addEventListener('DOMContentLoaded', () => {

  if ('loading' in HTMLImageElement.prototype) {
    // Native lazy loading supported
    return;
  }

  // Fallback for older browsers
  const lazyImages = document.querySelectorAll('img[loading="lazy"]');

  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src || img.src;
        img.classList.add('loaded');
        observer.unobserve(img);
      }
    });
  });

  lazyImages.forEach(img => imageObserver.observe(img));

});


// ==========================================
// FILTER TABS (for Apps Listing Page)
// ==========================================

document.addEventListener('DOMContentLoaded', () => {

  const filterTabs = document.querySelectorAll('[data-filter-tab]');
  const filterItems = document.querySelectorAll('[data-filter-category]');

  filterTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const filterValue = tab.dataset.filterTab;

      // Update active tab
      filterTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      // Filter items
      filterItems.forEach(item => {
        if (filterValue === 'all' || item.dataset.filterCategory === filterValue) {
          item.style.display = '';
          item.classList.add('animate-fadeInUp');
        } else {
          item.style.display = 'none';
        }
      });
    });
  });

});


// ==========================================
// CONSOLE BRANDING (Easter Egg)
// ==========================================

console.log(
  '%c🚀 AppMaven Studio',
  'font-size: 24px; font-weight: bold; background: linear-gradient(135deg, #00d4ff 0%, #7c3aed 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent;'
);

console.log(
  '%cBuilding innovative mobile experiences with ❤️',
  'font-size: 14px; color: #00d4ff;'
);

console.log(
  '%cInterested in joining our team? Email us at careers@appmavenstudio.com',
  'font-size: 12px; color: rgba(255, 255, 255, 0.7);'
);
