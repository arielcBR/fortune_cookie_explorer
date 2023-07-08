const startPage = document.querySelector('.home');
const messagePage = document.querySelector('.result');
const cookie = document.querySelector('#cookie');
const message = document.querySelector('#message');
const btn = document.querySelector('#btnNewCookie');

cookie.addEventListener('click', () => { 
    cookie.classList.add('shake');
});

cookie.addEventListener('animationend', () => {
    setTimeout(() => {
        messagePage.classList.remove('hide');
        startPage.classList.add('hide');
        message.classList.add('popUp');
    }, 500);
});

btn.addEventListener('click', () => {
    window.location.reload();
});
