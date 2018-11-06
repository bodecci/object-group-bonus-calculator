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
    calculateBonus(array[index])   
  }//end for loop
  return true;
}//end of startLoop function

console.log( startLoop(employees) );

function calculateBonus( bonusEmp ) {
  console.log(bonusEmp.name);
  if (bonusEmp.reviewRating <= 2) {
    let employeeBonus = new EmployeeBonus ( bonusEmp.name, 0, bonusEmp.annualSalary, 0 );
    console.log(employeeBonus.name + ' has a bonus of ' + employeeBonus.totalBonus);
  }//end 2 rating bonus IF
  else{
    console.log('oops');
    
  }
}//end calculateBonus function
