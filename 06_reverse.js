console.log("=====================Assignment : 0B Reverse String ==========================");
function reverseString(str) {
    console.log(`Given String:${str}`);
    var removespace = '';
    for (let index = str.length; index >= 0; index--) {
        var chr = str.charAt(index);
        if (chr != " ") {
            removespace = removespace + chr;
        }
    }
    console.log(`after reverse & remove spaces:${removespace}`);
}
reverseString("Hard work always pays back");
console.log("----------------------------------------------------------------");
reverseString("Soon I will be Angular IT Champ")