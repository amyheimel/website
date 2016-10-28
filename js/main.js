
/* 1. Uitschuiven van zoekveld d.m.v. javascript */
var zoekveld = document.querySelector('.zoekveld');
var button = document.querySelector('button');


var active = function () {
    zoekveld.classList.toggle('zoekveld-active')
    button.classList.toggle('button-active')
}

button.addEventListener('click', active);



/* 2. Artikel toevoegen aan lijstje*/
var toevoegknop = document.querySelector('.toevoegen-lijstje-inactief');
var popup = document.querySelector('.toegevoegd-popup');

var toegevoegd = function () {
    toevoegknop.classList.toggle('toevoegen-lijstje-actief')
    popup.classList.toggle('toegevoegd-popup-actief')
}

toevoegknop.addEventListener('click', toegevoegd);
