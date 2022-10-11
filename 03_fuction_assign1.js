//------Que 1-----
//-----Function with no argument ,no return type-----
function movies(){
console.log("Hollywood");
console.log("Bollywood");
}
movies();

function photography(){
    console.log("wild");
    console.log("Nature");
}
photography();

//----function with 2 argument and concating----
function fullname(firstName,lastName){
console.log("====before concating====");
console.log(firstName,lastName);
console.log("=====after concating=======");    
console.log(firstName+lastName);
}
fullname('dada','kashid');

//-----que 2-----
function swap_values(value1,value2){
    console.log("====before swap=====");
    console.log(value1,value2);
    console.log("=====after swap=====");
    var temp=value1;
    value1=value2;
    value2=temp;
    console.log(value1,value2);
}
swap_values("virat",'anushka');
swap_values(1000,2000);
//=====Que3=======
function add_three_number(one,two,three){
  
    addition=one+two+three;

}
  add_three_number(10.23,600,40);
  console.log("===addition of three number===");
  console.log(addition);
  add_three_number("Hello","Good","morning")
  console.log(addition);