// 1. Dodanie nowego elementu przy ładowaniu strony
const newElement = document.createElement('div');
newElement.textContent = "Przycisk";
document.body.appendChild(newElement);

// 2. Zmiana koloru paragrafu
const pierwszyParagraf = document.querySelector('p');
pierwszyParagraf.style.color = 'green';

// 3. Dla chętnych: pobierz element paragrafu nr 2.
const drugiParagraf = document.querySelectorAll('p')[1];

// Pobierz element przycisku i uruchom na nim metodę addEventListener na zdarzenie ‚click’.
const button = document.querySelector('button');

// W metodzie addEventListener zmień kolor przycisku.
button.addEventListener('click', function() {
  this.style.backgroundColor = 'pink';
});

