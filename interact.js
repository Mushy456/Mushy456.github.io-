// Sticky Navigation Menu JS Code
let nav = document.querySelector("nav");
let scrollBtn = document.querySelector(".scroll-button a");
// console.log(scrollBtn);
let val;
window.onscroll = function() {
  if(document.documentElement.scrollTop > 20){
    nav.classList.add("sticky");
    scrollBtn.style.display = "block";
  }else{
    nav.classList.remove("sticky");
    scrollBtn.style.display = "none";
  }
}
//fade in animation
window.addEventListener('scroll', reveal);
var reveals=document.querySelector('.reveal');
function reveal(){
    for(var i=0; i<reveals.length; i++){
        var windowheight=window.innerHeight;
        var revealTop=reveals[i].getBoundingClientRect().top;
        var revealpoint=150;
        if(revealTop<windowheight-revealpoint){
            reveals[i].classList.add('active');
        }
        else{
            reveals[i].classList.remove('active');
        }
    }
}