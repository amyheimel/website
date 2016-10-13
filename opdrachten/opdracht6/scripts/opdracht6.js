/* 1. selecteer elementen met document.querySelector */
var zoekveld = document.querySelector('.zoekveld');
var button = document.querySelector('button');


var active = function () {
  /* 3. toggle een class op een element, dit triggert een CSS Transition (zie CSS: .zoekveld-active) */
    zoekveld.classList.toggle('-active')
}

/* 2. voeg een event toe aan een element */
button.addEventListener('click', active);
