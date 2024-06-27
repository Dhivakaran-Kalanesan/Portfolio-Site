

// Mobile Navbar Toggle Js 


let bars = document.getElementById('bars') ;

let xmark = document.getElementById('xmark') ;

let navList = document.getElementById('navList') ;


bars.addEventListener('click',()=>{
    navList.style.left = "0";
    navList.style.transition = ".3s" ;
    navList.style.transitionTimingFunction = "ease-in-out" ;
    navList.style.boxShadow = "0px 0px 40px rgb(202, 201, 201)" ;
})


xmark.addEventListener('click',()=>{
    navList.style.left = "-100%";
    navList.style.transition = ".3s" ;
    navList.style.transitionTimingFunction = "ease-in-out" ;
    navList.style.boxShadow = "none" ;
})


// Dynamic Year Js

let Year = document.getElementById('year') ;

let date = new Date();

let y = date.getFullYear();
Year.innerHTML = y;


// Back To Top Button Js


var back_to_top = document.getElementById("back_to_top");

back_to_top.addEventListener("click",function(){
    
    document.scrollingElement.scrollTop = 0;

});

window.onscroll = ()=>{

    if(window.scrollY > 400){
        back_to_top.style.display = "flex";
        
    }else{

        back_to_top.style.display = "none";


    }

}


// Preloader Js

window.onload = ()=>{
    
    var loader = document.getElementsByClassName("preloader")[0];

    loader.classList.add("fadeAnimation");

}

// Context Menu Disabled Js

document.addEventListener("contextmenu",function(event){
    event.preventDefault();
})


// Tab Bar Title Change Js


    var pageTitle = "Dhivakaran.K";

    var message = 'Hey Come Back!';

    document.addEventListener('visibilitychange', function () {

        var isPageActive = !document.hidden;

        if (!isPageActive) {

            document.title = message;

        } else {

            document.title = pageTitle;

        }
    });
