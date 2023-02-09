for (let index = 0; index < 10; index++) {
    if(index==5){
        break;
    }
    console.log(index); 
}
console.log('Egnore 2');
for (let index = 0; index < 10; index++) {
    if(index==2){
        continue;
        // break;
    }
    console.log(index); 
}
