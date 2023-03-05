// filter 

const filter_tabs = document.querySelectorAll(".filter-btn");
const filter_contents = document.querySelectorAll(".filter [data-content]");


filter_tabs.forEach((tab) => {

    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.target);

        filter_contents.forEach(fc => {

            fc.classList.remove("active");
        });

        target.classList.add('active');

        filter_tabs.forEach(tab => {
            tab.classList.remove('active')
        });
        tab.classList.add('active');
    });


});



// theme


const theme_btn = document.getElementById('theme-btn');



theme_btn.addEventListener('click',()=>{

    const body = document.querySelector('body');
    body.classList.toggle('dark-theme');

    // change icon 

    theme_btn.classList.toggle('ri-moon-line');
    theme_btn.classList.toggle('ri-sun-line');

})



// scroll reveal animation  // 



const sr = ScrollReveal({
    origin: 'top',
    distance: '600px',
    duration: "2500",
    delay: 400,
});



sr.reveal('.profile-data .imgbx ');


sr.reveal('.profile-data .name', {
    delay: 500,
});

sr.reveal('.profile-data .profession', {
    delay: 600,
});

sr.reveal('.profile-data .socials', {
    delay: 700,
});


sr.reveal('.profile-info', {
    delay: 700,
    interval: 100,
});

sr.reveal('.profile-btns', {
    delay: 800,
});

sr.reveal('.filter-tabs', {
    delay: 900,
});

sr.reveal('.filter-section', {
    delay: 1000,
});

// sr.reveal('.sub-service,.about,.portofolio,.service,.cta,.contact', {
//     interval: 16,
//     // reset: true,
//     origin: 'bottom',
// });










// const header = document.querySelector("header");

// window.addEventListener("scroll", () => {
//     header.classList.toggle("sticky", window.scrollY > 0)


// })

// let menu = document.querySelector('#menu-icon');
// let navlist = document.querySelector('.navlist');

// menu.onclick = () => {
//     menu.classList.toggle('bx-x');
//     navlist.classList.toggle('active');
// };

// window.onscroll = () => {
//     menu.classList.remove('bx-x');
//     navlist.classList.remove('active');
// };

