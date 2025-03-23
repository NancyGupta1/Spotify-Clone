// fullname="Nancy"
// console.log(fullname);

// let age = 22;
// console.log(age);

// let gameNum = 3;

// let num = prompt("Enter a number between 1-10")
// for(let i=0; i<10; i++){
//     if(num==3){
//         console.log("you have entered the correct number!!", num);
//     }
//     else{
//         console.log("Wrong guess");
//     }
// }

// let name = prompt("Enter your name ");
// console.log("@"+name + name.length);

// let arr= [85, 97, 44, 37, 76,60];
// let sum =0;
// for(i=0; i<arr.length; i++){
//     sum+=arr[i];
// }
// let avg = sum/arr.length;
// console.log(avg);

// let arr = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];
// console.log(arr);
// arr.splice(2,1,"Ola");
// console.log(arr);
// arr.push("Amazon");

// let arr =[1,2,3,4,5,6,7];
// arr.forEach((val)=> {
//     console.log(val);
// });

// let nums = [1,2,3,4,5,6];

// nums.forEach((num) => {
//     console.log(num*num);
// });

// let arr =[ 1,2,3,4];

// const output = arr.reduce((res, curr) => {
//    return res + curr;
// });
// console.log(output);

// let num = prompt("Enter a number: ");
// let arr = [];
// for(let i = 1; i<=num; i++){
//    arr[i-1] = i ;
// }
// console.log(arr);
// let sum = arr.reduce((curr, prev)=>{
//    return prev + curr;
// });
// console.log("Sum = ",sum);
// let mul = arr.reduce((curr, prev)=>{
//    return prev * curr;
// });

// console.log("factorial = "+mul);

let modeBtn = document.querySelector("#mode");
let currMode ="Light";
modeBtn.addEventListener("click", () => {
    if(currMode=="Light"){
        currMode = "dark";
        document.querySelector("body").style.backgroundColor = "black";
    }
    else{
        currMode = "Light";
        document.querySelector("body").style.backgroundColor = "white";
    }
    console.log(currMode);
});
