var selectPlanButton = document.querySelectorAll('.plan button');
var backdrop = document.querySelector('.backdrop');
var popup = document.querySelector('.modal');
var buttonModal = document.querySelector('.modal button');
var toggleButton  =document.querySelector('.toggle-button');
var mobileNav = document.querySelector('.mobile-nav');


for (let elem of selectPlanButton) {
    elem.addEventListener('click', () => {
        backdrop.style.display = "block";
        popup.style.display = "block";
    })
}

if (backdrop) {
    backdrop.addEventListener('click', () => {
        backdrop.style.display = "none";
        if (popup) {
            popup.style.display = "none";
        }
        if (mobileNav) {
            mobileNav.style.display = "none";
        }
    })
}

if (buttonModal) {
    buttonModal.addEventListener('click', () => {
        backdrop.style.display = "none";
        popup.style.display = "none";
    })
}

if (toggleButton) {
    toggleButton.addEventListener('click', ()=> {
        mobileNav.style.display = 'block';
        backdrop.style.display = "block";
    })
}