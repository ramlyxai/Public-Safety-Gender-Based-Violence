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

// Mobile menu toggle
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});


// Smooth scroll for dropdown links
document.querySelectorAll('.dropdown-content a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const targetId = link.getAttribute('data-info');
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    //  close dropdown if open (for mobile)
    const dropdown = document.querySelector('.dropdown-content');
    if (dropdown) dropdown.classList.remove('show');
  });
});



  // Add click handlers for the category cards
  document.getElementById('chat').addEventListener('click', () => {
    window.location.href = "chatroom.html";
  });
  document.getElementById('recruit').addEventListener('click', () => {
    window.location.href = "recruitment.html";
  });
  document.getElementById('ngo').addEventListener('click', () => {
    window.location.href = "ngo.html";
  });
  document.getElementById('safety').addEventListener('click', () => {
    window.location.href = "safety.html";
  });





  // this is for our repository
function goToRepo(person) {
const repos = {
  raymond: "https://github.com/RaymondMukonda",
  mamatli: "https://github.com/MsKabi" // Replace with her actual GitHub username
};

if (repos[person]) {
  window.open(repos[person], "_blank");
} else {
  alert("Repository not found.");
}
}


