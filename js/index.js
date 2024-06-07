// document.addEventListener('click', function(){
//     console.log('I have clicked on the document')
// // });
// function eventfunction(){
//     console.log('i have clicked on the docunment');

// }
// document.addEventListener('click', eventfunction);
// document.removeEventListener('click', eventfunction);
// const content  =document.querySelector('#wrapper');
// content.addEventListener('click' ,function(event){
// console.log(event);
// })
// let links=document.querySelectorAll('a');
// let thirdlink = links[2];
// thirdlink.addEventListener('click', function(event){
//     event.preventdefault();
//     console.log('maza aaya , acca laga');
// });

let mydiv= document.createElement('div');
for(let i=1;i<=100;i++){
    let newElement=document.createImageBitmap('p');
    newElement.textcontent='this is a para'+i;
    newElement.addEventListener('click', function(event){
        console.log('I have clicked on para');
    });
    mydiv.appendChild(newElement);
}
document.body.appendChild(myDiv);