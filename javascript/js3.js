// let lastNmae='babar';
// // obeject
// let firstName = new String('love');
// let message = 'this is  \' my first message';
// let words = message.split(' ');
// let message1=`this is
//  my first
//   message

// `

// console.log(words);

// let date = new Date('june 20 1998 07:15');
// console.log(date)

// let date3 = new Date(1998, 6, 20 , 7)
// console.log(date3);
// date3.setFullYear(1947);
// console.log(date3)
// date3.setHours(11)
// console.log(date3)

// let numbers=[1,4, 5, 7  ];
// console.log(numbers);

// if(numbers.indexOf(4) != -1){
//     console.log("present");
// }
// console.log(numbers.includes(7));
// console.log(numbers.indexOf(4, 2))

// let courses =[
//    {no:1 , naam:'loive'},
//    {no:2 , naam:'rahyk'} 
// ]
// // console.log(courses);
// // console.log(courses.indexOf({no:1 , naam:'ansh'}))
// // console.log(courses.includes({no:1 , naam:'ansh'}))

// let course1 = courses.find(function(course1){
//   return course1.naam = 'love';
// })
// console.log(course1);

// let numbers=[12, 3, 4, 5, 6, 7 ];
// numbers.shift(); 
// numbers.slice();
// numbers.pop();
// console.log(numbers)

// let number=[1,2, 3, 4, 5];
// // let number2=number;
// // // number=[];
// // // number.length=0;//ise dono kali ho jate hai code me use dusre value me store rehti hai
// // number.slice(0, number.length);
// // console.log(number);
// // console.log(number2);
// let first =[1,2,3];
// let second =[3, 4, 5];

// // let combined = first.concat(second);
// // console.log(combined);
// //  let ansh=combined.slice(2, 5);
// //  console.log(ansh)
// let combined =[...first, 'a', ...second,'b'];
// console.log(combined)

// // copy kaise create kare
// let another=[...combined];

// let arr =[10 ,20, 30, 40, 50];
// for(let value of arr){
//   console.log(value);
// }
// arr.forEach(function(number)
// {
//   console.log(number)
// }); '
// let numbers1 = [10, 20, 30, 40, 50];
// const joined = numbers1.join(',');
// console.log(joined);
// let message = 'this is my chut'
// let parts = message.split('');

// console.log(parts);
// let joined =parts.join('_')
// // console.log(joined)
// let number=[30, 20, 40, 50];
// number.sort();
// console.log(number)
// number.reverse()
// // console.log(number)
// let number = [1, -1, , -3];
// let ansh= number.filter(function(value){
//   return value >=0;
// })
// console.log(ansh)

// let number = [6, 4, 3, 4,6 ]
// number.map(function(value){
//   return 'student_no'+ value;
// }) 
// console.log(number)
// function sum(valie,mun,...args ){
//   console.log(args);
// }
let person ={
  fName :'ansh',
  Lname :'malik',
  get  fullName(){
    return `${person.fName} ${person.Lname}`;
  },
  set fullName(value){
    if(typeof value !== string){
      throw new Error("you have not sent a string");
    }
   let parts =value.split(' ');
   this.fName =parts[0];
   this.Lname = parts[1];
 }
}
console.log(person.fullName)

try{
  person.fullName=true;
}
catch(e){
  // alert('you have sent a number in fullName')
  alert(e)
}

let arr =[1, 2, 3, 4, 5];
let total =0;
for(let value of arr){
  total += value;
}
console.log(total)
arr.reduce()