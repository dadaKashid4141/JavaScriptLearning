console.log("=========================Q1=====================");
// Count the total number vowels using includes() for string → “Good Morning IT Champ”
var countVowels = function(myString) {
  var lowercaseString=myString.toLowerCase();
  var vowels = "aeiou";
  var vowelsCount=0;
  for (let index = 0; index < lowercaseString.length; index++) {
     var char = lowercaseString.charAt(index);
     var isVowelsAvailable =  vowels.includes(char);
  
     if (isVowelsAvailable) {
          vowelsCount = vowelsCount + 1;
     }
  }
  console.log(`Total Vowels count : ${vowelsCount}`);
}
countVowels("Good Morning IT Champ");


console.log("=========================Q2=====================");
var love = "I Love JavaScript";
var countVowels = 0;
var lower = love.toLowerCase();
for (let index = 0; index < love.length; index++) {
    var ch = lower.charAt(index);
    if (ch == "a" || ch == "e" || ch == "i" || ch == "o" || ch == "u") {
        countVowels++;
    }
}
console.log(`vowels in string "${love}" :${countVowels}`);



console.log("=========================Q3=====================");
var add=function() {
   var count=0;
    for (let index = 1; index <=10; index++) {
      count = count+index;
    } 
    console.log(`sum of 1to10=${count}`);  
}
add();

console.log('================================mult ======================');
function mult(params) {
  multiplication=1;
  for(let index=1;index<=10;index++){
    multiplication=multiplication*index;
  }
  console.log('multiplication  of 10:',multiplication);
}
mult();


console.log('-----------------------square upto 10 ---------------------');
 function sq(){
  sq=1;
  for(let i=1;i<=10;i++){
    var sq=i*i;
  
    console.log(`square of ${i}=${sq}`);
  }
 }
 sq();

console.log("=========================Q4=====================");
function sqr() {
    var count1=0;
    for (let index = 1; index <=5; index++) {
        var squr=index*index;
        count1=squr+count1;
      }
      console.log(`sum of square of 1 to 5 is: ${count1}`);
    
}
sqr();

console.log("=========================Q5.1=====================");
function evenPositionedChars(string) {
      var result="";
      for (let index = 0; index <string.length; index++) {
      var chh=string.charAt(index);
       if (index%2==0 && chh!=" "){
      // console.log(chh);
      result=result+chh;
      
       }
       }
       console.log(result);  
    }
    console.log(`even position from"Hard work always pays back":`);
evenPositionedChars("Hard work always pays back");
console.log(`even position from "Soon I will be Angular IT champ":`);
evenPositionedChars("Soon I will be Angular IT champ")


console.log("=========================Q5.2=====================");
function oddPositionedCharm(string) {
       var result="";
      for (let index = 0; index <string.length; index++) {
        var chh=string.charAt(index);
       if (index%2!=0 && chh!=" "){
      //  console.log(chh);
           result=result+chh;
       }
       }
        console.log(result);
}
console.log(`Odd position from "Hard work always pays back":`);
oddPositionedCharm("Hard work always pays back")

console.log(`Odd position from " Soon I will be Angular IT champ":`);
oddPositionedCharm("Soon I will be Angular IT champ")