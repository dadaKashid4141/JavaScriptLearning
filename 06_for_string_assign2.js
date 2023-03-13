
function reverseString(str) {
    console.log(` Before reversing string:  ${str} `);
    var a=str.length-1;
    var result='';
    for (let index = a; index >= 0; index--) {
        //  console.log(str.charAt(index));
        result=result+str.charAt(index);
    }
    console.log(` After reversing string:  ${result} `);
}
reverseString("Hard Work always pays back");
console.log(`---------------------------------`);
reverseString("Soon I will be Angular IT Champ");


