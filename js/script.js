const popup = document.querySelector('.popup');
const btn = document.querySelector('.btn__js');
const closePopup = document.querySelector('.close');
const overlay = document.querySelector('.overlay');

btn.addEventListener('click', () =>{
    popup.classList.add('open');
});

closePopup.addEventListener('click', () => {
    popup.classList.remove('open');
});

overlay.addEventListener('click', () => {
    popup.classList.remove('open');
});

window.addEventListener("keydown", function(e) {
    if (e.code === "Escape" && popup.classList.contains('open')) {
        popup.classList.remove('open');
        btn.focus();
    }
});


    

