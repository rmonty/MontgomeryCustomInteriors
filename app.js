const navToggle = document.querySelector('[data-nav-toggle]');
const nav = document.querySelector('[data-nav]');

const navItems = [
  { label: 'Home', href: 'index.html' },
  { label: 'Book Online', href: 'booking.html' },
  { label: 'Booking Calendar', href: 'booking-calendar.html' },
  { label: 'Booking Form', href: 'booking-form.html' },
  { label: 'Cart Page', href: 'cart.html' },
  { label: 'Checkout', href: 'checkout.html' },
  { label: 'My Account', href: 'my-account.html' },
  { label: 'My Addresses', href: 'my-addresses.html' },
  { label: 'My Bookings', href: 'my-bookings.html' },
  { label: 'My Orders', href: 'my-orders.html' },
  { label: 'My Subscriptions', href: 'my-subscriptions.html' },
  { label: 'My Wallet', href: 'my-wallet.html' },
  { label: 'Projects', href: 'projects.html' },
  { label: 'Service Page', href: 'service-page.html' },
  { label: 'Services', href: 'services.html' },
  { label: 'Side Cart', href: 'side-cart.html' },
  { label: 'Testimonials', href: 'testimonials.html' },
  { label: 'Thank You Page', href: 'thank-you.html' },
];

if (navToggle && nav) {
  nav.innerHTML = navItems
    .map((item) => `<a href="${item.href}">${item.label}</a>`)
    .join('');

  navToggle.addEventListener('click', () => {
    const isOpen = nav.getAttribute('data-open') === 'true';
    nav.setAttribute('data-open', String(!isOpen));
    navToggle.setAttribute('aria-expanded', String(!isOpen));
  });

  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      nav.setAttribute('data-open', 'false');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

const revealTargets = document.querySelectorAll('.fade-in');

if ('IntersectionObserver' in window && revealTargets.length > 0) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.18 });

  revealTargets.forEach((target) => observer.observe(target));
} else {
  revealTargets.forEach((target) => target.classList.add('visible'));
}

const path = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('[data-nav] a').forEach((link) => {
  if (link.getAttribute('href') === path) {
    link.setAttribute('aria-current', 'page');
  }
});