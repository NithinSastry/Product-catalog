const isBlank = (value) => {
  return value.length == 0 ? true : false;
};

export const validateError = (e) => {
  let errorMessage = '';
  switch (e.target.name) {
    case 'credit-card-number':
      if (isBlank(e.target.value)) {
        errorMessage = 'Please enter credit card number';
      }
      break;

    default:
      break;
  }
  return errorMessage;
};

export const showError = (e, errorMessage = '') => {
  // 1. Adds error-field class to the control
  e.target.classList.add('error-field');

  //2. create a new error message and insert into DOM
  let errorElement = document.querySelector(
    `.error-message#error-message-${e.target.name}`
  );
  if (!errorElement) {
    errorElement = document.createElement('div');
    errorElement.className = 'error-message';
    errorElement.id = `error-message-${e.target.name}`;
  }
  errorElement.style.display = 'block';
  errorElement.innerHTML = errorMessage;
  e.target.insertAdjacentElement('afterend', errorElement);
};

export const removeError = (e) => {
  if (e.target.classList.contains('error-field')) {
    e.target.classList.remove('error-field');
  }
  let errorElement = document.querySelector(
    `.error-message#error-message-${e.target.name}`
  );
  errorElement.style.display = 'none';
};
