///Ans:20

// function printFriends(obj) {
//     for (const key in obj) {
//         if (key === 'friends') {
//             for (const element of obj[key]) {
//                 console.log(element);
//             }
//         }
//     }
// }
// var mostafa = {
//     fName: 'Mostafa',
//     lName: 'Hosseini',
//     age: 32,
//     phoneNumber: '09358758908',
//     address: {
//         proviance: 'Alborz',
//         city: 'Karaj',
//         allay: 'Golshahr'
//     },
//     famillyMembers: {
//         father: 'Khodabakhsh',
//         mother: 'Efat',
//         brothers:
//             [
//                 'Mohammad',
//                 'Davood',
//                 'Ali',
//                 'Mehdi',
//                 'Morteza',
//                 'Amir'
//             ],
//         sisters: ['Layla', 'Lida']
//     },
//     friends: ['Omid', 'ali']
// }
// printFriends(mostafa);

////Ans:21

// function getFullName(obj,firstNameKey,lastNameKey) {
//     return obj[firstNameKey]+' '+obj[lastNameKey];
// }
// var mostafa = {
//     fName: 'Mostafa',
//     lName: 'Hosseini',
//     age: 32,
//     phoneNumber: '09358758908',
//     address: {
//         proviance: 'Alborz',
//         city: 'Karaj',
//         allay: 'Golshahr'
//     },
//     famillyMembers: {
//         father: 'Khodabakhsh',
//         mother: 'Efat',
//         brothers:
//             [
//                 'Mohammad',
//                 'Davood',
//                 'Ali',
//                 'Mehdi',
//                 'Morteza',
//                 'Amir'
//             ],
//         sisters: ['Layla', 'Lida']
//     },
//     friends: ['Omid', 'ali']
// }
// console.log(getFullName(mostafa,'fName','lName'));

////Ans:22
// function sum() {
//     var res = 0;
//     for (let i = 0; i < arguments.length; i++) {
//         res += arguments[i];
//     }
//     return res;
// }
// function subtraction() {
//     var res = arguments[0];
//     for (let i = 1; i < arguments.length; i++) {
//         res -= arguments[i];
//     }
//     return res;
// }
// function multiply() {
//     var res = 1;
//     for (let i = 0; i < arguments.length; i++) {
//         res *= arguments[i];
//     }
//     return res;
// }
// function division() {
//     var res = arguments[0];
//     for (let i = 1; i < arguments.length; i++) {
//         res /= arguments[i];
//     }
//     return res;
// }
// console.log(sum(10,2));
// console.log(subtraction(10,2));
// console.log(multiply(10,2));
// console.log(division(10,2));

////Ans:23
// function operation(operand) {
//     switch (operand) {
//         case "sum":
//             return sum(arguments[2]);
//         case "sub":
//             return subtraction();
//         case "mul":
//             return multiply();
//         case "div":
//             return division();
//         default:
//             return "Unknown operand"
//             break;
//     }
// }
// console.log(operation("sum",1,2,3));

////Ans:24
// var number = 50;
// switch (number % 2) {
//     case 0:
//         console.log("Even");
//         break;
//     case 1:
//         console.log("Odd");
//         break;
//     default:
//         console.log("!!!");
//         break;
// }

// if(number%2==0)
//     console.log("Even");
// else
// console.log("Odd");

// console.log((number%2==0)?"Even":"Odd");

////Ans:25
// function powerWithLoop(a, b) {
//     var res = 1;
//     for (var i = 0; i < b; i++) {
//         res *= a;
//     }
//     return res;
// }

// function powerWithRecursive(a, b) {
//     if (b == 0)
//         return 1;
//     return a * powerWithRecursive(a, b - 1);
// }
// console.log(powerWithLoop(2, 5));
// console.log(powerWithRecursive(2, 5));

////Ans:26
// var obj={obj:{}};
// obj.obj=obj;