let setOfNumbers = new Set();
console.log(typeof setOfNumbers);
console.log("====== Adding element into the set collection=======");
setOfNumbers.add(2);
setOfNumbers.add(4);
setOfNumbers.add(7);
setOfNumbers.add(9);
setOfNumbers.add(11);
console.log(setOfNumbers);





console.log("====== Adding duplicate element =======");
setOfNumbers.add(7);
console.log(setOfNumbers);

console.log("====== Checking number elements available into set =======");
console.log(setOfNumbers.size);

console.log("====== Deleting element 9 =======");
setOfNumbers.delete(9);
console.log(setOfNumbers.size);
console.log(setOfNumbers);


console.log("====== Deleting element 9 =======");
setOfNumbers.delete(9);
console.log(setOfNumbers.size);
console.log(setOfNumbers);

console.log("====== Check whether element 7 available into set or not =======");
let isAvailable = setOfNumbers.has(7);
console.log(isAvailable);
console.log(setOfNumbers.has(9));

//setOfNumbers.clear();  //to clear set

console.log("====== Traversing set =======");
for (const element of setOfNumbers) {
    console.log(element);
}

console.log("====== remove duplicate =======");

let arrayNumbers=[1,1,2,2,3,3,3,4,4,5,5,6,8];
console.log('given array:',arrayNumbers);
let arrayUniqueElements=[...new Set(arrayNumbers)];
console.log('remove duplicate using set:',arrayUniqueElements);
uni=[];
dupli=[];
for (let i of arrayNumbers) {
    if(uni.indexOf(i)==-1){
        uni.push(i)
        
    }
    // dupli.push(i)
}

console.log('remove duplicate using loop',uni);
// console.log('duplicate element:',dupli);





console.log("====== remove duplicate =======");
given=[1,2,3,4,5,6,5,4,3,2,1];
du=[];
for (let i=0;i<given.length;i++) {
    chk=given[i]
    if(du.includes(chk)){   //remove duplicate by using includes()
          continue;
    }else{
        du.push(chk);
    }
}
console.log('given:',given);
console.log('rem.dup:',du);



console.log('----------------------------------finding largest no--------------------------------');
arrayNum=[4,8,1,2,7,9];
max=arrayNum[0];
for(let i=0;i<arrayNum.length;i++){
    if(arrayNum[i]>max){
         max=arrayNum[i]
    }

}console.log('large no is :',max);
console.log('--------sort---------');
//by sort method
sorted= arrayNum.sort();
console.log(sorted);
console.log('larg:',arrayNum[arrayNum.length-1]);