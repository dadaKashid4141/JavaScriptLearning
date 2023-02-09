function show(num1,test) {
    console.log("hi");
}
show(10,"test")

const arrayNumber=[10,20,30,40,20,10,30]
arrayNumber.forEach((currentValue,index)=>{
    console.log(currentValue,index);
}
)



console.log("===== Traversing map using forEach() =====");
let map = new Map();
map.set(22, "Sachin");
map.set(11, "Dravid");
map.set(33, "Gaungully");
map.set(77, "Dravid");
map.forEach( (key, value) => {
    console.log(key, value);
} );
