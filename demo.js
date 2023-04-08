// practice on Array Sorting and reversing 
var array_roll= [113, 45, 56, 11, 32, 45, 109, 799, 56, 45 ]   //Given array

//1] reverse array withot using reverse() method
revArray=[];
for(var i=array_roll.length-1;i>=0;i--){  //traverse array in reverse order
    rev=array_roll[i];
    revArray.push(rev);
}
console.log(`Reversed Array:[${revArray}]`);

//Now reversing using reverse() method

console.log('Reversed by using reverse method:',array_roll.reverse());


console.log('--------------------------------------');

//make given  array in ascending order using sort()
array_roll.sort();
    console.log('array ascending',array_roll);
     // we not get expected array 
    //array.sort() is appicable only on 1st digit of number


    //another way is 
    array_roll.sort((a,b)=>{
        return a<b?-1:1;
    })
    console.log('sorted array ascending',array_roll);


//find greatest no from array
array_roll.sort((a,b)=>{
return a>b?-1:1})
console.log('sorted array in descending',array_roll);
console.log('Greatest no is:',array_roll[0]);


// by using math.max we can find greatest no from array

console.log('Greatest no by math.max is:',Math.max(...array_roll));


console.log('-------------------------------------');

//remove duplicate no from array
var array_roll= [113, 45, 56, 11, 32, 45, 109, 799, 56, 45 ]   //Given array

console.log('Given array',array_roll);
res=[];
for (const ele of array_roll) {
    if (res.includes(ele)) {
        continue;
    }else{res.push(ele)}
}
console.log('remove duplicate using includes method',res);
//another way is
result=[]
for(let i=0;i<array_roll.length;i++){
    e=array_roll[i];

    if (result.indexOf(e)==-1) {
        result.push(e)
    }
}
console.log('remove duplicate using indexOf method',result);

//another way using set
setArray=[... new Set(array_roll)];
console.log('Remove duplicate using set:',setArray);





console.log('---------Practice on Filter, map,reduce methods on array ------------');
arrayNo=[1,4,7,8,9,6,3,2,5]
console.log('Given array:',arrayNo);
//map: map method return new array of element after performing a operation on array
mapedArray= arrayNo.map((ele)=>{
    return ele+1;
}) 
console.log('maped array',mapedArray);


//filter: filter() is used to filter array elemenet basis on condition
filterArry= arrayNo.filter((element)=>{
    return element>5
})
console.log('filtered array:',filterArry);



//reduce: reduce() is used convert array in to a single value
rt=0;
reduce=arrayNo.reduce((rt,ele)=>{
    return rt+ele});
console.log('reduced array ',reduce);


//reversing string
string='abjdsbj'
str=string.split('');
console.log(str);
console.log(str.reverse());





//convert string into array

string='abjdsbj'
console.log(Array.from(string));


