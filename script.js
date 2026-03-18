// ================= ACTIVE NAVBAR LINK =================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

  let current = "";

  sections.forEach(section => {

    const sectionTop = section.offsetTop - 120;
    const sectionHeight = section.offsetHeight;

    if (scrollY >= sectionTop &&
        scrollY < sectionTop + sectionHeight) {

      current = section.getAttribute("id");
    }

  });

  navLinks.forEach(link => {

    link.classList.remove("active");

    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }

  });

});


// ================= SKILL BAR ANIMATION =================

const skillBars = document.querySelectorAll(".fill");

function animateSkills(){

  skillBars.forEach(bar => {

    const width = bar.style.width;

    bar.style.width = "0";

    setTimeout(() => {
      bar.style.width = width;
    }, 200);

  });

}

window.addEventListener("load", animateSkills);


// ================= SCROLL FADE EFFECT =================

const revealElements = document.querySelectorAll("section");

function reveal(){

  revealElements.forEach(el => {

    const windowHeight = window.innerHeight;
    const top = el.getBoundingClientRect().top;

    if(top < windowHeight - 150){
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    }

  });

}

revealElements.forEach(el => {
  el.style.opacity = "0";
  el.style.transform = "translateY(60px)";
  el.style.transition = "0.8s";
});

window.addEventListener("scroll", reveal);
