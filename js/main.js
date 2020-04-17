'use strict';
//Slider block
$(document).ready(function () {
  $('.header-slider').slick({
    dots: true,
    arrows: false,

  });
});

//Main block 

var writeUsPopup = document.querySelector('.modal');
var writeUsBtn = document.querySelector('.address-block__btn');
var writeUsBtnClose = document.querySelector('.modal-close');
var overlay = document.querySelector('.overlay');
var writeUsUserName = writeUsPopup.querySelector('[name=write-us__user-name]');
var writeUsUserEmail = writeUsPopup.querySelector('[name=write-us__user-email]');
var writeUsForm = writeUsPopup.querySelector('.write-us');

window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (writeUsPopup.classList.contains('modal-show')) {
      writeUsPopup.classList.remove('modal-show');
      overlay.classList.remove('overlay-show');
      writeUsPopup.classList.remove('modal-error');
    }
  }
});

writeUsBtn.addEventListener('click', function (evt) {
  evt.preventDefault();
  writeUsPopup.classList.add('modal-show');
  overlay.classList.add('overlay-show');
  writeUsUserName.focus();
});

writeUsBtnClose.addEventListener('click', function (evt) {
  evt.preventDefault();
  writeUsPopup.classList.remove('modal-show');
  overlay.classList.remove('overlay-show');
  writeUsPopup.classList.remove('modal-error');

});

overlay.addEventListener('click', function (evt) {
  evt.preventDefault();
  writeUsPopup.classList.remove('modal-show');
  overlay.classList.remove('overlay-show');
});

writeUsForm.addEventListener('submit', function (evt) {
  if (!writeUsUserName.value || !writeUsUserEmail.value) {
    evt.preventDefault();
    writeUsPopup.classList.add('modal-error');
    // writeUsUserName.placeholder = 'PLease, enter your name!';
    // writeUsUserEmail.placeholder = 'PLease, enter your email!';
    // writeUsUserEmail.style.placeholder.color = 'red';
    // console.log('Name and Email were not entered!');

  }

  // console.log(writeUsUserName.value);
  // console.log(writeUsUserEmail.value);

})