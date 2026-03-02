// script.js – Portfolio JavaScript (Fixed & Enhanced)
document.addEventListener('DOMContentLoaded', function () {
  // ──────────────── 1. Mobile Menu Toggle ────────────────
  const menuToggle = document.getElementById('menuToggle');
  const navLinks = document.getElementById('navLinks');

  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });

    // Close menu when clicking any link
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
      });
    });
  }

  // ──────────────── 2. Tabs (Skills / Experience / Education) ────────────────
  const tabLinks = document.querySelectorAll('.tab-link');
  const tabContents = document.querySelectorAll('.tab-content');

  tabLinks.forEach(link => {
    link.addEventListener('click', function () {
      // Remove active from all tabs & contents
      tabLinks.forEach(l => l.classList.remove('active'));
      tabContents.forEach(c => c.classList.remove('active'));

      // Activate clicked tab & matching content
      this.classList.add('active');
      const targetId = this.getAttribute('data-tab');
      const targetContent = document.getElementById(targetId);

      if (targetContent) {
        targetContent.classList.add('active');
      } else {
        console.warn(`Tab content not found for ID: ${targetId}`);
      }
    });
  });

  // ──────────────── 3. Read More / Read Less (Services Section) ────────────────
  const readMoreButtons = document.querySelectorAll('.read-more');

  readMoreButtons.forEach(button => {
    button.addEventListener('click', function () {
      // Find the extra content (next sibling after button)
      const extraContent = this.nextElementSibling;

      if (extraContent && extraContent.classList.contains('extra-content')) {
        extraContent.classList.toggle('hidden');

        // Update button text dynamically
        this.textContent = extraContent.classList.contains('hidden')
          ? 'Read More'
          : 'Read Less';
      } else {
        console.warn('No .extra-content found after Read More button:', this);
      }
    });
  });

  // ──────────────── 4. Optional: Smooth Scroll for All Internal Links ────────────────
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault(); // prevent default jump
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // ──────────────── 5. Debug Helper (optional – remove later) ────────────────
  console.log('Portfolio JS loaded successfully');
  console.log('Found Read More buttons:', readMoreButtons.length);
  console.log('Found tab links:', tabLinks.length);
});
// Contact Form – Formspree with User Feedback
const contactForm = document.getElementById('contactForm');
const statusDiv = document.getElementById('form-status');

if (contactForm && statusDiv) {
  contactForm.addEventListener('submit', async function (e) {
    e.preventDefault(); // Prevent default form submission

    // Show loading state
    statusDiv.style.color = '#3498db';
    statusDiv.textContent = 'Sending your message...';

    const formData = new FormData(contactForm);
    const actionUrl = contactForm.getAttribute('action');

    try {
      const response = await fetch(actionUrl, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        // Success
        statusDiv.style.color = '#27ae60';
        statusDiv.textContent = 'Message sent successfully! Thank you for your comment. I will get back to you soon.';
        contactForm.reset(); // Clear the form
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      // Error
      statusDiv.style.color = '#e74c3c';
      statusDiv.textContent = 'Oops! There was an error sending your message. Please try again or email me directly at chrispinuslangat631@gmail.com.';
      console.error('Formspree error:', error);
    }
  });
}
// Very basic example
const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav-links');

toggle.addEventListener('click', () => {
  nav.classList.toggle('active');
});
