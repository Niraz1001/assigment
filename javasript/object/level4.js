// const obj = {
//     math:50,
//     science:60,
//     gk: 40
// }

// sum = 0;

// for (const item in obj) {

// sum = sum + obj[item];
    
// };
// console.log(sum);

let pass='';
let str ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";



for (let i = 0; i < str.length; i++) {
   let char = Math.floor(Math.random() * str.length +1);
   
    pass += str.charAt(char);
    
}
  


