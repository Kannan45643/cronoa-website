var List=document.querySelectorAll(".A ul li")
function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
function ABCD(){for(i=0;i<List.length;i++){
    if (isElementInViewport(List [i])){List [i].classList.add("vs")}
}}

window.addEventListener("scroll",ABCD)

