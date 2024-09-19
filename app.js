// document.write("<h1>PpLarry.com</h1>");
// document.write("<p>hello World</p>");

// alert("สวัสดีครับ");

// console.log("Hello Javascript");
// console.error("Error");
// console.warn("Warning");
// -----------------------------------

// การสร้างตัวแปร แบบกำหนด Type ให้แบบถูกต้อง
// let name1; //สร้างตัวแปรแต่ไม่มีการกำหนดค่า
// name1 = "Larry" //กำหนดข้อความลงไปเก็บในตัแปร name1ฃ

// การสร้างตัวแปร แบบ Dynamics type ภาษาจะรู้เลยว่าเราสร้างตัวแปรนี้แล้วจะเป็นชนิดข้อมูลอะไร
// let age = 21;

// หรือจะเขียนย่อได้ดังนี้
// let name1 = "Larry", age = 21, Name1 = "JavaScript" //ยกตัวอย่างเคส sensitive การสร้างตัวแปรพิมเล็กพิมใหญ่
// const vat = 0.07; // ค่าคงที่
// console.log("Befor = ",name1);

// name1 = "PpLarry" //กำหนดค่าตัวแปรใหม่ให้ name1
// console.log("After = ",name1);

// console.log(Name1);
// document.write(name1);

// console.log("อายุ = ", age);
// -----------------------------------

// ชนิดข้อมูล
// let money = 500; //number (interger)
// let price = 99.99; //number (float)
// let message = "Hello World";
// let name1 = "PpLarry";
// let check1 = true;
// let check2 = false;

// console.log(typeof(money));
// console.log(typeof(price));
// console.log(typeof(message));
// console.log(typeof(name1));
// console.log(typeof(check1));
// console.log(typeof(check2));

// การแปลงชนิดข้อมูล
/*let price = +"20.55";

console.log(price);
console.log(typeof(price));

let price1 =  65.55+"";
console.log(price1);
console.log(typeof(price1));*/
// -----------------------------------

// อาร์เรย์ Array
// วิธีสร้าง Array วิธีที่ 1 *******
// let number = Array(100, 200, 300, 400, 500, 600,);
// console.log(number);

// index เริ่มต้นที่เลข 0 หมายถึงสมาชิกตัวแรก
// console.log("ตัวแรก = ", number[0]);
// console.log("ตัวที่ 4 = ", number[3]); //400 เป็นสมาชิกตัวที่ 4 โดยมีระดับ index คือที่ 3

// วิธีสร้าง Array วิธีที่ 2 *******
// let color = ["red","green","blue","pink"];
// color[1] = "yellow"; //เปลี่ยนค่าตัวแปรใน array
// console.log(color);

// let days = ["Monday", "Tuesday", "Wednesday", "Thursday"];
// console.log(days);
// -----------------------------------

// operator
// let a = 20, b = 10;
// ตัวดำเนินการทางคณิตศาสตร์
// console.log("ผลบวก = ", a + b);
// console.log("ผลลบ = ", a - b);
// console.log("ผลคูณ = ", a * b);
// console.log("ผลหาร = ", a / b);
// console.log("ผลเศษ = ", a % b);
// console.log("ยกกำลัง = ", b**2);

// ตัวดำเนินการเปรียบเทียบ
// let a = 5, b = 10;
// console.log("เท่ากันหรือไม่ = ", a == b);
// console.log("ไม่เท่ากันหรือไม่ = ", a != b);
// console.log("มากกว่าหรือไม่ = ", a > b);
// console.log("น้อยกว่าหรือไม่ = ", a < b);
// console.log("มากกว่าหรือเท่ากับ = ", a >= b);
// console.log("น้อยกว่าหรือเท่ากับ = ", a <= b);

// ตัวดำเนินการเปรียบเทียบ
//and  (true) => ซ้าย && ขวา เป็นจริงทั้งคู่ 
//or (true) => ซ้าย || ขวา เป็นจริง

// let a_score = 70;
// console.log(a_score>=70 && a_score<= 80);

// let b_score = 100;
// console.log(b_score>= 70 || b_score<=80);

// ตัวดำเนินการเพิ่มค่า - ลดค่า 
// let a = 5, b = 10;
// เพิ่มค่า Prefix
// console.log("ค่าเริ่มต้น = ", a);
// console.log("ค่าแบบ prefix = ",++a);
// console.log("ค่าปัจจุบัน = ", a);

// a = 5; //reset
// เพิ่มค่า Postfix
// console.log("ค่าเริ่มต้น = ", a);
// console.log("ค่าแบบ postfix = ",a++);
// console.log("ค่าปัจจุบัน = ", a);

// ลดค่า Prefix
//  console.log("ค่าเริ่มต้น = ", b);
//  console.log("ค่าแบบ prefix = ",--b);
//  console.log("ค่าปัจจุบัน = ", b);

// ลดค่า Postfix
//  b = 10; //reset
//  console.log("ค่าเริ่มต้น = ", b);
//  console.log("ค่าแบบ postfix = ",b--);
//  console.log("ค่าปัจจุบัน = ", b);
// -----------------------------------

// Compound Assignment
// let x = 10, y = 20;
// console.log("ก่อน = ",x);
// x+=y;  // ความหมาย x = x + y;
// x-=y; // ความหมาย x = x - y;
// x*=y
// x/=y 
// x%=y
// console.log("หลัง = ",x);

    

