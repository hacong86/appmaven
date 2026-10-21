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
// FORMSPREE SUBMISSIONS (Data Deletion & Support)
// ==========================================

document.addEventListener('DOMContentLoaded', () => {

  document.querySelectorAll('form[data-validate]').forEach(form => {
    const submitButton = form.querySelector('button[type="submit"]');
    const status = form.querySelector('[data-form-status]');
    if (!submitButton || !status) return;

    let submitting = false;
    const buttonText = submitButton.textContent;

    function showStatus(message, type) {
      status.textContent = message;
      status.className = `alert alert-${type}`;
      status.hidden = false;
      if (type !== 'info') status.focus();
    }

    form.addEventListener('input', event => {
      if (typeof event.target.setCustomValidity === 'function') {
        event.target.setCustomValidity('');
      }
      if (!submitting) status.hidden = true;
    });

    form.addEventListener('submit', async event => {
      event.preventDefault();
      if (submitting) return;

      form.querySelectorAll('input[required], textarea[required]').forEach(field => {
        if (field.type !== 'checkbox' && field.type !== 'radio') {
          field.setCustomValidity(field.value.trim() ? '' : 'Please complete this field.');
        }
      });
      if (!form.reportValidity()) return;

      // The public form ID belongs in HTML; no email password or API key is needed.
      const endpoint = form.getAttribute('action') || '';
      if (!/^https:\/\/formspree\.io\/f\/[a-zA-Z0-9]+$/.test(endpoint)) {
        showStatus('This form is temporarily unavailable. Please email support@appmavenstudio.com. Your entries have been kept.', 'error');
        return;
      }

      const formData = new FormData(form);
      const isDeletion = form.dataset.formType === 'data-deletion';
      const appName = formData.get('app-name') || 'General Inquiry';
      formData.set('subject', `[AppMaven] ${isDeletion ? 'Data Deletion' : 'Support'} - ${appName}`);

      // Capture data first, then lock fields so edits cannot be lost during a request.
      const controls = Array.from(form.querySelectorAll('input, select, textarea, button'));
      const disabledStates = controls.map(control => control.disabled);
      controls.forEach(control => { control.disabled = true; });
      submitting = true;
      form.setAttribute('aria-busy', 'true');
      submitButton.textContent = 'Sending…';
      showStatus('Sending your request…', 'info');

      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), 20000);
      try {
        const response = await fetch(endpoint, {
          method: 'POST',
          body: formData,
          headers: { Accept: 'application/json' },
          signal: controller.signal
        });
        if (!response.ok) {
          const result = await response.json().catch(() => ({}));
          const errors = Array.isArray(result.errors)
            ? result.errors.map(error => error.message).filter(message => typeof message === 'string')
            : [];
          const detail = response.status === 429
            ? 'The form service is busy or has reached its limit. Please try again later.'
            : errors.join(' ') || 'The form service could not accept your request.';
          showStatus(`${detail} Your entries have been kept. You can also email support@appmavenstudio.com.`, 'error');
          return;
        }

        form.reset();
        showStatus(isDeletion
          ? 'Your data deletion request has been received for review. This does not mean your data has already been deleted. We will contact you at the email address you provided.'
          : 'Your message has been received. We will reply to the email address you provided, usually within 24–48 hours.', 'success');
      } catch {
        // A timeout may occur after receipt: never automatically retry or claim failure to deliver.
        showStatus('We could not confirm delivery. Your entries have been kept. Check your connection and try again, or email support@appmavenstudio.com.', 'error');
      } finally {
        clearTimeout(timeout);
        controls.forEach((control, index) => { control.disabled = disabledStates[index]; });
        submitButton.textContent = buttonText;
        form.removeAttribute('aria-busy');
        submitting = false;
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
