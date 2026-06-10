import './../styles/base.css';
import './index.css';

document.body.addEventListener('click', handleClick);

function handleClick(e) {
  document.body.style.setProperty('--bg-color', 'lightblue');
}
