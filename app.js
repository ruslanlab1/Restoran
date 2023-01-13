const burger = document.querySelector('#burger');
const menu = document.querySelector('#menu');

burger.addEventListener('click', () => {
    if(menu.classList.contains('disp') == true){
        menu.classList.remove('disp');
    }else{
        menu.classList.add('disp');
    }
});