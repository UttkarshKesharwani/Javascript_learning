

// continue:- The continue statement terminates execution of the statements in the current iteration of the current or labeled loop, and continues execution of the loop with the next iteration.

// break:- The break statement terminates the current loop or switch statement and transfers program control to the statement following the terminated statement. It can also be used to jump past a labeled statement when used within that labeled statement.
// switch statement

let day = 2;

switch(day){
    case 1:  console.log("Sunday");
             break;
    case 2:  console.log("Monday");
             break; 
    case 3:  console.log("Tuesday");
              break;
    case 4:  console.log("Wednesday");
              break;
    case 5:  console.log("Thursday");
              break;
    case 6:  console.log("Friday");
              break;
    case 7:  console.log("Saturday");
              break;
    default: console.log(`invalid day`);
}