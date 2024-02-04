



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



let Year = document.getElementById('year') ;

let date = new Date();

let y = date.getFullYear();
Year.innerHTML = y;
