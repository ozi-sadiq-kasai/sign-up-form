const firstName = document.querySelector('#fname');
const lastName = document.querySelector('#lname');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const form = document.querySelector('form');

form.addEventListener('submit', e => {
  e.preventDefault();
  verify();
});

function setError(element, message) {
  const parent = element.parentElement;
  const displayError = parent.querySelector('.error');
  const icon = parent.querySelector('.icon');

  displayError.innerText = message;
  displayError.style.display = 'block';
  element.style.borderColor = 'red';
  icon.style.display = 'block';
}

function setActive(element) {
  const parent = element.parentElement;
  const displayError = parent.querySelector('.error');
  const icon = parent.querySelector('.icon');

  displayError.innerText = '';
  displayError.style.display = 'none';
  element.style.borderColor = '';
  icon.style.display = 'none';
}

const isValidEmail = email => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

function verify() {
  const firstNameValue = firstName.value.trim();
  const lastNameValue = lastName.value.trim();
  const passwordValue = password.value.trim();
  const emailValue = email.value.trim();

  if (firstNameValue === '') {
    setError(firstName, 'Provide a Firstname');
  } else {
    setActive(firstName);
  }

  if (lastNameValue === '') {
    setError(lastName, 'Provide a Lastname');
  } else {
    setActive(lastName);
  }

  if (passwordValue === '') {
    setError(password, 'Provide a password');
  }
  else if (passwordValue.length < 8 ) {
    setError(password, 'Password must be at least 8 character.')
  }
  else {
    setActive(password);
  }

  if (emailValue === '') {
    setError(email, 'Provide an Email');
  }
  else if (!isValidEmail(emailValue)) {
    setError(email, 'Looks like this is not an Email');
} 
  else {
    setActive(email);
  }
}
