function sayMyName() {
    console.log("H");
    console.log("H");
    console.log("H");
    console.log("H");
    console.log("H");
}
//sayMyName();

// function addTwoNumbers(num1, num2) {
//     console.log(num1 + num2);
// }

function addTwoNumbers(num1, num2) {
    let result = num1+num2;
    return result;
}

const result = addTwoNumbers(5,2);

// console.log(result);

function loginUserMessage(username = "sam") {
    if (!username){
        console.log("Please enter a username");
        return;
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Harshit"));

function calculateCartPrice(val1, val2, ...num1) {
    return num1;
}

//console.log(calculateCartPrice(200, 400, 500));

const user = {
    username: "harshitndj",
    price: 199,
}

function handleObject(anyObject) {
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}

//handleObject(user);
// function handleObject({
//     username:"sam",
//     price: 300,
// })

const myNewArray = [200, 400, 100, 600];

function returnSecondValue(getArray){
    return getArray[1];
}
// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));
