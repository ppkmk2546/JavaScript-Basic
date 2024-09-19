const box = document.getElementById('box')
let mode_Status;

function addDarkMode(){
    box.classList.add("darkMode");
}

function removeDarkMode(){
    box.classList.remove("darkMode");
}

function switchMode(){
    box.classList.toggle("darkMode");
    // mode_Status = box.classList.contains("darkMode"); // ? เขียนแบบปกติสร้างตัวแปรเก็บ  
    if(mode_Status = box.classList.contains("darkMode")){ // ? เขียนแบบลดรูป
        box.style.color="yellow";
    }else{
        box.style.color="red";
    }
    // console.log(mode_Status)
}


