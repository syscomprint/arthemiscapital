// Arthemis Capital - Main JavaScript

document.addEventListener('DOMContentLoaded', function () {

  // --- Mobile Navigation Toggle ---
  const navToggle = document.getElementById('navToggle');
  const mainNav = document.getElementById('mainNav');

  if (navToggle && mainNav) {
    navToggle.addEventListener('click', function () {
      mainNav.classList.toggle('active');
      navToggle.classList.toggle('open');
    });

    // Close nav when clicking a link
    mainNav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        mainNav.classList.remove('active');
        navToggle.classList.remove('open');
      });
    });
  }

  // --- Header scroll effect ---
  const header = document.querySelector('.site-header');
  if (header) {
    // Force transparent on load, then check scroll position
    header.classList.remove('scrolled');
    function handleScroll() {
      if (window.scrollY > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }
    window.addEventListener('scroll', handleScroll);
    // Run once after a tiny delay to override browser scroll restore
    setTimeout(handleScroll, 50);
  }

  // --- Fade-in animation on scroll ---
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -40px 0px'
  };

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Animate sections
  var animTargets = document.querySelectorAll(
    '.service-item, .insight-card, .stat-card, .transaction-card, ' +
    '.value-item, .why-item, .timeline-item, .leader-profile, .highlight-card, ' +
    '.service-card, .industry-card, .mandate-card, .insight-topic, .cta-panel, ' +
    '.service-panel, .reach-card, .mission-card, .industry-panel, .support-card, ' +
    '.selected-card, .contact-panel, .office-panel, .note-card'
  );

  animTargets.forEach(function (el) {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
  });

  // --- Smooth scroll for anchor links ---
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var targetId = this.getAttribute('href');
      if (targetId === '#') return;
      var target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

});
