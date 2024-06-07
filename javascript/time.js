console.log('let start'); 


// let rectangle2 = {
//     length:1,
//     breadth:2,

//    ansh: function(){
//     console.log('drawing rectangle');
//    }
// };
// let rectangle3 = {
//     length:1,
//     breadth:2,

//    ansh: function(){
//     console.log('drawing rectangle');
//    }
// };
// function createRectangle(len , bre){
//     return rectangle = {
//         length:len,
//         breadth:bre,
    
//        ansh: function(){
//         console.log('drawing rectangle');
//        }
//     };
//     return rectangle;
// }
// // rectangle.ansh();
// let rectangleObj1= createRectangle(5, 4); 
// let rectangle2= createRectangle(5, 4); 
// let rectangle3= createRectangle(5, 4); 

// constructor-> pascal notation -> first letter of every word is capital -Number=12211
function  Rectangle(){
     this.length=1;
     this.breath=2;
     this.draw=function(){
        console.log('drawlog')
     }
}
// obejext creaton of a  new object
let rectangleObeject = new Rectangle();  
rectangleObeject.color='yellow';
console.log(rectangleObeject);
delete rectangleObeject.color;
console.log(rectangleObeject);
// let rectangle1 = new function{
//    'length', 'breath', 
//    'this.length = length;
//    this.breath = breath;
//    'this .dwa'
// '});
// }
// let a ={value:10}
// function inc(a) {
//    a.value++;
// }


// inc(a);
// // console.log(a.value);
let rectangle ={

   length:2, breath:4
};
// // for-inloop
// // keys are refected through key variable
// // values are reflevted through rectangrlekey
// for(let key in rectangle){
//    console.log(key)
// }

// // for of loop
// for(let key of rectangle){
//    console.log(key)
// }
// if('color' in rectangle){
//    console.log('present')
// }
// else{
//    console.log('absent')
// }
// let src={
//    a:10, b:20, c:30
// };
// let dest={};

// for(let key in src){
//    dest[key] = src[key];
// }
// console.log(dest);
// src.a++;
// console.log(dest);

// let src ={
//    a:10, b:20, c:30
// }
// let dest = Object.assign([], src, src2);

// console.log(dest);

// src.a++;

// console.log(dest);

// let src={
//    a:10, 
//    b:20 ,c:30
// };
// let dest={...src};

// console.log(dest);
// src.a++;

// console.log(dest)

