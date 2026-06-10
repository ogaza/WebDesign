window.addEventListener('DOMContentLoaded', startTheApp);

var form;
var loginContainer;

// the DOM is loaded
function startTheApp() {
  form = document.forms.myForm;
  form.addEventListener('submit', handleFormSubmit);
  addClickHandlerToLeftPanel();
}

function handleFormSubmit(event) {
  event.preventDefault();
  console.log('form submit button clicked');
  // TODO Here the data can be sent to the server
}

function addClickHandlerToLeftPanel() {
  loginContainer = document.querySelector('.login-container');
  loginContainer.addEventListener('focusin', handlePanelFocus);
  //   var panel = document.querySelector('.panel__right');
  //   panel.addEventListener('click', handlePanelClick);
}

function handlePanelFocus(e) {
  setState(e.type);
}

function setState(action) {
  var loginContainer = document.querySelector('.login-container');
  const currentState = loginContainer.getAttribute('data-state') ?? 'inactive';

  const newState = getNewStateFor(currentState, action);
  console.log('setting state: ', newState);

  loginContainer.setAttribute('data-state', newState);
}

function getNewStateFor(currentState, action) {
  return machine.states[currentState].on[action];
}

const machine = {
  initial: 'inactive',
  states: {
    inactive: {
      on: { focusin: 'active', focusout: 'inactive' }
    },
    active: {
      //   on: { CLICK: 'inactive' }
      on: { focusin: 'active', focusout: 'inactive' }
    }
  }
};
