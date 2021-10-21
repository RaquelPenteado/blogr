
function product() {
var menu = document.getElementById('submenu');
    if(menu.style.display == 'flex'){
        menu.style.display = 'none';
    } else{
        menu.style.display = 'flex';
    }
}

function company() {
    var menu = document.getElementById('submenu2');
        if(menu.style.display == 'flex'){
            menu.style.display = 'none';
        } else{
            menu.style.display = 'flex';
        }
}

function connect() {
    var active = document.querySelector('.arrow');
    var menu = document.getElementById('submenu3');
        if(menu.style.display == 'flex'){
            menu.style.display = 'none';
            active.classList.add('on');

        } else{
            menu.style.display = 'flex';
            active.classList.remove('on');

        }
}

const btn = document.querySelector('.btn-close');
const menuClose = document.querySelector('.menu-hamburguer');
const hamburguer = document.querySelector('.hamburguer')

btn.addEventListener('click', hide);
hamburguer.addEventListener('click', hide)

function hide() {
    menuClose.classList.toggle('menu-hamburguer-hide');
    hamburguer.classList.toggle('hamburguer-hide');
}
