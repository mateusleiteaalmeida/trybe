function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.
function createDaysOfTheMonth(){
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  const ul = document.getElementById('days');
  for (index = 0; index < dezDaysList.length; index += 1) {
    const day = dezDaysList[index];
    const li = document.createElement('li');
    if (day === 25) {
      li.className = 'day holiday friday';
      li.innerHTML = day;
      ul.appendChild(li);
    } else if (day === 24 || day === 31) {
      li.className = 'day holiday';
      li.innerHTML = day;
      ul.appendChild(li);
    } else if (day === 4 || day === 11 || day === 17) {
      li.className = 'day friday';
      li.innerHTML = day;
      ul.appendChild(li);
    } else {
      const li = document.createElement('li');
      li.className = 'day';
      li.innerHTML = day;
      ul.appendChild(li);
    }
  }
}
createDaysOfTheMonth();

function createHolidays(name) {
  const button = document.createElement('button');
  button.id = 'btn-holiday';
  button.innerHTML = name;
  const getContainer = document.getElementsByClassName('buttons-container')[0];
  getContainer.appendChild(button);
}

createHolidays('Feriados');

function colorHolidaysBackground() {
  const getButton = document.getElementById('btn-holiday');
  const getHolidays = document.getElementsByClassName('holiday');
  const color = "rgb(238,238,238)";
  const newColor = "green";
  getButton.addEventListener('click', function() {
    for (index = 0; index < getHolidays.length; index += 1) {
      if (getHolidays[index].style.background === newColor) {
        getHolidays[index].style.background = color;
      } else {
        getHolidays[index].style.background = newColor;
      }
    }
  })
}

colorHolidaysBackground();

