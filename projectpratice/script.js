const countValue = document.querySelector('#counter');

function increment() {
    //get the value from UI
    let value = parseInt(countValue.innerText);
    // Upate the value
    value = value + 1;
    // set the value onto UI 
    countValue.innerText = value;

};
function decrement() {
    //get the value from UI

    let value = parseInt(countValue.innerText);
    // upate the value
    value = value - 1;
    //  set the value ono UI
    countValue.innerText = value;
};