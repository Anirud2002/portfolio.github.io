const arrow = document.querySelector(".upper-arrow");
const sections = document.querySelectorAll("section");
const burger = document.querySelector(".burger");
const navUl = document.querySelector("nav ul");
const container = document.querySelector('.container');
const dropDown = document.querySelector(".dropdown-item");
const hiddenList  = document.querySelector(".hidden-ul");




document.addEventListener('scroll', function(){
    let positionTop = window.scrollY;
    if(positionTop > 50){
        arrow.classList.add('active');
    }else{
        arrow.classList.remove('active');
    }
});

arrow.addEventListener('click', function(){
    document.documentElement.scrollTop = 0;
});

burger.addEventListener("click", function(){
    console.log("burger clicked");
    if(!navUl.classList.contains("show")){
        navUl.classList.add("show");
        return;
    }
    navUl.classList.remove("show");
})

const options = {
    root: null,
    threshold:0.3,
}

const observer = new IntersectionObserver((entries, observer)=>{
    entries.forEach(entry => {
        if(!entry.isIntersecting){
            return;
        }
        console.log("im animating")
        entry.target.classList.add("show");
    })
}, options);

sections.forEach(section=>{
    observer.observe(section);
});

window.addEventListener("DOMContentLoaded", ()=>{
    console.log("hey");
    if(!container.classList.contains("show")){
            container.classList.add("show");
            return
    }
    container.classList.remove("show")



});

dropDown.addEventListener("mouseover", ()=>{
    hiddenList.classList.add("show");
    return
});
dropDown.addEventListener("mouseout", ()=>{
    hiddenList.classList.remove("show");
    return
})