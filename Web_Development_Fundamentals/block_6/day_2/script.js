function createStatesOptions() {
  const states = document.getElementById('state');
  const statesOptions = ['AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RO', 'RR', 'RS', 'SC', 'SE', 'SP', 'TO'];
  let value = 1;
  for (let index = 0; index < statesOptions.length; index += 1) {
    const createOptions = document.createElement('option');
    states.appendChild(createOptions).innerText = statesOptions[index];
    states.appendChild(createOptions).value = statesOptions[index];
  }
}

function validateDate() {
  document.getElementById('start-date').DatePickerX.init({ format: 'dd/mm/yyyy' });
}

function submitButton(event) {
  event.preventDefault();
  const inputValues = document.getElementsByTagName('input');
  for (index = 0; index < inputValues.length; index += 1) {
    const createDiv = document.createElement('div');
    createDiv.innerHTML = inputValues[index].value;
    const getDiv = document.getElementById('submited-information');
    getDiv.appendChild(createDiv);
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

window.onload = function () {
  createStatesOptions();
  validateDate();
}