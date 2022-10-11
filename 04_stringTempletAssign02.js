console.log("=============================Que 1===============================");
var stringHandson = function () {
    var str = "   Hey you are doing good ,keep it up   ";
    console.log(`String before performing operation:- ${str}`);

    console.log("=============================Que 2===============================");
    console.log(`length of sting:${str.length}`);

    console.log("=============================Que 3===============================");
    var trimResult = str.trim();
    console.log(`After removing spaces:-${trimResult}`);


    console.log("=============================Que 4===============================");
    var count = (str.length - trimResult.length);
    console.log(`space =${count}`);

    console.log("=============================Que 5===============================");
    var character = trimResult.charAt(0);
    var charResult = trimResult.charAt(trimResult.length - 1);
    console.log(`first character:${character}   And last character: ${charResult}`);

    console.log("=============================Que 6===============================");
    var spaceCount = trimResult.split(" ");
    console.log(`total words count= ${spaceCount.length}`);

    console.log("=============================Que 7===============================");
    var position = str.indexOf("good");
    console.log(`indexof word "good" =${position}`);

    console.log("=============================Que 8==============================="); 
    console.log(`substring from 22= ${str.substring(22)}`);

    console.log(`slice from 22=${str.slice(22)}`);

    console.log("=============================Que 9===============================");
    console.log(`string end with up:${trimResult.endsWith("up")}`);
    console.log("=============================Que 10===============================");
    console.log(`string start with Hey:${trimResult.startsWith("Hey")}`);
}
stringHandson();



