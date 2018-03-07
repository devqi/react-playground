const promise = new Promise((resolve, reject) => {
    // resolve('This is my resolved data.');
    reject('error ...');
});

/**
 * 1. kind of promise syntax
 */
// promise.then((data) => {
//     console.log(data);
// }).catch((error) => {
//     console.log(error);
// });

/**
 * 2. kind of promise syntax
 */
promise.then((data) => {
    console.log(data);
}, (error) => {
    console.log(error);
})