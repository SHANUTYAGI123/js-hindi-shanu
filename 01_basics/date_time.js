// Dates

let mydate=new Date()
console.log(mydate.toString());
console.log(mydate.toDateString());
console.log(mydate.toLocaleString());
console.log(typeof mydate);

let mycreatedDate= new Date(2024,11,16)
console.log(mycreatedDate.toDateString());
console.log(mycreatedDate.toLocaleDateString());
console.log(mycreatedDate.toString());
console.log(mycreatedDate.toLocaleString());

// for your own date

let myDate=new Date("01-14-2024")
console.log(myDate.toLocaleString()); 

// timeStamp

let mytimeStamp=Date.now();
// console.log(mytimeStamp.toLocaleString());
// console.log(mycreatedDate.getTime())
// console.log(Math.floor(Date.now()/1000)); // it gives time in seconds from the origin date 

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDay());

console.log(newDate.toLocaleString('default',{
    weekday:"long",
}))