// Data Type :  permeative ,                        non permeative
//              number , string
// Boolean , undefind , null , symbol , bigin          object

// console.log(3 + 5); //8
// console.log("3" + "5"); // 35
// console.log(3 + "5"); // 35 8
// console.log("3" + 5); // 35
// console.log("3" + 5 + 5 + 5); // 3555
// console.log( 5 + 5 + "3" + 5); // 1035

// implicit conversion
// console.log(  Number(true)  ) // 1
// console.log(  Number(false)  ) // 0
// console.log(  Number("")  ) // 0
// console.log(  Number(" ")  ) // 0  
// console.log(  Number("ahmed")  ) // NaN
// console.log(  Number()  ) // 0
// console.log(  Number(undefined)  )  // NaN
// console.log(  Number(null)  ) // 0


// var userName = window.prompt("Enter your name : ");



// var num1 = Number( window.prompt("Enter your number 1 : ") );
// var num2 = Number( window.prompt("Enter your number 2 : ") );
// console.log(num1 * num2);


// document.querySelector("#test").style.color = "red"
// document.querySelector(".color-gray").style.color = "teal"



let mode = document.querySelector("#themeBtn");
let navbar = document.querySelector("#navbar");
let titleHero = document.querySelector("#hero-left-h")

let email = document.querySelector("#useremail")
let password = document.querySelector("#userpassword")
let login = document.querySelector("#form")



mode.addEventListener("click" , function(){
    document.body.classList.toggle("bg-dark")
    document.body.classList.toggle("text-white")

    navbar.classList.toggle("bg-dark")
    navbar.classList.toggle("bg-light")

    navbar.classList.toggle("navbar-dark")
    navbar.classList.toggle("navbar-light")


    if(document.body.classList.contains("bg-dark")){
        // dark
        mode.textContent = "Light Mode"
        titleHero.classList.add("habiba")

    }else{
        // light
        mode.textContent = "Dark Mode"
        titleHero.classList.remove("habiba")
    }

})


// login
login.addEventListener('submit' , function(e){
    e.preventDefault();

    if(email.value == "admin@admin.com" && password.value == "1234"){
        window.location.href = "index.html";
    }else{
        alert("Email or Password wrong")
    }
})





// array , loop , object

let stu1 = "ahmed"
let stu2 = "moahemd"
let stu3 = "mostafa"

//      index       0          1            2

// allStudent.push("ali" , "aya" , "basmala")
// allStudent.pop()
// allStudent.shift()
// allStudent.unshift("hello")
// allStudent.length
// allStudent.includes("ali")
// allStudent.indexOf("ali")
// splice , slice

// allStudent.splice(1,1,"hello")
// console.log(allStudent);


/** loop
 * for , do while , while ,for in , forEach , for of 
 * Array Methods : map , filter , reduce , find , findIndex , some , every , flatMap
*/



//   start conation  step


let allStudent = ["ahmed" , "mohamed" , "mostafa"]

// for( let i = 0 ;  i < allStudent.length  ; i++  ){
//     console.log( allStudent[i] )
// }

// allStudent.forEach( function(habiba) {
//     console.log(habiba)
// } )


// error , infinit loop , hello (1) , hello(10)

















// mode.classList.add("btn-danger")
// mode.classList.remove("btn-dark")
// mode.textContent = "Hello"
// mode.classList.toggle



//  =    ==     === 
// var num1 = null // object
// var num2 = undefined // undefined

// if(num1 === num2){
//     console.log("Equal")
// }else{
//     console.log("not Equal")
// }




// arithmetic operator
// + , - , * , / , ** , ++ , -- , +5 , %

// comparison (logical) operator 
// > , < , == , === , != , !== , &&(AND) , ||(OR) , <= , >=

// 1- re-useable
// 2- 

// argument , parameter , calling
// function hello(name,age){
//     console.log('Hello Every One' , name , age)
// }

// hello("ahmed", 20)



// var , let , const
// let x = 10;
// x = 15
// console.log(x);










// var x = 10;

// let y = 15
// const z = 15

// let x = 10;
// let x = "mostafa";

// console.log(x);

// scope => global scope , loacl scope

// if(true){
//     let name1 = "ahmed"
// }

// function hello(name){
//     var name2 = "ali"
// }


// console.log(name1);
// console.log(name2);





// TDZ ---> let , const (undefinded -> error)
// var -> undefinded
// console.log(y); 
// let y = 10;
// console.log(y)



