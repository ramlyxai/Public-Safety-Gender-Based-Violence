function showForm(formId) {
  document.querySelectorAll(".form-box").forEach(form => {
    form.classList.remove("active");
  });
  document.getElementById(formId).classList.add("active");
}


// this will remember the page state on refresh
function showForm(formId) {
  document.querySelectorAll(".form-box").forEach(form => {
    form.classList.remove("active");
  });
//   document.getElementById(formId).classList.add("active");

  // Save the active form ID
  localStorage.setItem("activeForm", formId);
}

//  Restore the state on page load
window.addEventListener("DOMContentLoaded", () => {
  const savedFormId = localStorage.getItem("activeForm");
  if (savedFormId) {
    document.querySelectorAll(".form-box").forEach(form => {
      form.classList.remove("active");
    });
    const targetForm = document.getElementById(savedFormId);
    if (targetForm) {
      targetForm.classList.add("active");
    }
  }
});

// save input
document.querySelectorAll("input").forEach(input => {
  input.addEventListener("input", () => {
    localStorage.setItem(input.name, input.value);
  });
});

//  Restore on Page Load input
window.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("input").forEach(input => {
    const savedValue = localStorage.getItem(input.name);
    if (savedValue !== null) {
      input.value = savedValue;
    }
  });
});


// this is for the login direction
document.addEventListener("DOMContentLoaded", function () {
  // ======== FORM TOGGLE FUNCTION ========
  window.showForm = function (formId) {
    const loginForm = document.getElementById("login-form");
    const registerForm = document.getElementById("registe-form");

    // Hide both first
    loginForm.classList.remove("active");
    registerForm.classList.remove("active");

    // Show the selected form
    document.getElementById(formId).classList.add("active");
  };

  // ======== REGISTER FORM ========
  const registerForm = document.querySelector("#registe-form form");
  if (registerForm) {
    registerForm.addEventListener("submit", function (e) {
      e.preventDefault(); // Stop real form submission

      // Show popup message
      alert("You've successfully signed up! Please log in to continue📧.");

      // Switch to login form
      showForm("login-form");
    });
  }

  // ======== LOGIN FORM ========
  const loginForm = document.querySelector("#login-form form");
  if (loginForm) {
    loginForm.addEventListener("submit", function (e) {
      e.preventDefault(); // Stop real form submission

      // Optional: You can add simple credential checks here
      // For now, just simulate success
      alert("Login successful! Redirecting to your dashboard...");

      // Redirect to dashboard.html
      window.location.href = "dashboard.html";
    });
  }
});




// redirect

// Wait for the page to load
document.addEventListener("DOMContentLoaded", function() {
  // Select all category cards
  const cards = document.querySelectorAll(".category-card");

  // Add click event to each card
  cards.forEach(card => {
    card.addEventListener("click", function() {
      // Show alert message first
      alert("Please sign in to use this feature.");

      // Redirect to login page after alert
      window.location.href = "login.html";
    });
  });
});


// // Redirect if not logged in
// const email = localStorage.getItem("userEmail");
// if (!email) {
//   alert("Please log in first.");
//   window.location.href = "login.html";
// }