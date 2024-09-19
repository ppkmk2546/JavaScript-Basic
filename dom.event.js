function welcome(){
    alert("Welcome to my website");
}

function hightlight(obj){
    obj.style.background="yellow";

}

function unhightlight(obj){
    obj.style.background="white";

}

function getMenu(){
    const menu = document.getElementById('menu');
    const display = document.getElementById('display');
    console.log(menu.value.toUpperCase());
    display.innerText = menu.value;
}

// ? EventListener

// * อ้างอิง
const menu_2 = document.getElementById('menu_2')
const display_2 = document.getElementById('display_2');

// * event
menu_2.addEventListener('change', getMenu_2);

function getMenu_2(){
    display_2.innerText = menu_2.value;
}