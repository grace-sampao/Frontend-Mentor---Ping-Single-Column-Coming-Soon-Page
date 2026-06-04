const subscriptionForm = document.getElementById('subscription-form');
const emailInput = document.getElementById('email-input');
const mobileErrorMessage = document.getElementById('mobile-error-message');
const desktopErrorMessage = document.getElementById('desktop-error-message');

const pattern = /^[\w.%+-]+@[\w.-]+\.[a-zA-Z]{2,}$/;

subscriptionForm.addEventListener('submit', submitForm);

function submitForm(event) {
  if (emailInput.value == false && screen.width < 1024) {
    mobileErrorMessage.innerHTML = "Whoops! It looks like you forgot to add your email.";
    mobileErrorMessage.style.display = 'block';
    emailInput.style.borderColor = 'hsl(354, 100%, 66%)';

    event.preventDefault();
  } else if (emailInput.value == false && screen.width >= 1024) {
    desktopErrorMessage.innerHTML = "Whoops! It looks like you forgot to add your email.";
    desktopErrorMessage.style.display = 'block';
    emailInput.style.borderColor = 'hsl(354, 100%, 66%)';

    event.preventDefault();
  } else if (pattern.test(emailInput.value) === false && screen.width < 1024) {
    mobileErrorMessage.style.display = 'block';
    emailInput.style.borderColor = 'hsl(354, 100%, 66%)';

    event.preventDefault();
  } else if (pattern.test(emailInput.value) === false && screen.width >= 1024) {
    desktopErrorMessage.style.display = 'block';
    emailInput.style.borderColor = 'hsl(354, 100%, 66%)';

    event.preventDefault();
  }
}
