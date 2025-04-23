//const tinderUser = new Object(); //singleton
const tinderUser = {}; //non-singleton

tinderUser.id = "123abc";
tinderUser.name = "Harshit";
tinderUser.isLoggedIn = false;

//console.log(tinderUser);

const regularUser = {
    email: "harshitndj15@gmail.com",
    fullname: {
        userFullName: {
            firstname: "Harshit",
            lastname: "Sharma",
        },
    }
}

//console.log(regularUser.fullname.userFullName.firstname);

const obj1 = {1:"a",2:"b"};
const obj2 = {3:"a",4:"b"};
const obj4 = {5:"a",6:"b"};


//const obj3 = {obj1, obj2};
//const obj3 = Object.assign({},obj1, obj2,obj4);

const obj3 = {...obj1, ...obj2};
//console.log(obj3);

const users = [
    {
        id: "1",
        email: "1502harshitsharma@gmail.com"
    },
    {
        id: "1",
        email: "1502harshitsharma@gmail.com"
    },
    {
        id: "1",
        email: "1502harshitsharma@gmail.com"
    },
]

users[0].email;
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLogged'));


const course = {
    coursename: "js in hindi",
    price: 999,
    courseInstructor: "Hitesh"
}
//course.courseInstructor;

const {courseInstructor: Instructor} = course;
console.log(Instructor);

// {
//     name: "Harshit",
//     coursename: "Js in Hindi",
//     price: "free"
// }

