'use strict';

const handleClick = () => {
  let elements = document.querySelectorAll('.button');
  for (let i = 0; i < elements.length; i += 1) {
    elements[i].addEventListener('click', function () {
      return console.log(elements[i].innerText);
      }); 
}
}

