const arr = ['ram','shyam','hari']

//Q1
//remove shyam
// expected output 
// ['ram', 'hari']
//syntax
//const output = arr.filter(()=>{

// })
//console.log(output)

const output = arr.filter( (item) => {
    if (item !=="shyam") {
        return item;
    }
} )

console.log(output);



//Q2 count total strings which have length 4
//expected output : 1
let total = 0
arr.forEach((item,id)=>{
   if (item.length === 4) {
    total = total + 1;
   }

})

console.log(total);





