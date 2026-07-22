document.addEventListener("DOMContentLoaded",()=>{
const navbar=document.getElementById("navbar");
const progress=document.getElementById("progress-bar");
const topBtn=document.getElementById("backToTop");
const toggle=document.getElementById("menu-toggle");
const nav=document.querySelector(".nav-links");

function update(){
  if(navbar) navbar.classList.toggle("scrolled",window.scrollY>40);
  if(topBtn) topBtn.classList.toggle("show",window.scrollY>500);
  if(progress){
    const h=document.documentElement.scrollHeight-document.documentElement.clientHeight;
    progress.style.width=(h>0?(document.documentElement.scrollTop/h)*100:0)+"%";
  }
}
window.addEventListener("scroll",update,{passive:true});
update();

if(toggle&&nav){
  toggle.addEventListener("click",()=>nav.classList.toggle("active"));
  nav.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>nav.classList.remove("active")));
}
if(topBtn) topBtn.addEventListener("click",()=>window.scrollTo({top:0,behavior:"smooth"}));

const observer=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add("active");
      observer.unobserve(entry.target);
    }
  });
},{threshold:.12});
document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));
});