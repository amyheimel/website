/* 1. Uitschuiven van zoekveld d.m.v. javascript */
var zoekveld = document.querySelector('.zoekveld');
var button = document.querySelector('button');


var active = function () {
    zoekveld.classList.toggle('zoekveld-active')
    button.classList.toggle('button-active')
}

button.addEventListener('click', active);


/* 1. Meer verhalen weergeven */
/*
var meerartikelen = document.querySelector('.artikelen-inactief');
var knop = document.querySelector('.meerverhalen-knop');


var verhalen = function () {
    meerartikelen.classList.toggle('.artikelen-actief')
}

knop.addEventListener('click', verhalen);

