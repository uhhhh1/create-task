const grade = document.querySelector('#input-feild');
var classes;


function calculateaverage() {

   let finalgrade = (grade/classes) * 100; 

   if (finalgrade > 92) {
    gpa = "4.0";
   }
   else if (finalgrade > 89){
    gpa = "3.7";
   }
   else if (finalgrade > 85){
    gpa = "3.3"
   }
   else if (finalgrade > 82){
    gpa = "3.0"
   }
   else if (finalgrade > 79){
    gpa = "2.7";
   }
   else if (finalgrade > 76){
    gpa = "2.3";
   }
   else if (finalgrade > 72){
    gpa = "2.0";
   }
   else if (finalgrade > 69){
    gpa = "1.7";
   }
    else if (finalgrade > 66){
    gpa ="1.3";
   }
   else if (finalgrade > 64){
    gpa = "1.0";
   }
   else {
    gpa = "0.0";
   }

   return gpa; 
};