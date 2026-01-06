// function Student(name, age, course) {
//     this.name = name;
//     this.age = age;
//     this.course = course;

//     console.log(this.name);
// }

// let student1 = new Student("Ramya", 20, "Mathematics");
// let student2 = new Student("Bob", 22, "Physics");
// let student3 = new Student("Charlie", 21, "Chemistry");

// console.log(student1);
// console.log(student2);
// console.log(student3);
// console.log(student1.name);




let User ={
    name:"Ramya",
    marks:90,
}

// console.log(User.marks<50 ? "pass":"fail");

if(User.marks>35){
    console.log("pass");
}else{
    console.log("fail");
}


// function User(name,marks,getresult){
//     this.name=name;
//     this.marks=marks;
//     this.getresult=function(){
//         return this.marks>35 ? "pass":"fail"
//     }
//     this.grade=function(){
//         return this.marks>35 ? "A":"B"
//     }
// }

// let user1=new User("Ramya",90);
// let user2=new User("Ram",30);
// console.log(user1.getresult());
// console.log(user2.getresult());
// console.log(user1.grade());
// console.log(user2.grade());


// let User={
//     name:"Ramya",
//     marks:90,
//     getresult:function(){
//         return this.marks>35 ? "pass":"fail"
//     }
// }

// console.log(User.getresult())
