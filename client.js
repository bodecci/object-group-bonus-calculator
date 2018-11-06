class Employee{
  constructor( name, employeeNumber, annualSalary, reviewRating ){
    this.name = name;
    this.employeeNumber = employeeNumber;
    this.annualSalary = annualSalary;
    this.reviewRating = reviewRating;
  } // end constructor
} // end Employee class

const atticus = new Employee( 'Atticus', '2405', '47000', 3 ); // this creates a new object
const jem = new Employee( 'Jem', '62347', '63500', 4 );
const scout =  new Employee( 'Scout', '6243', '74750', 5 );
const robert =  new Employee( 'Robert', '26835', '66000', 1 );
const mayella =  new Employee( 'Mayella', '89068', '35000', 2 );

const employees = [ atticus, jem, scout, robert, mayella ]; // this is an array of objects

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// Take small steps! Don't write a for loop and two functions that do all of the calculations right away.
// This problem is massive! Break the problem down. Use the debugger.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.

console.log( employees );

class EmployeeBonus {
  constructor(name, bonusPercentage, totalCompensation, totalBonus) {
    this.name = name;
    this.bonusPercentage = bonusPercentage;
    this.totalCompensation = totalCompensation;
    this.totalBonus = totalBonus;
  } // end constructor
} // end EmployeeBonus class

function startLoop( array ) {
  for (let index = 0; index < array.length; index++) {
    console.log(array[index]); 
    calculateReviewPercent(array[index])   
  }//end for loop
  return true;
}//end of startLoop function

console.log( startLoop(employees) );

// function calculateBonus( bonusEmp ) {
//   console.log(bonusEmp.name);
//   let newEmpBonus = 0;
//   let newEmpBonusPercent = 0;
//   if (bonusEmp.reviewRating <= 2) {
//     let employeeBonus = new EmployeeBonus ( bonusEmp.name, newEmpBonusPercent, bonusEmp.annualSalary, newEmpBonus );
//     console.log(employeeBonus.name + ' has a bonus of ' + employeeBonus.totalBonus);
//   }//end 2 rating bonus IF
//   else if (bonusEmp.reviewRating == 3) {
//     newEmpBonus = bonusEmp.annualSalary * .04;
//     newEmpBonusPercent = 0.04;
//     let totalComp = (bonusEmp.annualSalary + (bonusEmp.annualSalary * .04));
//     let employeeBonus = new EmployeeBonus(bonusEmp.name, newEmpBonusPercent, totalComp , newEmpBonus );
//     console.log(employeeBonus.name + ' has a bonus of ' + employeeBonus.totalBonus);
//   }//end 3 rating bonus ELSE
//   else if (bonusEmp.reviewRating == 4) {
//     newEmpBonus = bonusEmp.annualSalary * .06;
//     newEmpBonusPercent = 0.06;
//     let totalComp = (bonusEmp.annualSalary + (bonusEmp.annualSalary * .06));
//     let employeeBonus = new EmployeeBonus(bonusEmp.name, newEmpBonusPercent, totalComp, newEmpBonus);
//     console.log(employeeBonus.name + ' has a bonus of ' + employeeBonus.totalBonus);
//   }//end 4 rating bonus ELSE
//   else {
//       newEmpBonus = bonusEmp.annualSalary * .10;
//       newEmpBonusPercent = 0.10;
//       let totalComp = (bonusEmp.annualSalary + (bonusEmp.annualSalary * .10));
//       let employeeBonus = new EmployeeBonus(bonusEmp.name, newEmpBonusPercent, totalComp, newEmpBonus);
//       console.log(employeeBonus.name + ' has a bonus of ' + employeeBonus.totalBonus);
//   }//end 5 rating bonus ELSE IF
// }//end calculateBonus function

function calculateReviewPercent( bonusEmp ) {
  console.log( bonusEmp.name );
  let newEmpBonusPercent;
  if (bonusEmp.reviewRating <= 2){
    newEmpBonusPercent = 0;
  }// end 2 below rating
  else if ( bonusEmp.reviewRating == 3 ){
    newEmpBonusPercent = .04;
  }//end 3 rating
  else if (bonusEmp.reviewRating == 4) {
    newEmpBonusPercent = .06;
  }//end 4 rating
  else {
    newEmpBonusPercent = .10;
  }//end 5 plus rating
  calculateDigitBonus( newEmpBonusPercent, bonusEmp );
}//end calculateReviewPercent function

function calculateDigitBonus( params1, params2 ) {
  if ( params2.employeeNumber.length == 4 ){
  params1 += .05;
}//end 4 digit IF
  calculate65Bonus( params1, params2 );
}//end calculateDigitBonus

function calculate65Bonus ( params3, params4 ) {
  if(params4.annualSalary > 65000){
    params3 -= 0.1;
  }//end if
  calculate013Bonus(params3, params4);
}//end calculate65Bonus function

function calculate013Bonus(params5, params6) {
  if (params5 < 0) {
    params5 = 0;
  }
  else if (params5 > .13) {
    params5 = .13;
  }
  console.log(params6.name + ' has a bonus of ' + (params5*params6.annualSalary));
  let newEmpBonusPercent = params5;
  let newEmpBonus = (params5 * params6.annualSalary);
  let newEmpTotalComp = (newEmpBonus + parseInt(params6.annualSalary));
  let newEmployeeBonus = new EmployeeBonus(params6.name, newEmpBonusPercent, newEmpTotalComp, newEmpBonus);
  console.log(newEmployeeBonus);
}//end calculate013Bonus function