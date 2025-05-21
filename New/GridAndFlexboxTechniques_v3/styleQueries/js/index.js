const checkbox = document.querySelector('#theme-box');
const root = document.querySelector(':root');

checkbox.addEventListener('change', handleEvent);

function handleEvent(e) {
  switch(e.type) {
    case 'change':
      setTheme(checkbox.checked);
  }
}

function setTheme(isDark = false) {
  root.style.setProperty('--dark-theme', isDark);
}