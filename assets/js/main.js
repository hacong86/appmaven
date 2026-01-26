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

  const faqQuestions = document.querySelectorAll('.faq-question');

  faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
      const answer = question.nextElementSibling;
      const isActive = question.classList.contains('active');

      // Close all other FAQs
      faqQuestions.forEach(q => {
        if (q !== question) {
          q.classList.remove('active');
          q.nextElementSibling.classList.remove('active');
          q.setAttribute('aria-expanded', 'false');
        }
      });

      // Toggle current FAQ
      if (isActive) {
        question.classList.remove('active');
        answer.classList.remove('active');
        question.setAttribute('aria-expanded', 'false');
      } else {
        question.classList.add('active');
        answer.classList.add('active');
        question.setAttribute('aria-expanded', 'true');
      }
    });

    // Set initial ARIA attributes
    question.setAttribute('aria-expanded', 'false');
  });

});


// ==========================================
// FORM VALIDATION (Data Deletion & Support)
// ==========================================

document.addEventListener('DOMContentLoaded', () => {

  const forms = document.querySelectorAll('form[data-validate]');

  forms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      let isValid = true;
      const formData = new FormData(form);

      // Clear previous errors
      form.querySelectorAll('.error-message').forEach(error => error.remove());
      form.querySelectorAll('.error').forEach(field => field.classList.remove('error'));

      // Email validation
      const emailField = form.querySelector('input[type="email"]');
      if (emailField && emailField.value) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailField.value)) {
          showError(emailField, 'Please enter a valid email address');
          isValid = false;
        }
      }

      // Required fields validation
      form.querySelectorAll('[required]').forEach(field => {
        if (!field.value.trim()) {
          showError(field, 'This field is required');
          isValid = false;
        }
      });

      // Checkbox consent validation
      const consentCheckbox = form.querySelector('input[type="checkbox"][required]');
      if (consentCheckbox && !consentCheckbox.checked) {
        showError(consentCheckbox, 'You must agree to continue');
        isValid = false;
      }

      // If valid, process form
      if (isValid) {
        handleFormSubmit(form, formData);
      }
    });
  });

  function showError(field, message) {
    field.classList.add('error');
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.style.color = '#ef4444';
    errorDiv.style.fontSize = 'var(--text-sm)';
    errorDiv.style.marginTop = 'var(--space-1)';
    errorDiv.textContent = message;
    field.parentNode.appendChild(errorDiv);
  }

  function handleFormSubmit(form, formData) {
    // Get form type
    const formType = form.dataset.formType || 'contact';

    // Build email subject and body
    let subject = '';
    let body = '';

    if (formType === 'data-deletion') {
      const appName = formData.get('app-name');
      const email = formData.get('email');
      const userId = formData.get('user-id') || 'N/A';
      const requestType = formData.get('request-type');
      const additionalInfo = formData.get('additional-info') || 'N/A';

      subject = `Data Deletion Request - ${appName}`;
      body = `
App Name: ${appName}
Email: ${email}
User ID: ${userId}
Request Type: ${requestType}
Additional Information: ${additionalInfo}

Date: ${new Date().toLocaleString()}
      `.trim();

    } else if (formType === 'support') {
      const name = formData.get('name');
      const email = formData.get('email');
      const appName = formData.get('app-name') || 'General Inquiry';
      const message = formData.get('message');

      subject = `Support Request - ${appName}`;
      body = `
Name: ${name}
Email: ${email}
App: ${appName}

Message:
${message}

Date: ${new Date().toLocaleString()}
      `.trim();
    }

    // Create mailto link
    const mailtoLink = `mailto:support@appmavenstudio.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    // Open mailto link
    window.location.href = mailtoLink;

    // Show success message
    const successDiv = document.createElement('div');
    successDiv.className = 'alert alert-success';
    successDiv.textContent = 'Opening your email client... If it doesn\'t open automatically, please email us at support@appmavenstudio.com';
    form.insertBefore(successDiv, form.firstChild);

    // Reset form
    setTimeout(() => {
      form.reset();
    }, 1000);
  }

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
        navbar.style.boxShadow = 'var(--shadow-card)';
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
