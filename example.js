// วัตถุ (Object) ที่เราจะเปรียบเทียบ
const obj1 = {
    name: "PpLarry",
    age: 21,
    tel: "0612192740"
};

const obj2 = {
    name: "PpLarry",
    age: 21,
    tel: "0612192740"
};

// ฟังก์ชันสำหรับเปรียบเทียบวัตถุทั้งสอง
function matches(obj, source) {
    return Object.keys(source).every(function(key)  {
        return obj.hasOwnProperty(key) && obj[key] === source[key];
    });
}
// ? Object.keys(source) จะสร้างอาร์เรย์ที่ประกอบไปด้วยคีย์ทั้งหมดของวัตถุ source เช่น ['name', 'age', 'tel']
// ? .every(function(key) { ... }) จะตรวจสอบว่าแต่ละคีย์ในอาร์เรย์นั้นตรงกับเงื่อนไขที่กำหนดหรือไม่
// ? obj.hasOwnProperty(key) ตรวจสอบว่าคีย์นั้นๆ มีอยู่ในวัตถุ obj หรือไม่

// เรียกใช้ฟังก์ชันเพื่อเปรียบเทียบวัตถุ
const result = matches(obj1, obj2);

console.log(result); // ถ้าวัตถุทั้งสองเท่ากันจะได้ค่า true ถ้าไม่เท่ากันจะได้ false
