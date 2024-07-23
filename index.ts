#! /usr/bin/env node
import inquirer from "inquirer";
console.log("Welcome to My Adventure Quiz Game:");
console.log("You are Requried to gain  maximum 4  points for the Window ");
let points=0
// --------------------------Question 01--------------------//
let question1=await inquirer.prompt({
    type:"list",
    name:"one",
    message:"Typescript is a Superset off?",
    choices:["Python","C++","Java","Javascript"]

})
if (question1.one=="Javascript"){
    console.log("Your answer is Correct ");
    points++
    
}else{
    console.log("Incorrect Answer");
    
}
// --------------------------Question 02--------------------//
let question2=await inquirer.prompt({
    type:"list",
    name:"two",
    message:"Who is the Founder of MicroSoft?",
    choices:["Elon Musk","Mark","Bill Gates","Ali Jahengeer"]

})
if (question2.two=="Bill Gates"){
    console.log("Your answer is Correct ");
    points++
    
}else{
    console.log("Incorrect Answer");
    
}
// --------------------------Question 03--------------------//
let question3=await inquirer.prompt({
    type:"list",
    name:"three",
    message:"What is Capital Of Pakistan ?",
    choices:["Karachi","Punjab","Islamabad","KPK"]

})
if (question3.three=="Islamabad"){
    console.log("Your answer is Correct ");
    points++
    
}else{
    console.log("Incorrect Answer");
    
}
// --------------------------Question 04--------------------//
let question4=await inquirer.prompt({
    type:"list",
    name:"four",
    message:"Who is the Current Governer Of Pakistan ?",
    choices:["Nazeer ur dine","Haider Ali ","ZiaAullah ","Kamran Tessori"]

})
if (question4.four=="Kamran Tessori"){
    console.log("Your answer is Correct ");
    points++
    
}else{
    console.log("Incorrect Answer");
    
}
// --------------------------Question 05--------------------//
let question5=await inquirer.prompt({
    type:"list",
    name:"five",
    message:"In which Langauge You here My Voice ?",
    choices:["English","Urdu","Arabi ","Punjabi"]

})
if (question5.five=="Urdu"){
    console.log("Your answer is Correct ");
    points++
    
}else{
    console.log("Incorrect Answer");
    
}

// -----------------------Output Condition---------------------------//
if (points>=4){
    console.log("Congratulations!");
    console.log(`Your Points:${points}`);
    
    
}else{
    console.log("You Loss! Try Next time");
    console.log(`Your Points:${points}`);
    
}