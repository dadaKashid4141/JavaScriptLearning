let arr = [1,2,3,2,3,4,5,6,7,5,6,8];
// uniq=[];

// for (let i = 0; i < arr.length; i++) {
//     ck=arr[i];
//    if(uniq.includes(ck)){
//     continue
//    }else{
//     uniq.push(ck);
//    }
    
// }
// console.log("new array:",uniq);

// newArray=[...new Set(arr)];
    
console.log('by using set',[...new Set(arr)]);   //Removing duplicate by using set method

emt=[];
for (const i of arr) {
    if (emt.includes(i)) {
        continue
    }else{
        emt.push(i)
    }
}
console.log("using includes:",emt);


a=[];
for(i=0;i<arr.length;i++){
    if(a.indexOf(arr[i])==-1){
        a.push(arr[i])
    
    }
}
console.log('using indexOf prop:',a);
