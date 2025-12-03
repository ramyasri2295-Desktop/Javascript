//  Data Types : JavaScript has several built-in data types that can be categorized into primitive and non-primitive types.

//primitive Data Types :
// Single value terminologies
// donot deal with references

// type of undefined is undefined
// type of null is object : js is purely object based language so it is considered as object

// 1. Number : it is used to represent both integer and floating point numbers
         let age=22;
         console.log(typeof age); // Output: number
         const piValue = 3.14
         console.log(typeof piValue); // Output: number
    // 2. String : 
         const userName = "Vamsee Krishna";
         const greetingMessage = 'Hello, World!';
         console.log(typeof userName); // Output: string
         console.log(typeof greetingMessage); // Output: string
    // 3. Boolean :
         let isLoggedIn = true;
         let hasSubscription = false;
         console.log(typeof isLoggedIn); // Output: boolean
         console.log(typeof hasSubscription); // Output: boolean
    // 4. Undefined :
          let userAddress;
           console.log(typeof userAddress); // Output: undefined
    // 5. Null :
          let selectedItem = null;
            console.log(typeof selectedItem); // Output: object




    // 6. Symbol :
         const uniqueId = Symbol('id');
    // 7. BigInt :
          const largeNumber = BigInt(9007199254741991);

//non primitive Data Types :
// collection of values
// deal with references


// array is denoted by square brackets []
// object is denoted by curly braces {} 


// array is collection of similar data types 
// array is used to store multiple values in a single variable


// object is used to store multiple values in a single variable in the form of key value pairs
// objects are real world entities
// objects is more powerful than array because in array we can store only similar data types but in object we can store multiple data types


// 1. Array : passes indexes

      const userInformation = [25, true, "India"];
       console.log(typeof userInformation); // Output: object

        console.log(userInformation[0]); // Output: Vamsee



        const test=[22,true,"Ramya"];
        console.log(typeof test);

        console.log(typeof test)

        console.log(test[0])

    // 2. Object : passes key value pairs

        const userDetails = {
            name: "Vamsee Krishna",
            age: 25,
            isMember: true,
            country: "India"
        };
        console.log(typeof userDetails); // Output: object
        console.log(userDetails.name); // Output: Vamsee Krishna

        //properties will describe how an object looks like
       //methods will describe an action of an object 
       // name is key and "Vamsee Krishna" is value
       // name is one property and age is another property of userDetails object


       const employee ={
            name : "Ramya",
            age:22,
            email:"ramya@2295",
            department:2,
       }
       console.log(employee.name);
       console.log(typeof employee)
 

    // 3. Array of Objects : passes indexes as well as key value pairs

    const users = [
    { name: "Vamsee Krishna", age: 25, isMember: true, country: "India", skills: ["JavaScript", "React", "Node.js"] },
    { name: "John Doe", age: 30, isMember: false, country: "USA" },
    { name: "Jane Smith", age: 28, isMember: true, country: "UK", skills: ["Python", "Django", "Flask"], companiesWorked: { currentCompany: "Tech Solutions", previousCompany: "Web Innovations" } },
    { name: "Alice Johnson", age: 22, isMember: false, country: "Canada" }
];



        console.log(users[0].name); // Output: Vamsee Krishna
        console.log(users[1].country); // Output: USA
        console.log(users[2].age); // Output: 28
        console.log(users[3].isMember); // Output: false


        console.log(users[0].name + " is a " + users[0].skills[1] + "Js Developer.");

        console.log(users[2].name + " worked as" + users[2].skills[1] + " Developer at " + users[2].companiesWorked.currentCompany);

        console.log(`${users[2].name} worked as ${users[2].skills[1]} developer at ${users[2].companiesWorked.currentCompany}.`);

        console.log(typeof users);
        console.log(users[2].age);

        console.log(users[2].name +' is a ' + users[2].skills[1]+' developer ');
        console.log(`${users[0].name} is a ${users[0].skills[1] }  js developer`)




// sequence of characters or string is a collection of characters which is enclosed within single quotes or double quotes or backticks

// type of keyword will help you to identify the data types of the variable