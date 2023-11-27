// script.js

document.addEventListener("DOMContentLoaded", function() {
    // This function will be called when the DOM is fully loaded

    // Prompt the user for their exam mark
    var examMark = prompt("Enter your exam mark:");

    // Convert the input to a number
    var mark = parseFloat(examMark);

    // Check if the input is a valid number
    if (!isNaN(mark)) {
        // Grade calculator using if/else statement
        var grade;

        if (mark >= 70 && mark <= 100) {
            grade = "A";
        } else if (mark >= 50 && mark <= 60) {
            grade = "C";
        } else if (mark >= 0 && mark <= 40) {
            grade = "F";
        } else {
            grade = "Invalid mark. Please enter a mark between 0 and 100.";
        }

        // Display the result
        alert("Your grade is: " + grade);
    } else {
        // Display an error message if the input is not a number
        alert("Invalid input. Please enter a valid number.");
    }
});
