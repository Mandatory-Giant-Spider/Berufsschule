const subBtns = document.querySelectorAll(".submenubutton");

document.querySelector("#menubutton").addEventListener('click', (e) => {
    document.querySelector("#mainbarwrap").classList.toggle('show');
    subBtns.forEach((elem) => {
      elem.nextElementSibling.classList.remove('show');
      elem.parentElement.classList.remove('active');
    });
});

subBtns.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    subBtns.forEach((elem) => {
      if(btn!=elem) {
        elem.nextElementSibling.classList.remove('show');
        elem.parentElement.classList.remove('active');
      }});
    btn.nextElementSibling.classList.toggle('show');
    btn.parentElement.classList.toggle('active');
  });
});

let navbar = document.getElementById("navbar");
let navlogo = document.getElementById("navlogo");
let navfavi = document.getElementById("navfavi");
let mainbarelem = document.querySelectorAll(".mainbarelem");
let subbar = document.querySelectorAll(".subbar");
let stickNavbar = navbar.offsetTop + 30;

window.onscroll = function() {
  if (window.scrollY > stickNavbar) {
    navbar.classList.add("sticky");
    navlogo.classList.add("show");
    navfavi.classList.add("show");
    mainbarelem.forEach((elem) => {elem.classList.add("shrink")});
    subbar.forEach((elem) => {elem.classList.add("shrink")});
  } else {
    navbar.classList.remove("sticky");
    navlogo.classList.remove("show");
    navfavi.classList.remove("show");
    mainbarelem.forEach((elem) => {elem.classList.remove("shrink")});
    subbar.forEach((elem) => {elem.classList.remove("shrink")});
  }
};

document.querySelectorAll(".contentlink").forEach((elem) => elem.setAttribute("target", "_blank"));