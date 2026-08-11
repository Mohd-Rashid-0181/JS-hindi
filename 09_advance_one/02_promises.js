const promiseOne = new Promise(function (resolve, reject) {
    // asyns task 
    // DB calls, cryptography, network
    setTimeout(function () {
        // console.log("Async Task is Completed");
        resolve()
    }, 1000)
})

promiseOne.then(function () {
    // console.log("Promise consumed");

})

new Promise(function (resolve, reject) {
    setTimeout(function () {
        // console.log("Aync Task 2");
        resolve()
    }, 1000)
}).then(function () {
    // console.log("Task 2 Resolved");

})


const promiseThree = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve({ name: "Chai", email: "chai@example.com" })
    }, 1000)
})

promiseThree.then(function (user) {
    // console.log(user);

})


const promiseFour = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = false
        if (!error) {
            resolve({ username: "Rashid", password: "123" })
        } else {
            reject("ERROR : Something Went Wrong")
        }
    }, 1000)
})
// promiseFour.then(function (user) {
//     // console.log(user);
//     return user.username
// }).then(function (username) {
//     // console.log(username);
// }).catch(function (error) {
//     // console.log(error)
// }).finally(()=>console.log("The Promise is Finally either resolved or rejected"))


const promiseFive = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = false
        if (!error) {
            resolve({ username: "Javascript", password: "123" })
        } else {
            reject("ERROR : JS Went Wrong")
        }
    }, 1000)
})


async function consumePromiseFive() {
    try {
        const response = await promiseFive
        // console.log(response);
    } catch (error) {
        // console.log(error);

    }

}
consumePromiseFive()


// async function getAllUsers() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("Error :",error);
        
//     }

// }
// getAllUsers()

fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json()
}).then((data) => {
    console.log(data);
}).catch((error) => {
    console.log(error);
    
})