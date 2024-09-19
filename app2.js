// let age = 15;

// if(age >= 15 && age <= 18){
//     // คำสั่งให้ทำอะไร
//     console.log("เป็นวัยรุ่น");
// }
// -----------------------------------

// ? If..Else

/*let balance = 5000;
let withDraw = 6000;

if(withDraw <= balance){ //เมื่อเงื่อนไขเป็นจริง
    console.log("ดำเนินการถอนเงิน = ", withDraw);
    balance -= withDraw;    
    console.log("จำนวนเงินคงเหลือ = ", balance);

}else{ //เมื่อเงื่อนไขเป็นเท็จ
    console.log("ยอดเงินของคุณไม่เพียงพอ")
}*/
// -----------------------------------

//  ? If แบบหลายเงื่อนไข

/*let score = 75;

if(score>=80){
    console.log("Grade = A");
}
else if(score>=70){
    console.log("Grade = B");
}
else if(score>=60){
    console.log("Grade = C");
}
else if(score>=50){
    console.log("Grade = D");
}
else{
    console.log("Grade = F");
}*/
// -----------------------------------

//  ? Ternary Operator เขียนแบบลดรูป

// let score = 50;

// let pass = score >= 50 ? "ผ่านเกณฑ์" : "ไม่ผ่านเกณฑ์";
// console.log(pass);

/*if(score >=50){
     console.log("ผ่านเกณฑ์");
}
else{
     console.log("ไม่ผ่านเกณฑ์");
}*/
// -----------------------------------

// ? การเขียนเงื่อนไขซ้อนกัน (If ซ้อน If)

/*let age = 17;

if(age <= 15){
    if(age == 15){
        console.log("ม.3")
    }
    else if(age == 14){
        console.log("ม.2");
    }
    else if(age == 13){
        console.log("ม.1");
    }
    else{
        console.log("ประถมศึกษา");
    }
}
else{
    console.log("ม.ปลาย หรือ นักศึกษา");
}*/
// -----------------------------------

//  ? Switch..Case

/*let season = 1;

switch(season){
    case 1:
        console.log("Summer");
        break;
    case 2:
        console.log("Rainy");
        break;
    case 3:
        console.log("Winter");
        break;
    default:
        console.log("Invalid season");
}*/
// -----------------------------------

//  ! โปรแกรมหาเลขคู่  - เลขคี่

/*let  x = 12222;

if(x%2 == 0){
    console.log("เลขคู่")
}
else{
    console.log("เลขคี่")
}*/

// โปรแกรมเปรียบเทียบตัวเลข

/*let x = 156599, y = 156599;

if(x>y){
    console.log("X ค่ามากที่สุด");
}
else if(x<y){
    console.log("Y ค่ามากที่สุด");
}
else{
    console.log("มีค่าเท่ากัน");
}*/
// -----------------------------------

//  ? While Loop 

/*let count = 1;
while(count <= 3){
    console.log("Hello World");
    count++;

}*/

/*let count = 1;
while(count <= 5){
    console.log("ผลิตสินค้าชิ้นที่ ", count);
    if(count == 3){
        break;
    }
    count++;
}*/

//  ! โจทย์ While Loop
/*let i = 1;

while(i<=20){
    if(i % 2 == 0){
        console.log(i);
    }
    i++;
}*/

/*let i = 1, sum = 0;
while(i <= 10){
    if(i % 2 !== 0){
        sum += i;
        console.log(i);
    }
    i++;
}
console.log(sum);*/
// -----------------------------------

//  ? for loop

/*for(let count = 1; count<=5; count++){
    console.log("Hello World");
    
}*/
// -----------------------------------

//  ? do while loop
// let count = 1;

/*do{
    console.log(count);
    count++;
}while(count <= 5);*/

/*while(true){
    if(count == 200)
        break;
    count++;
    console.log(count);
    
}*/
// -----------------------------------

// ! ข้อแตกต่างและการใช้งาน Loop

// For ใช้ในกรณีรู้จำนวนรอบที่ชัดเจน
// while ใช้ในกรณีที่ไม่รู้จำนวนรอบ
// Do while ใช้ในกรณีที่อยากให้ลองทำก่อน 1 รอบ แล้วทำซ้ำไปเรื่อยๆตราบเท่าที่เงื่อนไขเป็นจริง
// -----------------------------------


