const arrayOfNumber=[2,3,5,4,6,1];
let newArray=arrayOfNumber.filter((element)=>{
    return element>=4;
});
console.log(newArray);


console.log("====== reduce()=====");
let sum =  arrayOfNumber.reduce( (value, runningTotal) => {
    return  value + runningTotal;
} );
console.log(sum);
