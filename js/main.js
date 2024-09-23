document.addEventListener('DOMContentLoaded', () => {


    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');

    menuToggle.addEventListener('click', function () {
        navMenu.classList.toggle('active');
    });





    var avtiveIndex = 0

    const curosal_data = [{
        title: 'Rent the perfect space',
        desc: 'For your workshops, conferences, events, and birthdays with unique architectural and aesthetically designed spaces',
        img: './images/product_1.png'
    }, {
        title: 'A new idea founded <br/>on old origins',
        desc: 'Gudhaam Art Cafe - Kozhikode (Calicut), literally breathing new life into age-old cultures.',
        img: './images/product_2.png'
    }, {
        title: 'Making art accessible to all',
        desc: 'Gudhaam is filled with unexpected pieces of art everywhere you look',
        img: './images/collection_2.png'
    }, {
        title: 'Vintage and antique <br/>style accessories',
        desc: 'Sourced from different areas of the country',
        img: './images/collection_3.png'
    },]

    setInterval(() => {
        // Remove the animation class
        $('#land_title').removeClass("land-title-anim");
        $('#land_detail').removeClass("land-detail-anim");
        $('#land_product').removeClass("land-img-anim");


        // Force reflow (this triggers the browser to notice the class removal)
        void $('#land_title h1')[0].offsetWidth; // Accessing offsetWidth triggers reflow

        $('#land_title h1').html(curosal_data[avtiveIndex].title);
        $('#land_detail p').html(curosal_data[avtiveIndex].desc);

        $('#land_product #product').attr('src', curosal_data[avtiveIndex].img);

        // Add the animation class back to re-trigger the animation
        $('#land_title').addClass("land-title-anim");
        $('#land_detail').addClass("land-detail-anim");
        $('#land_product').addClass("land-img-anim");



        // Update the index for the next slide
        avtiveIndex = (avtiveIndex + 1) % curosal_data.length;
        $('.indicators img').eq(avtiveIndex - 1).removeClass('active');
        $('.indicators img').eq(avtiveIndex).addClass('active');




    }, 5000);



});





// Get the navbar element
const navbar = $('.navbar')

// Initialize the last scroll position
let lastScrollY = window.scrollY;

// Function to handle scroll events
const handleScroll = () => {
    navbar.addClass('navbar_hidden');

    // Get the current scroll position
    const currentScrollY = window.scrollY;

    // If scrolling down, hide the navbar
    if (currentScrollY > lastScrollY) {
        navbar.addClass('navbar_hidden');
    } else {
        // If scrolling up, show the navbar
        navbar.removeClass('navbar_hidden');
    }

    // Check if the scroll is beyond 100vh (i.e., the viewport height)
    if (currentScrollY > window.innerHeight) {
        navbar.addClass('navbar_after_scroll');
    } else {
        navbar.removeClass('navbar_after_scroll');

    }


    // Update the last scroll position
    lastScrollY = currentScrollY;
};

// Add the scroll event listener
window.addEventListener('scroll', handleScroll);



if ($('.imageSlide')?.owlCarousel) {

    $('.imageSlide').owlCarousel({
        loop: true,
        margin: 15,
        dots: true,
        nav: true,
        items: 1,
        // responsive:{
        // 0:{
        //     items:2
        // },
        // 600:{
        //     items:3
        // },
        // 1000:{
        //     items:6
        // }
        // }
    })
}



// Radio
// new Audio('https://pagaliworld.com/files/download/type/128/id/7717').play()