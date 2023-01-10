(function(window, document){

  const link = 
    document.getElementsByClassName("item__link")[0];
  const slidingWindow = 
    document.getElementsByClassName("slidingItem")[0];

  link.addEventListener("click", (x, y, z)=> {
    x.preventDefault();
    x.stopPropagation();
    slidingWindow.classList.toggle("slidingItem--hidden")
  })
})(window, document);