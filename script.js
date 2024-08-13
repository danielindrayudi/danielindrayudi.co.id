// FUNGSI NAVIGASI
function myMenuFunction(){
    var menuBtn = document.getElementById("myNavMenu");

    if(menuBtn.className === "nav-menu"){
        menuBtn.className += " responsive";
    } else {
        menuBtn.className = "nav-menu";
    }
}

// NAVIGASI BAYANGAN BAR SCROOLING
window.onscroll = function() {headerShadow()};

function headerShadow(){
    const navHeader =document.getElementById("header");

    if(document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
        navHeader.style.height = "70px";
        navHeader.style.lineHeight= "70px";
    } else {
        navHeader.style.boxShadow = "none";
        navHeader.style.height = "90px";
        navHeader.style.lineHeight= "90px";
    }
}

// PORTOFOLIO MODAL
const portofolioModals = document.querySelectorAll(".portofolio-model");
const imgCards = document.querySelectorAll(".img-card");
const portofolioCloseBtns = document.querySelectorAll(".portofolio-close-btn");

var portofolioModal = function (modalClick) {
    portofolioModals[modalClick].classList.add("active");
}

imgCards.forEach((imgCard, i) => {
    imgCard.addEventListener("click", () => {
        portofolioModal(i);
    });
});

portofolioCloseBtns.forEach((portofolioCloseBtn) => {
    portofolioCloseBtn.addEventListener("click", () => {
        portofolioModals.forEach((portofolioModalView) => {
            portofolioModalView.classList.remove("active");
        });
    });
});

// Typing effect
var typingEffect = new Typed(".typedText",{
    strings : ["Web Developer","Designer","Technician", "Networking"],
    loop : true,
    typeSpeed : 100,
    backSpeed : 80,
    backDelay : 2000
})

// scroll reveal animation
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
})
// home
sr.reveal('.featured-text-card',{delay: 100})
sr.reveal('.featured-name',{delay: 100})
sr.reveal('.featured-text-info',{delay: 200})
sr.reveal('.featured-text-btn',{delay: 200})
sr.reveal('.social_icons',{delay: 200})
sr.reveal('.featured-image',{delay: 300})

// Project box
sr.reveal('.portofolio',{interval: 200})

// heading
sr.reveal('.top-header',{})
const srLeft = ScrollReveal({
    origin: 'left',
    distance: '80px',
    duration: 2000,
    reset: true
})
srLeft.reveal('.about-img',{delay: 100})
srLeft.reveal('.contact-info',{delay: 100})

// About teks form box
const srRight = ScrollReveal({
    origin: 'right',
    distance: '80px',
    duration: 2000,
    reset: true
})
srLeft.reveal('.about-info',{delay: 100})
srLeft.reveal('.form-control',{delay: 100})

// change active link
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.scrollY;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 50,
        sectionId = current.getAttribute('id');

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link')
        } else{
            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}

window.addEventListener('scroll', scrollActive)

// alert
function message(){
    var Name = document.getElementById('name');
    var email = document.getElementById('email');
    var msg = document.getElementById('msg');
    const success = document.getElementById('success');
    const danger = document.getElementById('danger');

     if(Name.value === '' || email.value === '' || msg.value === ''){
        danger.style.display = 'block';
     }
     else{
        setTimeout(() => {
            Name.value = '';
            email.value = '';
            msg.value = '';
        }, 2000);
        success.style.display = 'block';
     }

     setTimeout(() => {
        danger.style.display = 'none';
        success.style.display = 'none';
     },4000);
}
