const studentGrade = "C";
switch (studentGrade) {
    case "B":
        console.log("Grade percentage 80-89%");
        break; 
    case "C":
        console.log("Grade percentage 70-79%");
        break;
    case "D":
        console.log("Grade Percentage 60-69%");
        break;
    case "F":
        console.log("grade Percentage 0-59%");
        break;
    default:
        console.log(`${studentGrade} Grade Percentage 90-100%`)
    }