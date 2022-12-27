const popup = document.querySelector('.popup');
const btn = document.querySelector('.btn__js');
const closePopup = document.querySelector('.close');

btn.addEventListener('click', () =>{
    popup.classList.add('open');
});

closePopup.addEventListener('click', () => {
    popup.classList.remove('open');
});

