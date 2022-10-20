console.log("==============================Q1=============================");
var string = "I am very good IT Developer";
var lower=string.toLowerCase();
var vowels="aeiou";
var countVowel=0;
for (let index = 0; index <lower.length; index++) {
    var getchara=lower.charAt(index);
    var isInclude=vowels.includes(getchara);
    if (isInclude) {
        countVowel=countVowel+1;
    }
  
}
console.log(`Given string"${string}"`);
console.log(`Number of vowels using include()=${countVowel} `);

console.log("==============================Q2=============================");
function cube(){
    var counter=0;
for (let index = 1; index <=5; index++) {
     var counter= counter+index*index*index;
    
}
console.log(`sum of cube of 1 to 5=${counter}`);
}
cube();

console.log("==============================Q3=============================");
function oddPositionedCharm(string) {
    console.log(`string=${string}`);
    var result="";
   for (let index = 0; index <string.length; index++) {
     var chh=string.charAt(index);
    if (index%2!=0 && chh!=" "){
   //  console.log(chh);
        result=result+chh;
    }
    }
     console.log(`Odd positioned characters :${result}`);
}
oddPositionedCharm("Hard work always pays back")
console.log("-----------------------------------------------------");

oddPositionedCharm("Soon I will be Angular IT champ")

