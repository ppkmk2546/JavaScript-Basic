//let para1 = document.getElementsByTagName('p');

// ** อ้างอิง 
const title_EL = document.getElementById('title'); // ?อ้างอิงโดยใช้ id
const content_EL = document.querySelector('.content'); // ?อ้างอิงโดยใช้ selector นิยมการใช้ class 
const all_EL = document.querySelectorAll('p'); // ?อ้างอิงทั้งหมดของ tag p และถ้าให้แสดงผลมันจะแสดงเป็น NodeList
const box = document.querySelector('.box');
const menu = document.getElementById('menu');
const menu_2 = document.getElementById('menu-2');
const x = 10 , y = 20;

// console.log(para_3)
// console.log(para_2)
function displaytext(){
    //para_2.innerText="สอน JavaScript เบื้องต้น" // ?แสดงผลข้อความเฉยๆ
    // para_2.innerHTML="<b>สอน JavaScript เบื้องต้น</b>" // ?แสดงผลข้อความแล้วอยากให้ tag html มาใช้ร่วมด้วย
    //para_1.innerHTML = `แสดงผลข้อมูลตัวแปร x = ${x} และตัวแปร y = ${y}`; // ?การแสดงผลข้อความร่วมกับตัวแปรโดยใช้ Backtick = " ` " และเข้าถึงตัวแปรโดย ${}

    // ? เปลี่ยน Style element
    title_EL.style.color = "red";
    title_EL.style.backgroundColor = "#b1b3b1"
    title_EL.style.fontSize = "2rem"

    //content_EL.setAttribute('class', 'darkmode');

    //box.setAttribute('class', 'dark')
}

function displayLightmode() {
    // ** ดำเนินการผ่าน Method
    box.setAttribute('class', 'light')
}
function displayDarkmode() {
    box.setAttribute('class', 'dark')
}


/* 
    ! DOM Nodes
        ? document.createElement(element) // สร้าง element ใหม่
        ? document.removeChild(element) // ลบ node ลูก
        ? document.appendChild(element) // นำ element ไปต่อใน node แม่
        ? document.replaceChild(new, old) แทนที่ element 
*/
let count = 1;
function addItem(){

    const item = document.createElement('li'); // ?สร้าง li
    item.innerText = "Item " + (count++);
    menu.appendChild(item);
}

function deleteItem(){
    const item = document.getElementById('item-3');
    menu_2.removeChild(item);
}

function replaceItem() {
        // ! อ้างอิงแยกจากฟังก์ชัน ช่วยลดการทำซ้ำ (code redundancy) อ้างอิงอยู่ด้านบนสุดนอกฟั่งชั่น หรือจะเขียนในฟั่งชั่นก็ได้อยู่ที่วิธีและการใช้งาน
    // ?อ้างอิงไปยัง parent element (ul)
    // *const menu_2 = document.getElementById('menu-2');

    // ?อ้างอิงไปยังองค์ประกอบที่ต้องการแทนที่ (oldChild)
    const oldItem = document.getElementById('item-1');

    // ?สร้างองค์ประกอบใหม่ (newChild)
    const newItem = document.createElement('li');
    newItem.innerText = "X";

    // ?แทนที่ oldChild ด้วย newChild
    menu_2.replaceChild(newItem, oldItem);
}