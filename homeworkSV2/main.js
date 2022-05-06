// EX 1:-----------------------------------------------------------------------------
// let checkParity = number => { //am omis parantezele deoarece avem un singur argument
//     if (number % 2 == 0){
//         number -= 2;
//     }else {
//         number *= 2;
//     }
//     return number;
// }
//
// console.log(checkParity(7));
// ----------------------------------------------------------------------------------

// EX 2:-----------------------------------------------------------------------------
//
// let arr = [1,2,3,4,5,6,7,8,9];
// let arrPrime = [];
//
// function savePrimes(number){
//     for (let i = 2; i < number; i++){
//             if ((number % i) == 0) {
//                 return false;
//             }
//     }
//     return true;
// }
//
// for (let i = 0; i < arr.length; i++){
//     if (savePrimes(arr[i])){
//         arrPrime.push(arr[i]);
//     }
// }

// console.log(arrPrime);
//
// ----------------------------------------------------------------------------------

// EX 3:-----------------------------------------------------------------------------
// const arr = [1, '1', 'salut', 2, 6, true, 'true'];
// let stringArr = [];
//
// arr.forEach(saveStrings);
//
// function saveStrings(item){
//     if (( typeof (item) ) == 'string'){
//         stringArr.push(item);
//     }
// }
//
// console.log(stringArr);
// ----------------------------------------------------------------------------------


// EX 4:-----------------------------------------------------------------------------
// let addDigits = str => {
//     let sum = 0;
//     for (let i = 0; i < str.length; i++){
//         if (Number(str[i]) % 2 == 0){
//             continue;
//         }
//         sum += Number(str[i]);
//     }
//     console.log(sum);
// }
//
// addDigits('1523');
// ----------------------------------------------------------------------------------


// EX 5:-----------------------------------------------------------------------------
const day = 'abracadabra';
switch (day) {
    case 'monday':
    case 'tuesday':
        workingProgram = 'On Monday and Tuesday my program at work is 11am - 6pm ';
        console.log(workingProgram);
        break;
    case 'wednesday':
        workingProgram += '9am - 6pm';
        console.log(workingProgram);
        break;
    case 'thursday':
        workingProgram += '9am - 6pm';
        console.log(workingProgram);
        break;
    case 'friday':
        workingProgram += '9am - 6pm';
        console.log(workingProgram);
        break;
    case 'saturday':
    case 'sunday':
        workingProgram = "On Saturday and Sunday I don't work";
        console.log(workingProgram);
        break;
    default:
        console.log(`${day} is not a day`);
}
// ----------------------------------------------------------------------------------
