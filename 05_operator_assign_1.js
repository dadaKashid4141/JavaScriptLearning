var wordLenghtSquare = function (word) {
    var wordlen = word.length;
    return wordlen * wordlen;

}
console.log("------------1-------------");
console.log(`JavaScript word length square:${wordLenghtSquare("JavaScript")}`);
console.log(`Google word length square:${wordLenghtSquare("Google")}`);
console.log(`Developer word length square:${wordLenghtSquare("Developer")}`);

console.log("-----------Que 2.1-------");
function reversString(str) {
    developer = "I am Angular Developer"
    console.log(`given string:${developer}`);
    var spliting = developer.split("");
    var revers = spliting.reverse().join("");
    console.log(`revers string is :${revers}`);


    console.log("------------2.2-------------");
    var length = developer.length;
    console.log(`length of string:${length}`);
    var splited = developer.split(" ");
    console.log(`length divided by no of words=${length / splited.length}`);

    console.log("------------2.3-------------");
    console.log(`Result After  length Multiplication by word:${length * splited.length}`);


}
reversString();


