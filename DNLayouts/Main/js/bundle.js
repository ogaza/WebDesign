(function (window, document) {
  var button = document.querySelector('.forecourt__toggle-button');
  button.addEventListener('click', handleToggleForeourtBtnClick);

  function handleToggleForeourtBtnClick(e) {
    var app = document.querySelector('.app-container');
    var forecourt = document.querySelector('.forecourt');

    const showForecourt =
      getComputedStyle(app).getPropertyValue('--show-forecourt') || 0;
    const showForecourtValue = parseInt(showForecourt);
    console.log('showForecourt: ', showForecourtValue);

    const newShowForecourtValue = (showForecourtValue + 1) % 2;
    console.log('newShowForecourtValue: ', newShowForecourtValue);

    const newShowForecourtState = !!newShowForecourtValue ? 'shown' : 'hidden';
    console.log('newShowForecourtState: ', newShowForecourtState);

    app.style.setProperty('--show-forecourt', newShowForecourtValue);
    forecourt.setAttribute('data-state', newShowForecourtState);
  }

  var button = document.querySelector('.admin-panel__toggle-button');
  button.addEventListener('click', handleAdminPanelToggleBtnClick);

  function handleAdminPanelToggleBtnClick(e) {
    var forecourt = document.querySelector('.admin-panel');

    const currentState = forecourt.getAttribute('data-state') ?? 'closed';
    const newState = currentState === 'closed' ? 'open' : 'closed';
    forecourt.setAttribute('data-state', newState);
  }

  // function setState() {
  //   var app = document.querySelector('#app');
  //   const currentState = app.getAttribute('data-state') ?? 'loading';

  //   app.setAttribute('data-state', getNewStateFor(currentState));
  // }

  /*
  var i = 0;
  function getNewStateFor(currentState) {
    if (currentState !== 'loading') return machine.states[currentState].on['CLICK'];

    if (i++ % 3) return machine.states[currentState].on['CLICK'];

    return 'error';
  }

  const machine = {
    initial: 'loading',
    states: {
      loading: {
        on: { CLICK: 'success' }
      },
      success: {
        on: { CLICK: 'loading' }
      },
      error: {
        on: { CLICK: 'loading' }
      }
    }
  };
  */
})(window, document);
