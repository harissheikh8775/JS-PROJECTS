// new Promise(function (resolve, reject) {
//     setTimeout(() => {
//          resolve();
//         console.log("Async task done");
       
//     }, 1000);
// }).then(function () {
//     console.log("Async task resolved");
// })

// //promise two
// const promiseTwo = new Promise(function (resolve, reject) {
//     setTimeout(() => {
//         resolve({ username: "haris", email: "haris@google.com" });
//     }, 1000);
// });
// promiseTwo.then(function (user) {
//     console.log(user);
// })

// //prommise three

// const promiseThree = new Promise(function (resolve, reject) {
//     setTimeout(() => {
//         let error = false;
//         if (!error) {
//             resolve({ username: "arjun", password: "123" });
//         } else {
//             reject("ERROR : Something went wrong.");
//         }
//     }, 1000);
// })

// promiseThree.then((user) => {
//     return user.username
// }).then((username) => {
//     console.log(username);
// }).catch((error) => {
//     console.log(error);
// }).finally(() => {
//     console.log("Finally promise is either rejected or resolved.")
// })

//promise four

const promiseFour = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = false;
        if (!error) {
            resolve({ username: "javascript", password: "123" });
        } else {
            reject("ERROR : JS went wrong.");
        }
    }, 1000);
});

async function consumePromiseFour() {
    try {
        const response = await promiseFour
        console.log(response)
    } catch (error) {
        console.log(error)
    }
}
consumePromiseFour()

////fetch promise

fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => {
        return response.json();
    }).then((jsonData) => {
        console.log(jsonData)
    }).catch((error) => {
        console.log("E :", error);
    })