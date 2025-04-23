let message = ""; // initializing the message variable 


function letterToGPA(letters) {
    // Loop to ensure the grade is valid
    while (true) {
        letters = letters.trim().toUpperCase(); //removes whitespace and converts the input to uppercase
        if (letters === "A") return 4.0; // returns a gpa of 4.0 for A
        else if (letters === "A-") return 3.7; //returns a gpa of 3.7 for A-
        else if (letters === "B+") return 3.3; //returns a gpa of 3.3 for B+
        else if (letters === "B") return 3.0; // returns a gpa of 3.0 for B
        else if (letters === "B-") return 2.7; //returns a gpa of 2.7 for B-
        else if (letters === "C+") return 2.3; //returns a gpa of 2.3 for C+
        else if (letters === "C") return 2.0; // returns a gpa of 2.0 for C
        else if (letters === "C-") return 1.7; // returns a gpa of 1.7 for C-
        else if (letters === "D") return 1.0; // returns a gpa of 1.0 for D
        else if (letters === "F") return 0.0; // returns a gpa of 0.0 for F
        else {
            // If invalid, prompt the user to re-enter the grade
            alert(`Invalid grade entered: ${letters}`);
            return 0; // Exit the loop and return 0 for invalid grades
        }
    }
}

function calculateGPA() {
    let input = document.getElementById("gradeHolder").value;
    let grades = input.split(",");
    let total = 0;

    for (let i = 0; i < grades.length; i++) {
        total += letterToGPA(grades[i]);
    }

    let gpa = total / grades.length; // sets the calculation for gpa to the total values for each letter put into the input divided by the amount of letters 

    if (gpa >= 4.0) {
        message = "Harvard is calling...";
    } else if(gpa >= 3.5){
        message = "You're doing great!";
    }else if (gpa >= 2.5) {
        message = "You're doing good.";
    } else if (gpa >= 1.0) {
        message = "You might want to study more.";
    } else if (gpa >= 0.1) {
        message = "just drop out already you're so buns...😭";
    }else {
        message = "how is this even achieveable💔";
    }

    document.getElementById("finalGPA").innerText = `Your Final GPA is a ${gpa.toFixed(2)}. ${message}`;
}