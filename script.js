document.addEventListener('DOMContentLoaded', function () {
  // ... keep your existing menu toggle + tabs code ...

  // ──────────────── Read More / Read Less ────────────────
  document.querySelectorAll('.read-more').forEach(button => {
    button.addEventListener('click', function () {
      // Get the next sibling → should be .extra-content
      const extra = this.nextElementSibling;

      if (extra && extra.classList.contains('extra-content')) {
        extra.classList.toggle('hidden');

        // Update button text
        this.textContent = extra.classList.contains('hidden')
          ? 'Read More'
          : 'Read Less';
      } else {
        console.warn('No .extra-content found after button:', this);
      }
    });
  });
});