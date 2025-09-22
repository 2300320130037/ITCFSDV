//console.log("hello world");
//var a=20;
// let a=50;
// if(a>10){
//     let a=100;
//     console.log("a="+a);
// }else{
//     console.log("hii")
// }
// console.log("hiii"+a);
// const a=23;
// a=50;
// console.log("a="+a);
// function fun(msg){
//     return "hey..."+msg;
//     console.log("hello");
// }
// const data=fun("greeeting....");
// console.log(data);
// const data=function(a,b){
//     return a*b;
// }
// console.log(data(5,6));
// const data=(msg)=>{
//     console.log("hey .. using arrow function"+msg);
// }
// data("in react development");
// const data=msg=>msg;
// const output=data("greeting of the day");
// console.log(output);
// IIFE - Immediately invoked function expression
// (function(){
//     console.log("welcome to mern session")
// })();
// setTimeout(()=>{
//     console.log("welcome to mern session ");
// },5000);

// function greet(msg="java"){
//     console.log(msg+" is a programming language");
// }
// greet("python");

function selectlanguage(lang){
    let result;
    if( lang == " java"){
        function javacompiler(){
            return " using java compiler"
        }
        result = javacompiler();
 }
 else if(lang=='c'){
    function cCompiler(){
        return " using c compiler";

    }
    result = cCompiler();
 }else{ result =" no compiler fouund";

 }
 return result}
console.log(selectlanguage("java"));
console.log(selectlanguage(" c"));
console.log(selectlanguage("Python"));
