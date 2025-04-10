// Wait until the document is ready
document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.getElementById("menuToggle");
  const nav = document.getElementById("navMenu");

  toggle.addEventListener("click", () => {
    nav.classList.toggle("active");
  });

  // Shop button
  const shopBtn = document.getElementById("shopBtn");
  shopBtn.addEventListener("click", () => {
    window.location.href = "#shop"; // Replace with actual shop URL if needed
  });
});

document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('active');
  });
});

