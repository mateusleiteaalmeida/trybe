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

function validateDate(data) {
  if (data.match(/^(?:(0[1-9]|1[012])[\- \/.](0[1-9]|[12][0-9]|3[01])[\- \/.](19|20)[0-9]{2})$/)){
    return true;
  } else {
    return false;
  }
}

function validateInputDate() {
  const inputData = document.getElementById('start-date');
  let data = inputData.value;
  const userData = validateDate(data);
  if (!userData && data.length) {
    inputData.value = '';
    alert('Data inválida');
    return false;
  }
  return userData;
}

window.onload = function () {
  createStatesOptions();
}