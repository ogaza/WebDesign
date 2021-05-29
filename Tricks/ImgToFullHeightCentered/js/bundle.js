(function(window, document){

  const onResize = function() {

    const main = document.getElementsByClassName("main")[0];
    const bgImage = document.getElementsByClassName("bgImage")[0];
    const imageContainer = document.getElementsByClassName("imageContainer")[0];
  
    const imgNaturalWidth = bgImage.naturalWidth;
    const imgNaturalHeight = bgImage.naturalHeight;

    var windowWidth = window.outerWidth;
    var windowHeight = window.outerHeight;

    var ratio = Math.max(windowHeight / imgNaturalHeight, windowWidth / imgNaturalWidth, 1);

    var computedWidth = imgNaturalWidth * ratio;
    var computedHeight = imgNaturalHeight * ratio;

    var left = (windowWidth - computedWidth) / 2;
    var top = (windowHeight - computedHeight) / 2;

    main.style.height = `${windowHeight}px`;
    main.style.width = `${windowWidth}px`;

    imageContainer.style.height = `${computedHeight}px`;
    imageContainer.style.width = `${computedWidth}px`;
    imageContainer.style.top = `${top}px`;
    imageContainer.style.left = `${left}px`;
    imageContainer.style.position = "absolute";
  }

  const init = function(){
    window.addEventListener('resize', onResize);
  }

  init();

})(window, document);