// ? Break & continue

/*for(let count = 1; count <= 10; count++ ){
    if(count == 5)
        break;
    console.log(count);
}
console.log("จบโปรแกรม")*/

/*for(let count = 1; count <= 10; count++){
    if(count == 5)
        continue;
    console.log(count);
}
console.log("จบโปรแกรม");*/
// -----------------------------------

// !Function 
// ?Function ที่ไม่มีการรับค่าและส่งค่า

/*function print(){
    console.log("Hello World");
}

function message(){
    alert("แจ้งเตือนการโอนเงิน");
}

function displayname(){
    document.write("PpLarry");
}*/
// print(); การเรียกใช้ Function
// message();
// -----------------------------------

//  ? ฟังก์ชั่นที่มีการรับค่า

/*function plusNumber(x){
    console.log("เลขที่ส่งมาคือ = ",x);
}

plusNumber(5);
let number = 200;
plusNumber(number);*/


/*function fullname(fname , lname , city){
    console.log("ชื่อจริง = ",fname,"นามสกุล = ",lname,"ที่อยู่ = ",city);
}
fullname("Pp", "Larry");*/

/*function summation(x,y){
    let total = x+y;
    console.log("ผลรวม = ",total);
}
summation(500,1200);*/
// -----------------------------------

//  ? ฟังก์ชั่น Return ค่า

/*function getIP(){
    return "192.168.2.33";
}
let MyIp = getIP();
console.log("IP = ",MyIp);


function getNumber(){
    return 100*100;
}
let total = getNumber();
console.log("ผลการคูณเลข = ",total);

function getMyAddress(){
    let city = "Arizona";
    return city;
}
console.log("Address = ",getMyAddress());*/
// -----------------------------------


/*function setSalary(salary){
    let bonus = 1000;
    return salary + bonus;
}

let totalA = setSalary(15000);
console.log("เงินเดือนรวม = ", totalA);

let totalB = setSalary(20000);
console.log("เงินเดือนรวม = ", totalB);


function getName(name,city){
    return name + " " + city;
}
console.log(getName("ใจดี", "ปทุมธานี"));

function summation(x,y){
    return x + y;
}
let total = summation(120,450);
console.log("ผลบวกรวม = ",total);*/
// -----------------------------------

//  ? ฟังก์ชั่นแบบกำหนดค่าเริ่มต้น

/*function fullname(fname, lname, city="กรุงเทพมหานคร"){
    console.log("ชื่อ = ",fname, "นามสกุล = ",lname, "จังหวัด = ",city);
}
fullname("พันธ์พิชิต", "พัวพันธ์", "ลพบุรี");
fullname("ใจดี", "มีตังค์",);*/
// -----------------------------------

// ? ขอบเขตของตัวแปร

/*let a = 100; //global ทั่วถึง

function display(){
    let a = 50; //local บางส่วน
    console.log("a ในฟังก์ชั่น = ",a);
    console.log("a ในฟังก์ชั่น = ",a);
}
console.log("a นอกฟังก์ชั่น = ",a);
console.log("a นอกฟังก์ชั่น = ",a);
display();*/
// -----------------------------------

// ? Array Properties

/*let colors = ["red", "green", "blue", "yellow"];
let count = colors.length;
console.log("Before = ",colors);

let result = colors.sort();
console.log("After = ",result);

let fruits = ["mango", "avocado", "apple", "coconut"];
console.log("Sort = ",fruits.sort()); //เรียงพญัชนะไปสระ
console.log("Reverse = ",fruits.reverse()); //เรียงจากสระไปพญัชนะ

let colors_2 =["green", "red", "pink", "purple", "yellow"];
console.log(colors_2[0]); //ตัวแรก
console.log(colors_2[colors_2.length-1]); //ตัวสุดท้าย

let occupation =["artist", "doctor", "farmer", "pilot"];
console.log("Before = ",occupation);
occupation.push("programmer"); //เพิ่มสมาชิก
console.log("After = ", occupation);*/
// -----------------------------------

