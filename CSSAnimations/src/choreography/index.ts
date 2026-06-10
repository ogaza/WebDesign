import '../styles/base.css';
import './styles/ball.css';
import './styles/button.css';
import './styles/formAnimations.css';
import './styles/style.css';

var button = document.getElementsByClassName('ui-button')[0];
button.addEventListener('click', handleEvent);

function handleEvent(e) {
  console.log('handling event: ', e);

  switch (e.type) {
    case 'click':
      setState('subscribing');
      break;
  }
}

function setState(state) {
  console.log('button clicked, new state is:', state);
}
