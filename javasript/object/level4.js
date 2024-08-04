const obj = {
    math:50,
    science:60,
    gk: 40
}

sum = 0;

for (const item in obj) {

sum = sum + obj[item];
    
};
console.log(sum);