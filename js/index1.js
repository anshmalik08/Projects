// adding 100 para 
const t1= performance.now();
for(let i=1;i=100;i++){
    let newElement=document.createElement('p');
    newElement.textcontent='this is a para'+i;
    document.body.appendChild(newElement);
}
const t2 = performance.now();
console.log("this look"+(t2-t1)+"ms");
// // let my div optimizing a bit  
let myDiv = document.createElement('div');

for(let i=1;i=100;i++){
    let Element=document.createElement('p');
    Element.textcontent='this is a para'+i;

    myDiv.appendChild(Element);
}
document.body.appendChild(myDiv);
const t4= performance.now();
console.log("this took"+(t4-t3)+"ms");