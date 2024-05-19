document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.querySelector(".nav-links");

  hamburger.addEventListener("click", function () {
    navLinks.classList.toggle("show");
  });

  // Smooth scrolling
  const navLinksList = document.querySelectorAll(".nav-links li a");

  navLinksList.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      const targetPosition = document.querySelector(targetId).offsetTop;
      window.scrollTo({
        top: targetPosition - 70,
        behavior: "smooth",
      });
    });
  });

  // Form submission
  const contactForm = document.getElementById("contact-form");
  const formResponse = document.getElementById("form-response");

  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();
    // You can add your form submission logic here
    formResponse.textContent = "Message sent successfully!";
    setTimeout(function () {
      formResponse.textContent = "";
    }, 3000);
    this.reset();
  });
});
