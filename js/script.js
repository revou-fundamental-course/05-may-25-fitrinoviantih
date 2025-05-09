document.addEventListener('DOMContentLoaded', function () {
  console.log("JS loaded");

  // implementation js validation on form
  const form = document.getElementById('form-contact');
  const name = document.getElementById('name');
  const email = document.getElementById('email');
  const interest = document.getElementById('interest');
  const description = document.getElementById('description');

  const nameError = document.getElementById('nameError');
  const emailError = document.getElementById('emailError');
  const interestError = document.getElementById('interestError');
  const descriptionError = document.getElementById('descriptionError');

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    // reset all error messages
    nameError.textContent = '';
    emailError.textContent = '';
    interestError.textContent = '';
    descriptionError.textContent = '';

    let valid = true;

    if (!name.value.trim()) {
      nameError.textContent = 'Name is required.';
      valid = false;
    }

    if (!email.value.trim()) {
      emailError.textContent = 'Email is required.';
      valid = false;
    } else if (!validateEmail(email.value)) {
      emailError.textContent = 'Invalid email format.';
      valid = false;
    }

    if (!interest.value) {
      interestError.textContent = 'Please select one.';
      valid = false;
    }

    if (!description.value.trim()) {
      descriptionError.textContent = 'Description cannot be empty.';
      valid = false;
    }

    if (valid) {
      alert('Form submitted successfully! Please wait for our respons ASAP.');
    
      form.reset(); // Optional: reset form setelah submit
    }
  });

  function validateEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }


// responsive header hamburger using js  
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");

hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("show");
});


// banner auto slide using js
const banner = document.getElementById("banner-content");
const images = [
    "https://i.pinimg.com/736x/34/e1/1e/34e11e81ac02b20c01af51a37d0464ba.jpg",
    "https://i.pinimg.com/736x/2c/1c/e0/2c1ce0ada64525a09b653d7264fb8f00.jpg",
    "https://i.pinimg.com/736x/0d/df/31/0ddf31fc830499c96858eb3b7517087a.jpg",
    "https://i.pinimg.com/736x/9e/82/21/9e82210b7e8546a502ae62a359d4776c.jpg",
    "https://i.pinimg.com/736x/7c/07/ac/7c07acfc64af15db920952be25028f97.jpg",
    "https://i.pinimg.com/736x/bc/5c/1a/bc5c1aed64330704f929eca3b41ca23c.jpg",
    "https://i.pinimg.com/736x/09/51/d1/0951d1b0ffce28937fb033b1b7b20609.jpg"
];

let index = 0;

function slideBanner() {
    banner.style.backgroundImage = `url(${images[index]})`;
    index = (index + 1) % images.length;
}

slideBanner();
setInterval(slideBanner, 3000);


});