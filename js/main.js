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



var mode = document.querySelector("#themeBtn");
var navbar = document.querySelector("#navbar");
var titleHero = document.querySelector("#hero-left-h")

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











// mode.classList.add("btn-danger")
// mode.classList.remove("btn-dark")
// mode.textContent = "Hello"
// mode.classList.toggle