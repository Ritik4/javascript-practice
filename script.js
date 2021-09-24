



// JAVASCRIPT BASICS

//FUNDAMENTAL(ES6) PART-I

//FUNDAMENTAL(ES6) PART-II

//FUNCTIONS

//RECURTION

//CONDITIONAL STATMENTS AND LOOPS

//MATH

//ARRAY

//DATETIME

//STRING/TEXT

//VALIDATION WITH REGULAR EXPRESSION

//DOM

// DRAWING

//OBJECT

//list the properties of a JavaScript object


// delete the rollno property from the following object

// var student = {
//     name : "David Rayy",
//     sclass : "VI",
//     rollno : 12 };

//     console.log(student);
//     delete student.rollno;
//     console.log(student);                                                   

//length of a JavaScript object
// var student = {
//     name : "David Rayy",
//     sclass : "VI",
//     rollno : 12 };

//     console.log(student.length);



//VALIDATION WITHOUT REGULAR EXPRESSION

//SEARCHING AND SORTIN ALGORITHM



//PRACTICE

// shoping list program

// var btn = document.getElementById("btn");
// var input = document.getElementById("item");
// var ul = document.querySelector("#list");
// var sortlist = document.querySelector("#sortlist");

// function inputLength() {
//     return input.value.length;
// }

// function creatListElement() {
//     var li = document.createElement("li");
//     li.appendChild(document.createTextNode(input.value));
//     ul.appendChild(li);
//     input.value = "";
// }

// function addListAfterClick() {
//     if (inputLength() > 0) {
//         creatListElement();
//     }
// }

// function addListAfterKeypress(event) {
//     if (inputLength() > 0 && event.keyCode === 13) {
//         creatListElement();
//     }
// }


// btn.addEventListener("click", addListAfterClick);   
// input.addEventListener("keypress", addListAfterKeypress);

//
// var  a = 34;

// function fun1(){
//     console.log(a);
// }
// console.log(a);
// function checkValidity(bool){
// return bool
// }

// if(checkValidity(false)){

// }else{

// }

// function moveCommand(direction){
//     var whathappens ;
//     switch (direction){
//         case  "forward":
//         whathappens = "ancounter a monstter";
//         break;
//         default:
//           whathappens = "enter valid diredtione";
    
//     }
//     return whathappens;
// }


// var value = 36;

// if(true){
//     var value = 69;
//     console.log("inside" + value);
// }
// // fun1();
// console.log("outside" + value);


// const fun = function(){
//     console.log("fun");
// }
// const sut1 = 36;
// const sut2 = 89;
// const sut3 = 46;
// const obj = {
//   sut1,sut2,sut3
// }

// console.log(obj);

// function details(name="Ritik",lname="joshi",age=21){
//  console.log(`my name is ${name} ${lname} and my age is ${age}`);

// }

// details("rahul","bairagi",48);

// let fun1 = (a,b) => a+b;
// fun1(2,3);





// var isvalid = checkValidity(true)?"Wellcome back":"goto hell";

// 8 Object Tasks

// let myObject = {
//     "ircEvent": "PRIVMSG",
//     "method": "newURI",
//     "regex": "^http://.*"
// };

// // var r = JSON.stringify(myObject);

// var ob2 = {...myObject,
//            method:"hdhsslkd"};


// var x = {myProp: "value"};
// var y = Object.assign({
//     // name:"ritik",
// }, x);

// function suma(a){

//    function sumab(b){
//        console.log(a*b);
//    }

//    return sumab;
// }

// const total = suma(8);
// total();

// const suma = (a) =>  (b) => a*b;
// suma(3)(7);

// compose
// const sum = (a) => a+1;

// const total = (f,g) => (a)=> f(g(a))

// total(sum,sum)(5);

// function totol(f,g){
//   function cal(a){
//    return f(g(a));
//   }
//   return cal;
// }

// totol(sum,sum)(5);

// const array  = [1,2,13,4,65];
// const duble = []
// const newArray = array.forEach((num)=>{
//   duble.push(num * 2);
// });

// const mapArray = array.map((num)=>{
//   return num * 2;
// })


// const filterArray = array.filter(num=>num>5);


//reference type 

//context vs scon

//instantiation
// class Player {
//     constructor(name,type){
//         console.log(this);
//         this.name = name;
//         this.type = type;
//     }

//     introduce(){
//         console.log(`hi i am ${this.name}, I'm a ${this.type}`);
//     }
// }

// class Wizard extends Player{
//   constructor(name,type){
//       super(name,type)
//   }

//   play(){
//       console.log(`WEEEEEEEE i,m a ${this.type}`);
//   }
// }

// const wizard1 = new Wizard('shelly','healer');

// class Car{
//     constructor(color,name){
//       this.color = color;
//       this.name = name;
//     }

//     start(){
//       console.log(`WEEEEEEEE i,m a ${this.type}`);
        
//     }
// }

// Passed by Refference and passed by value
// let a = 5;//pass by value
// let b = a;
// b++;
// console.log(b);
// let b = {name:"Ritik"};

// let obj = {name:"Ritik"};//pass by refference
// let obj1 = obj;

// let obj = {
//     a:'a',
//     b:'b',
//     c:{
//         deep : 'try and copy me'
//     }
// };
// let clone = Object.assign({},obj);
// let clone2 = {...obj}
// obj.c = 5;
// console.log(obj);
// console.log(clone);
// console.log(clone2);

// const square = (x) => x**2;
// square(3);


// const cube = (y) => y**3;
// cube(8);

// Es 8

// es 10



// const num = [1,2,3,4,[5,6],[7,8],[9,10]];
// num.flatMap( cur => cur + 2);


// num.flatMap( curr=>typeof curr);
// let basket = ['apple','orange','graps'];
// let person = {
//     name:"ritik",
//     lname:"joshi",
//     4:"ritiikjoshi688@gmail.com"
// }

// for(item of person){
//     console.log(item);
// }


// for(item in person){
//     console.log(item);
// }


// array string are iterable
//object are 

// optional chaining operator ?.

// let Ritiks_pokemon = {
//     pikachu: {
//         species: 'Mouse pokemon',
//         height: 0.6,
//         weight: 30,
//         power:false
//     }
// }

// let power = Ritiks_pokemon?.pikachu?.power ?? 'no power';
// console.log(power);

//Optional chaining operator '?.'
// let weight = Ritiks_pokemon?.pikachu?.weight;
// console.log(weight);


//nullish coalescing operator ??



// Bigint is a new datatype which is 

// const flattend = []

// let num = [[1,2],[3,4],[5,6]];
// let newarr = num.reduce( (accumulator,cur)=>{
//     debugger;
//     return accumulator.concat(cur);
// },[]);
















