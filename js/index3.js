// console.log('ansh here');
// function sync() {
//     console.log('first');
// }
// sync();

// console.log('second');
// setTimeout(function () {
//     console.log('third');
// }, 3000)
// function sync() {
//     console.log('first');
// }
// sync();
// console.log('second');

// let meraPromise = new Promise(function (resolve, reject) {
//     // console.log('I am inside promise');
//     // resolve(1998);
//     setTimeout(function () {
//         console.log('I am inside promoise')
//     }, 5000);
//     // resolve(2233);
//     reject(new Error('error aye hai bhai sahab'))
// });
// meraPromise.then((value) => { console.log(value) });
// console.log('Phela');
let wadaa1 = new Promise(function (resolve, reject) {
    setTimeout(() => {
        console.log('set timeout1 started');
    }, 2000);

    wadaa1.then(() => {
        let wadda2 = new Promise(function (resolve, reject) {
            resolve("wadda 2 resolved");
        })
        return wadaa2;
    }).then((value) => console.log(val));
})