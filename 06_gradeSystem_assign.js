function gradeSystem(score) {
    if (score < 35&& score>=0 &&score!="" &&score!=null) {
        console.log(`Your mark:"${score}" Sorry ,You are Failed ...KEEP TRYING`);
    }
    else {
        if (score >= 35 && score < 60) {
            console.log(`Your mark:"${score}" and You are Passed with Grade  "C"`);
        }
        else {
            if (score >= 60 && score < 75) {
                console.log(`Your mark:"${score}" and You are Passed with Grade  "B"`);
            }
            else {
                if (score >= 75 && score < 90) {
                    console.log(`Your mark:"${score}" and You are Passed with Grade  "A"`);
                }
                else {
                    if (score >= 90 && score <= 100) {
                        console.log(`Your mark:"${score}" and Hearty Congrats! You are Passed with Grade  "A+"`);
                    }
                    else {
                        console.log(`Your Mark:"${score}"  Invalid Input`);
                    }

                }
            }
        }

    }
}
gradeSystem(66);
gradeSystem("Fifty Five");
gradeSystem(undefined);
gradeSystem(13);
gradeSystem(35);
gradeSystem(-20);
gradeSystem("");
gradeSystem(75);
gradeSystem(55);
gradeSystem(98);
gradeSystem(null);
gradeSystem(82);


