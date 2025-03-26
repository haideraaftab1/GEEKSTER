console.log(5 =='5');

console.log(5 ==='5');

console.log(typeof(35 + "Haider"));

let a1 =false;
let a2 = "";

console.log(a1 == a2);
console.log(a1 === a2);

let num = 420;

console.log(typeof(String(num)));

//conditional

let user = 1200;

if(user >= 1200) {
    let d = user * 0.10;
    fa = user - d;
    console.log(fa);
}else if (user >= 500) {
    let d = user * 0.05;
    fa = user - d;
    console.log(fa);
}else {
    console.log(user);
}


let shipping = "express"; // Example shipping method

switch (shipping) {
    case "oneDay":
        console.log("Same day delivery");
        break;

    case "express":
        console.log("Delivered within 2-3 days");
        break;

    case "standard":
        console.log("Delivered within 5-7 days");
        break;

    default:
        console.log("Invalid shipping method");
}


loops

let number = 20;

for(let i = 0; i <= 10; i++) {
    console.log(`${num} x ${i} = ${num * i}`);
    
}

let numb = 20;
let i = 1;

while(i <= 10) {
    console.log(`${num} x ${i} = ${num * i}`);
    i++;
}

let i = 11;
do {
    console.log(i*20);
    i++;
}while(i <= 10);

//function
//function declaration
function sum(){
    console.log(2+3);
}
sum();

function sum(a, b) {
    return a + b;
}
let ans = sum(4, 5);
console.log(ans);




