function createStatesOptions() {
  const states = document.getElementById('state');
  const statesOptions = ['AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RO', 'RR', 'RS', 'SC', 'SE', 'SP', 'TO'];
  for (let index = 0; index < statesOptions.length; index += 1) {
    const createOptions = document.createElement('option');
    states.appendChild(createOptions).innerText = statesOptions[index];
    states.appendChild(createOptions).value = statesOptions[index];
  }
}

function submitButton(event) {
  event.preventDefault();
  const inputValues = document.getElementsByTagName('input');
  for (index = 0; index < inputValues.length; index += 1) {
    const createDiv = document.createElement('div');
    createDiv.innerHTML = inputValues[index].value;
    const getSection = document.getElementById('submited-information');
    getSection.appendChild(createDiv);
  }
}

function clearButton() {
  const inputValues = document.getElementsByTagName('input');
  const textareaValue = document.getElementById('cv-resume');
  for (index = 0; index < inputValues.length; index += 1) {
    inputValues[index].value = '';
    textareaValue.value = '';
  }
  const getDiv = document.getElementById('submited-information');
  getDiv.innerHTML = '';
}

function validateDate() {
  document.getElementById('start-date').DatePickerX.init({ format: 'dd/mm/yyyy' });
}

function validateForm() {
  new window.JustValidate('.js-form', {
    rules: {
      name: {
        required: true,
        minLength: 50,
      },
      email: {
        required: true,
        email: true,
      },
      cpf: {
        required: true,
      },
      address: {
        required: true,
      },
      city: {
        required: true,
      },
      state: {
        required: true,
      },
      radio: {
        required: true,
      },
      cvResume: {
        required: true,
      },
      position: {
        required: true,
      },
      positionDescription: {
        required: true,
      },
      startDate: {
        required: true,
      },
    },
    messages: {
      required: 'The field is required',
    },
  });
}

function validateAndCopyForm() {
  validateForm();
  submitButton(event);
}

window.onload = function () {
  createStatesOptions();
}