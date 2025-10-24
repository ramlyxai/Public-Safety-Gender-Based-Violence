// Landing Page info section
const infoText = document.getElementById("info-text");
const links = document.querySelectorAll(".dropdown-content a");

if (infoText && links) {
  const infoData = {
    chat: "Join Chat Room: Connect safely and anonymously with mentors and counselors for support.",
    recruit: "Recruitment Program: Find verified employers providing safe job opportunities.",
    ngo: "NGO Sponsorship: Partner with NGOs offering funding and training programs.",
    safety: "Public Safety: Learn about community safety projects and initiatives near you."
  };

  links.forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      const key = link.getAttribute("data-info");
      infoText.textContent = infoData[key];
    });
  });
}

// Slideshow
let slideIndex = 0;
const showSlides = () => {
  const slides = document.querySelectorAll(".slides");
  if (slides.length === 0) return;
  slides.forEach(slide => (slide.style.display = "none"));
  slideIndex++;
  if (slideIndex > slides.length) slideIndex = 1;
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 4000);
};
showSlides();

// Login Navigation
const loginForm = document.getElementById("loginForm");
if (loginForm) {
  loginForm.addEventListener("submit", e => {
    e.preventDefault();
    window.location.href = "dashboard.html"; // Go to dashboard after login
  });
}

// Sign Up Navigation
const signupForm = document.getElementById("signupForm");
if (signupForm) {
  signupForm.addEventListener("submit", e => {
    e.preventDefault();
    window.location.href = "login.html"; // After signup, redirect to login
  });
}
