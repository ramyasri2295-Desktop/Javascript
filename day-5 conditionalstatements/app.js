// Conditional Statements in JavaScript :
// Is also known as Decision Making Statements. Which helps us to make decisions based on certain conditions.
// conditional statements help us to make decisions based on boolean expressions (true or false).

// cs are classified into :
// 1. if statement
// 2. if...else statement  
// 3. else if ladder
// 4. switch statement
// 5. nested if statement


// 1. if statement :
// The if statement is used to execute a block of code only if a specified condition is true.

// Syntax :
// if (condition) {
//     // code to be executed if condition is true
// }

// Example :
if(true){
    console.log("code will be executed");
}

if(false){
    console.log("code will not be executed");
}


let age = 18;
if (age >= 18) {
    console.log("You are eligible to vote.");
}



// 2. if...else statement :
// The if...else statement is used to execute one block of code if a specified condition is true, and another block of code if the condition is false.

// Syntax :
   if(true){
    console.log("works for true condition");
   }else{
    console.log("works for false condition")
   }

    if(false){
        console.log("this statement is false");
    }else{
        console.log("this statement is true");
    }



// else if ladder :
// The else if ladder is used to specify multiple conditions to be checked in sequence. If one condition is true, the corresponding block of code is executed, and the rest are skipped.

// Syntax :

// example-1 :

if(false){
    console.log("apple");
}else if(false){
    console.log("Banana");
}else if(false){
    console.log("Dairy milk");
}else{
    console.log("Ramya")
}


//example-2 :

if(true){
    console.log("apple");
}else if(false){
    console.log("Banana");
}else if(false){
    console.log("Dairy milk");
}else{
    console.log("Ramya")
}
 

//example-3 :
if(false){
    console.log("apple");
}else if(true){
    console.log("Banana");
}else if(false){
    console.log("Dairy milk");
}else{
    console.log("Ramya")
}


//switch statement :
// The switch statement is used to perform different actions based on different conditions. It evaluates an expression and matches the value against multiple case clauses.

// Syntax :
// switch (expression) {
//     case value1:
//         // code to be executed if expression matches value1  
//         break;
//     case value2:
//         // code to be executed if expression matches value2
//         break;
//     ...
//     default:
//         // code to be executed if expression doesn't match any case
// }



let role="admin";
switch(admin){
    case "admin":
        console.log("admin as access");
        break;
    case "manager":
        console.log("manager has access");
        break;
    case "developer":
        console.log("manager has access");
        break;
    default:
        console.log("guest have access");   
}


// nested if statement :
// A nested if statement is an if statement that is contained within another if statement. It allows for more complex decision-making by checking multiple conditions in a hierarchical manner.

// Syntax :
if(condition1){
    // code to be executed if condition1 is true
    if(condition2){
        // code to be executed if condition2 is true
    }
}else{
    // code to be executed if condition1 is false
}







