// ─── INTERSECTION OBSERVER — slide entry animations ───────────────
const slides = document.querySelectorAll('.slide__inner');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1 }
);

slides.forEach((slide) => observer.observe(slide));

// ─── ACTIVE NAV LINK ──────────────────────────────────────────────
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav__links a');

const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach((link) => {
          link.classList.toggle(
            'nav__link--active',
            link.getAttribute('href') === `#${id}`
          );
        });
      }
    });
  },
  { rootMargin: '-40% 0px -55% 0px' }
);

sections.forEach((section) => sectionObserver.observe(section));

// ─── NAV SCROLL SHADOW ────────────────────────────────────────────
const nav = document.querySelector('.nav');

window.addEventListener('scroll', () => {
  nav.style.boxShadow = window.scrollY > 10
    ? '0 4px 24px rgba(0,0,0,0.4)'
    : 'none';
}, { passive: true });

// ─── COPY CODE ON CLICK ───────────────────────────────────────────
document.querySelectorAll('.code-block').forEach((block) => {
  block.style.cursor = 'pointer';
  block.title = 'Click to copy';

  block.addEventListener('click', () => {
    const text = block.querySelector('pre')?.innerText ?? '';
    navigator.clipboard.writeText(text).then(() => {
      const bar = block.querySelector('.code-block__bar');
      const file = bar?.querySelector('.code-block__file');
      if (!file) return;
      const original = file.textContent;
      file.textContent = '✓ Copied!';
      file.style.color = '#6ee7b7';
      setTimeout(() => {
        file.textContent = original;
        file.style.color = '';
      }, 1500);
    });
  });
});
