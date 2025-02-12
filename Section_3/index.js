
////Ans:8
// for (var i = 1; i <= 10; i++) {
//     if (i % 2 == 0)
//         console.log(i);
// }

//*********************************************************************/

////Ans:12
// var sum=0;
// for (var i = 1; i <= 20; i++) {
//    if(i%2!=0)
//    sum+=i; 
// }
// console.log(sum);

//*********************************************************************/

////Ans:13
// var numbers=[1,2,3,4,5];
// var sum=0;
// for (var item of numbers) {
//     sum+=item;
// }
// console.log(sum);

//*********************************************************************/

////Ans:14
// function printDayOfWeek(day) {
//     var strDay = ''
//     switch (day) {
//         case 1:
//             strDay = 'شنبه';
//             break;
//         case 2:
//             strDay = 'یکشنبه';
//             break;
//         case 3:
//             strDay = 'دوشنبه';
//             break;
//         case 4:
//             strDay = 'سه شنبه';
//             break;
//         case 5:
//             strDay = 'چهارشنبه';
//             break;
//         case 6:
//             strDay = 'پنج شنبه';
//             break;
//         case 7:
//             strDay = 'جمعه';
//             break;
//         default:
//             strDay = 'Invalid'
//             break;
//     }
//     return strDay;
// }
// console.log(printDayOfWeek(1));

//*********************************************************************/

////Ans:15
// var object=
// {
//     a:0,
//     i:0,
//     o:0,
//     u:0,
//     e:0
// };
// var str='mostafa hosseini';
// str=str.toLowerCase();

// for (var char of str) {
//     if(object[char]!=null)
//     object[char]+=1;
// }
// console.table(object);

//*********************************************************************/

////Ans:16
// for (var i = 0; i < 3; i++) {
//     for (var j = 0; j < 5; j++) {
//         if(i===0 && j===2)
//             console.log("*");
//         if (i == 1 && (j==1 || j==2 || j==3))
//             console.log("*");
//         if (i == 2)
//             console.log("*");
//     }
//     console.log("\n");
// }


//*********************************************************************/

////Ans:17
// var number=1234n;
// var digit=0n;
// var reversedNumber=0n;
// while (number!=0) {
//     digit=number%10n;
//     reversedNumber=(reversedNumber*10n)+digit;
//     number/=10n;
// }
// console.log(reversedNumber);

//*********************************************************************/

////Ans:18 First way use function
// function isPrime(number) {
//     var cnt = 0;
//     if (number <= 1)
//         return false;
//     else {
//         for (var i = 1; i <= number; i++) {
//             if (number % i == 0)
//                 cnt++;
//         }
//         if (cnt > 2)
//             return false;
//         else
//             return true;
//     }
// }
// for (let i = 0; i < 100; i++) {
//     if(isPrime(i))
//     console.log(i);
// }

////Ans:18 Second way without function
// var cnt = 0;
// for (let i = 1; i <= 100; i++) {
//     cnt = 0;
//     for (var j = 1; j <= i; j++) {
//         if (i % j == 0) {
//             cnt++;
//         }
//     }
//     if (cnt == 2)
//         console.log(i);
// }


//*********************************************************************/

////Ans:19 First way use function
// function calculateFactoryel(number) {
//     if(number==0 ||number==1)
//         return 1;
//     else
//     return number*calculateFactoryel(number-1);
// }
// console.log(calculateFactoryel(5));

////Ans:19 Second way without function
// var n=3;
// var res=1;
// for (let i = 1; i <= n; i++) {
//     res*=i;
// }
// console.log(res);