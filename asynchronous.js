//WHY AND WHEN WE NEED ASYNC CODE ??
//SO CALLED PROMISES - SYNTACTIC SUGAR FOR CALLBACKS
//THEY CAN BE IN 2 STATES: PENDING / FULFILLED
//WHEN FULFILLED, CAN BE IN 2 SUCCESS CONDITIONS: RESOLVED / REJECTED
//AFTER IT RESOLVES... THEN .....
//ADDING A TIMEOUT FOR CODE TO BE EXECUTED AFTER 4 SECONDS
//DEFINING A CATCH BLOCK FOR THE REJECT

/* new Promise((resolve, reject) => {
    setTimeout(() => {
        //resolve("Everything went well.");
        reject("Something went wrong...");
    }, 4000);
}).then(message => {
    console.log(message);
}).catch(error => {
    console.log(error);
}); 

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}
 
new Promise((resolve, reject) => {
    const randomNumber = getRandomInt(11);
    if (randomNumber % 2 == 0) {
        resolve("Even number - GOOD !!!");
    } else {
        reject("Odd number - Something went wrong...");
    }
}).then(message => {
    console.log(message);
}).catch(error => {
    console.log(error);
}); */


//WRAPPING A FUNCTION WITH A PROMISE
function myPromiseFunction() {
    return new Promise((resolve, reject) => {
        try {
            setTimeout(() => {
                resolve("Everything went well.");
            }, 2000);
        } catch {
            reject("Something went wrong...");
        }
    });
}

/* myPromiseFunction()
.then(message => console.log(message))
.catch(error => console.log(error)); */

//ASYNC AWAIT WITH AN "IFFY" - IMMEDIATELY INVOKED FUNCTION EXPRESSION  
(async function asyncCall() {
    const message = await myPromiseFunction();
    console.log(message);
})();