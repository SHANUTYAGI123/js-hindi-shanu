// const tinderUser= new Object() // it is a singleton object 
const tinderUser = {}

tinderUser.id="123abc"
tinderUser.name="Shanu"
tinderUser.isLoggedIn=false

// console.log(tinderUser); 

const regularUser={
    email:"some@gmail.com",
    fullname:{
        userfullname:{
            firstname:"Shanu",
            lastname:"Tyagi"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 ={1:"a",2:"b"}
const obj2 ={3:"a",4:"b"}
const obj3 ={5:"a",6:"b"}

// const obj4={obj1 , obj2}
// const obj4= object.assign({},obj1,obj2,obj3)

const obj4={...obj1, ...obj2}
// console.log(obj4);

const users=[
    {
        id:1,
        email:"some@gmail.com"
    },
    {
        id:2,
        email:"s@gmail.com"
    },
    {
        id:2,
        email:"s@gmail.com"
    }
]
// console.log(users[1].email);
// console.log(tinderUser);
// console.log(Object.keys(tinderUser)); // it return array of keys
// console.log(Object.values(tinderUser)); // it return array of values
// console.log(Object.entries(tinderUser)); 
// console.log(tinderUser.hasOwnProperty('isLoggedIn')); // to check whether the object contains the given property or not


const course={
    coursename:"JS in Hidni",
    price:"999",
    courseInstructor:"Hitesh"
}
// course.courseInstructor

const {courseInstructor:Instructor}=course //"DESTRUCTURING"
// console.log(courseInstructor);
console.log(Instructor);

// {
//     "name":"hitesh",
//     "coursename":"js in hindi",
//     "price":"free"
// }

[
    {},
    {},
    {}
]