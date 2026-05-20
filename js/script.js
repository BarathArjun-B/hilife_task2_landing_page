const demoForm = document.querySelector(".demo-form");
const formMessage = document.querySelector(".form-message");
const navbarCollapse = document.querySelector(".navbar-collapse");

if (demoForm) {
  demoForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const fullName = document.querySelector("#fullName").value.trim();
    const email = document.querySelector("#businessEmail").value.trim();
    const phone = document.querySelector("#phoneNumber").value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!fullName || !email || !phone) {
      showFormMessage("Please complete all fields.", false);
      return;
    }

    if (!emailPattern.test(email)) {
      showFormMessage("Please enter a valid business email address.", false);
      return;
    }

    if (phone.replace(/\D/g, "").length < 10) {
      showFormMessage("Please enter a valid phone number.", false);
      return;
    }

    showFormMessage("Thanks. Your demo request has been submitted.", true);
    demoForm.reset();
  });
}

document.querySelectorAll(".navbar .nav-link").forEach(function (link) {
  link.addEventListener("click", function () {
    if (!navbarCollapse || !navbarCollapse.classList.contains("show") || typeof bootstrap === "undefined") {
      return;
    }

    const collapse = bootstrap.Collapse.getOrCreateInstance(navbarCollapse);
    collapse.hide();
  });
});

function showFormMessage(message, isSuccess) {
  formMessage.textContent = message;
  formMessage.style.color = isSuccess ? "#ffffff" : "#ffb199";
}
