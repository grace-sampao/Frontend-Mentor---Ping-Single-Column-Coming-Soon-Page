const subscriptionForm = document.getElementById('subscription-form');
const emailInput = document.getElementById('email-input');
const mobileErrorMessage = document.getElementById('mobile-error-message');
const desktopErrorMessage = document.getElementById('desktop-error-message');

subscriptionForm.addEventListener('submit', submitForm);

function submitForm(event) {
  if (emailInput.value == false && screen.width < 1024) {
    mobileErrorMessage.innerHTML = "Whoops! It looks like you forgot to add your email.";
    mobileErrorMessage.style.display = 'block';
  } else if (emailInput.value == false && screen.width >= 1024) {
    desktopErrorMessage.innerHTML = "Whoops! It looks like you forgot to add your email.";
    desktopErrorMessage.style.display = 'block';
  }

  event.preventDefault();
}
