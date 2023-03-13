
const arrayOfNumber=[2,3,5,4,6,1];
var newArray=arrayOfNumber.map((element,index)=>{
    if (index<=5) {
        return element+5;
        
    }

})
console.log(newArray) 

newFiltr=arrayOfNumber.filter((element,index)=>{
   return element>3
})
console.log("after filter:",newFiltr);