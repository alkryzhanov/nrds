'use strict';

//Main block 

var writeUsPopup = document.querySelector('.modal');
var writeUsBtn = document.querySelector('.address-block__btn');
var writeUsBtnClose = document.querySelector('.modal-close');
var overlay = document.querySelector('.overlay');
var writeUsUserName = writeUsPopup.querySelector('[name=write-us__user-name]');
var writeUsUserEmail = writeUsPopup.querySelector('[name=write-us__user-email]');
var writeUsForm = writeUsPopup.querySelector('.write-us');
var mapImg = document.querySelector('.map__img');
var addressBlock = document.querySelector('.address-block');
var footerListLink = document.querySelectorAll('.footer-list__link');

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
  }
})

mapImg.addEventListener('mouseover', function (evt) {
  evt.preventDefault();
  addressBlock.classList.add('bounce-in-left');
})
mapImg.addEventListener('mouseout', function (evt) {
  evt.preventDefault();
  addressBlock.classList.remove('bounce-in-left');
})

for (let i = 0; i < footerListLink.length; i++) {
  footerListLink[i].addEventListener('mouseover', function (evt) {
    evt.preventDefault();
    footerListLink[i].classList.add('pulsate-bck');
  })

  footerListLink[i].addEventListener('mouseout', function (evt) {
    evt.preventDefault();
    footerListLink[i].classList.remove('pulsate-bck');
  })

}