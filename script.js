const scrollBtn = document.getElementById('scrollBtn');
window.onscroll = function() {
    if (window.scrollY > 100) { 
        scrollBtn.style.display='flex';
} 
 else {
        scrollBtn.style.display = 'none';
    }
}
scrollBtn.addEventListener('click', ()=> {
    window.scrollTo({
        top:0
    })
})

const menu = document.getElementById("mobile-menu");
const menubtn= document.getElementById("menu-icon");
const menua =document.querySelectorAll(".mobile-menu a");
const animation ="animation-menu";
menubtn.addEventListener("click", () => {
 if (menu.style.display === "flex") {
    menu.style.display = "none";
    menua.forEach(link =>{link.style.display="none"});
  } 
  else {
    menu.style.display = "flex";
    menua.forEach(link =>{link.style.display="flex"});
    menu.classList.add(animation);
  }
})  