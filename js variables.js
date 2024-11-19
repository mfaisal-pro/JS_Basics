
// fullname = "Muhammad Faisal";
// console.log(fullname);
// age = 24
// price = 99.99
// radius = 14
// x = null
// y = undefined
// isFollow = false;

// fullName = 25;
// console.log(fullName)
// console.log("hello world");

// Variables

// "var" keyword was used in old javascrip versions 
// it is not a good practice to declare variables using var keyword in modern javascript

// var n=10;
// console.log(n)
// console.log('n')

// var m= "hello"
// console.log(m)

// n=50
// console.log(n)

// var n="hello"
// console.log(n)

// mostly "let" and "const" as variable names are used

// we can not re-define a variable using "let" keyword, one it is declared 
// we cannot use let n again to declare a variable 

    // let n=10;
    // console.log(n)

    // let n=50

// var varible can be called in and outside of the function variable scope 

// let variable cannot be called outside of the function variable scope 

// {
//     var a=56
//     let n=23
// }


// It will not give an error beacuse it can be called in(private-scope) 
// and outside(public-scope) of its declared scope 
// console.log(a)

// It will give an error, beacuse it cannot work outside(public-scope) of its declared scope 
// console.log(n)

// a variable cannot be declared using two words seprated by a space 

// an underscore can be used instead of a space 

// For Example 

// Incorrect method

// let abc hello=10   
// console.log(abc hello)
// It will give an error 

// correct method 

// let abc_hello=10    
// console.log(abc_hello)
// It will not give an error 

// declaring multiple variable at one 

// let c=5,b=6,d="hello";

// console.log(d);


// const f=5
// console.log(f)

// const f=6

// const variable cannot be re-assigned

// Strings and template literals 

// a varible can be called inside a string

// let n=10
// applicable for a string in a comma above tab button of keyboard called backtick

// let w=`Welcome ${n} Faisal ${10+20}`;
// console.log(w)

// a varible can be called inside a string and the result will be converted into string