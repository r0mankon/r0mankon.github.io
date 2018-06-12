// toggle side nav
var nav = document.querySelector(".nav");
var closeButton = document.getElementById('btn-close');
var openButton = document.getElementById('btn-open');

openButton.addEventListener('click', function () {
  nav.style.width = '200px';
  openButton.style.zIndex = '1';
});

openButton.addEventListener('selectstart', function (event) {
  event.preventDefault();
});

closeButton.addEventListener('click', function () {
  nav.style.width = '0';
  openButton.style.zIndex = '2';
});

closeButton.addEventListener('selectstart', function (event) {
  event.preventDefault();
});