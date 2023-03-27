// allSettled() doesn't need all Promises to be revolved, can spit back out Promises even if one is rejected as shown from Examples below

const promiseOne = new Promise((resolve, reject) =>
    setTimeout(resolve, 3000))
const promiseTwo = new Promise((resolve, reject) =>
    setTimeout(reject, 3000))

Promise.all([promiseOne, promiseTwo]).then(data => console.log(data))
    .catch(error => console.log('something failed', error));


Promise.allSettled([promiseOne, promiseTwo]).then(data => console.log(data))
    .catch(error => console.log('something failed', error));