'use strict'

function display(name, ...myName) {  //rest parameter
    console.log(name, myName);
    console.log(typeof myName);
}
display("Anil", 31, "city", true);
display("anuj", 'pune',32)


function divide(x, y=1){   //default param
    console.log(x/y);
}
divide(10);
