window.addEventListener('DOMContentLoaded', startTheApp);

var app;
var form;
var loginContainer;

// the DOM is loaded
function startTheApp() {
  app = document.querySelector('.app-container');
  form = document.forms.myForm;
  loginContainer = document.querySelector('.login-container');

  form.addEventListener('submit', handleFormSubmit);
  app.addEventListener('mousedown', handleMousedown);
}

function handleFormSubmit(event) {
  event.preventDefault();
  console.log('form submit button clicked');
  // TODO Here the data can be sent to the server
}

function handleMousedown(e) {
  var [eventX, eventY] = getEventCoordinates(e);
  const boundingClientRect = loginContainer.getBoundingClientRect();

  var isX = 
    eventX > boundingClientRect.left && 
    eventX < boundingClientRect.right;
  var isY = 
    eventY > boundingClientRect.top &&
    eventY < boundingClientRect.bottom;

  if(isX && isY){
    loginContainer.setAttribute('data-state', 'active');

    return;
  }

  const currentState = 
    loginContainer.getAttribute('data-state') ?? 'inactive';
 
    loginContainer.setAttribute(
      'data-state', 
      currentState == 'active' 
        ?'inactive'
        :'active');
}

export function getEventCoordinates(e) {
  switch (e.type) {
    case 'mousedown':
      return [e.clientX, e.clientY];
    case 'touchstart': {
      const x = e.touches[0].clientX;
      const y = e.touches[0].clientY;

      return [x, y];
    }
    default:
      return [];
  }
}
