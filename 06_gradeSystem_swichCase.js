function gradeSystem(score) {
   
    switch (true) {
        case score<35 && score>=0&&score!=" " &&score!=null:
                console.log('You are Failed');
            break;
        
        case score>=35&&score<60: 
            console.log('You are Passed and GRADE is: C');
            break;   
        case score>=60&&score<75: 
            console.log('You are Passed and GRADE is: B');
            break; 
        case score>=75&&score<90: 
            console.log('You are Passed and GRADE is: A');
            break;
        case score>=90&&score<=100: 
            console.log('You are Passed and GRADE is: A+');
            break;          
        default :
        console.log("Invalid input"); 
            break;
    }
}

gradeSystem(66);
console.log('----------------------------');
gradeSystem(13);
console.log('----------------------------');
gradeSystem(" ");
console.log('----------------------------');
gradeSystem(98);
console.log('----------------------------');
gradeSystem("fifty Five");
console.log('----------------------------');
gradeSystem(35);
console.log('----------------------------');
gradeSystem(75);
console.log('----------------------------');
gradeSystem(null);
console.log('----------------------------');
gradeSystem(undefined);
console.log('----------------------------');
gradeSystem(-20);
console.log('----------------------------');
gradeSystem(55);
console.log('----------------------------');
gradeSystem(82);