// ? เข้าถึงสมาชิกใน Array ด้วย For Loop

/*let colors = ["red", "green", "blue", "purple", "yellow", "pink", "skyblue", "grey"];
colors.push("black");

for(let i = 0; i<colors.length; i++){
    console.log("index = ",i ,"value = ",colors[i]);
    // console.log("index = ",(i+1) ,"value = ",colors[i]); 
}*/
// -----------------------------------

// ? เข้าถึงสมาชิกใน Array ด้วย ForEach

/*let colors = ["green", "blue", "red", "yellow"];

function getcolors(color){
    console.log(color);
}
colors.forEach(getcolors);*/

/*let numbers = [1, 2, 3, 4, 5,];
function getSquare (number){
    console.log("กำลังสองของ = ",number, "=", number * number);
}
numbers.forEach(getSquare);*/
// -----------------------------------

// ? แปลง Array เป็น String และ pop

// let colors = ["red", "green", "blue", "yellow", "pink"]
//let x = colors.toString(); //เขียนแบบกำหนดตัวแปร
//console.log(x);
//console.log(colors.toString()); //เขียนแบบบรรทัดเดียวไปเลย
//console.log(typeof(x)); //เช็คว่าเป็นข้อมูลชนิดอะไร

// let y = colors.join(" ");
// console.log(y);

// console.log("Before pop = ",colors); //Before
// colors.pop(); //pop เอาข้อมูลตัวสุดท้ายออก
// console.log("After pop = ", colors); //After แสดงผลล่าสุดหลังเอาออก
// let getcolor = colors.pop(); //เอาตัว pop ออกมาใช้แล้วเก็บในตัวแปร getcolor
// console.log("Get Color = ", getcolor); //แสดงผลที่เราดึงข้อมูล pop ออกมา


/*console.log(colors.join(" "));
let getcolor = colors.pop();
console.log(getcolor);*/
// -----------------------------------

// ? การรวม Array

/*let fruits = ["ส้ม","แอปเปิ้ล"];
let vegatables = ["คะน้า","ผักชี","ผัดกาด"];
let hardware = ["เม้าส์", "คีย์บอร์ด"];

let carts = fruits.concat(vegatables,hardware);
console.log("ตะกร้าสินค้า = ",carts);*/
// -----------------------------------


// ? การเรียงลำดับสมาชิกใน Array

// ** default ตัวอย่าง
/*let points =[20, 100, -100, 5, -25, 10];
console.log(points);

// ** เรียงจากน้อยไปมาก
points.sort(function(a,b){
    return a - b;
});
console.log(points);

// ** เรียงจากมากไปน้อย
points.sort(function(a,b){
    return b - a;
});
console.log(points);*/


// ? JavaScript Object

/*let employee = {
    name: "PpLarry",
    age: 21,
    tel: "0612192740",
    email: "Larry@gmail.com",
    salary: 25000.00,
    
    // ? Method
    getemployee:function(){
        return "ชื่อ " + this.name +" "+ "เงินเดือน " + this.salary + " บาท";
    },
    getbonus:function(){
        return "เงินโบนัสประจำปี " + (this.salary + 60000.00) + " บาท";
    },

    getNetSalary: function(taxPercentage){
        let taxAmount = (this.salary * taxPercentage) / 100;
        let netSalary = this.salary - taxAmount;
        return "เงินเดือนหลังหักภาษี " + netSalary + " บาท";
    }

}
// ** แสดงแบบธรรมดา
console.log("ชื่อ ", employee.name);
console.log("เงินเดือน ", employee.salary);

// ** เรียกใช้ method
console.log(employee.getemployee());
console.log(employee.getbonus());
console.log(employee.getNetSalary(10));

// ** แสดงผลหน้าเว็บไซต์
document.write(employee.getemployee());*/
// -----------------------------------


// ? การยืนยันด้วย Confirm

function deleteData(){
    let result = confirm("คุณต้องการลบข้อมูลหรือไม่ ?");
    if(result){
        console.log("ลบข้อมูลเรียบร้อย");
    }else{
        console.log("ยกเลิกการลบข้อมูล")
    }
}


