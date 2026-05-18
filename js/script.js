// ==============================
// Landing Page JavaScript
// ==============================



// ==============================
// Select Form Inputs
// ==============================

const fullNameInput =
document.querySelector('input[placeholder="Full Name"]');

const emailInput =
document.querySelector('input[placeholder="Business Email Address"]');

const phoneInput =
document.querySelector('input[placeholder="Phone Number"]');

const requestButton =
document.querySelector(".form-section button");



// ==============================
// Button Click Event
// ==============================

requestButton.addEventListener("click", function () {

  // ==============================
  // Get Input Values
  // ==============================

  const fullName =
  fullNameInput.value;

  const email =
  emailInput.value;

  const phone =
  phoneInput.value;



  // ==============================
  // Validation
  // ==============================

  if (fullName === "") {

    alert("Please Enter Full Name");

    return;
  }



  if (email === "") {

    alert("Please Enter Email Address");

    return;
  }



  if (!email.includes("@")) {

    alert("Please Enter Valid Email");

    return;
  }



  if (phone === "") {

    alert("Please Enter Phone Number");

    return;
  }



  if (phone.length < 10) {

    alert("Phone Number Must Be 10 Digits");

    return;
  }



  // ==============================
  // Console Output
  // ==============================

  console.log("Full Name :", fullName);

  console.log("Email :", email);

  console.log("Phone :", phone);



  // ==============================
  // Success Message
  // ==============================

  alert("Demo Request Submitted Successfully");



  // ==============================
  // Clear Inputs
  // ==============================

  fullNameInput.value = "";

  emailInput.value = "";

  phoneInput.value = "";

});



// ==============================
// Navbar Hover Effect
// ==============================

const navLinks =
document.querySelectorAll("nav a");



navLinks.forEach(function(link) {

  link.addEventListener("mouseenter", function() {

    link.style.color = "#00aaff";

  });



  link.addEventListener("mouseleave", function() {

    link.style.color = "white";

  });

});



// ==============================
// Card Hover Animation
// ==============================

const cards =
document.querySelectorAll(
".channel-card, .bottom-card"
);



cards.forEach(function(card){

  card.addEventListener("mouseenter", function(){

    card.style.transform = "translateY(-8px)";

    card.style.transition = "0.3s";

  });



  card.addEventListener("mouseleave", function(){

    card.style.transform = "translateY(0px)";

  });

});



// ==============================
// Smooth Scroll
// ==============================

document.querySelectorAll("a").forEach(function(anchor){

  anchor.addEventListener("click", function(event){

    event.preventDefault();

  });

});



// ==============================
// Console Message
// ==============================

console.log("Landing Page Loaded Successfully");