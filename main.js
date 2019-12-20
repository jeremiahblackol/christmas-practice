var parent = document.querySelector('.header-styles');
var imagePlacer = document.querySelector('.appear-img');
var buttonStuff = document.querySelectorAll('.button-styles')

parent.addEventListener('click', somethingHappens);

function somethingHappens(event) {
  event.target.classList.add('clicked-status');
  buttonStuff.classList.remove('button-styles');
  console.log('hey');

}
