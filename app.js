let fullName=prompt("Enter the Name and Surname");
let splitFullName=fullName.split(" ");
console.log(splitFullName);

console.log("Salam,"+" "+splitFullName[0]+"!");                 //Task1


let number=prompt("Enter the number");
let splitNumber=number.split("");

let numbers=splitNumber.map(Number);
console.log(numbers);
let sum=numbers[0]+numbers[1]+numbers[2]+numbers[3];        //Task2
console.log("Sum = "+sum);




