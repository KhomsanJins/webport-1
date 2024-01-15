jQuery(document).ready(function ($) {

    // toggle menu
    $('#open-menu').click(function (e) {
        e.stopPropagation();
        // console.log("click")
        $('.menu-mobile').addClass('open');
    });
    $('#close-icon').click(function (e) {
        e.stopPropagation();
        // console.log("click")
        $('.menu-mobile').removeClass('open');
    });

    // Mian Slide
    $('#main-slide').lightSlider({
        item: 1,
        loop: true,
        auto: true,
        slideMove: 1,
        // mode: 'fade',
        pause: 5000,
        slideMargin: 0,
        enableDrag: true,
        enableTouch: true,
        pauseOnHover: true,
        easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
        speed: 1000,
        responsive: [{
                breakpoint: 800,
                settings: {
                    item: 1,
                    slideMove: 1,
                    slideMargin: 0,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    item: 1,
                    slideMove: 1,
                }
            }
        ]
    });

    // Digital Agency Slide
    $('#digitalagency-slide').lightSlider({
        item: 5,
        loop: true,
        auto: true,
        slideMove: 1,
        // mode: 'fade',
        pause: 5000,
        slideMargin: 0,
        enableDrag: true,
        enableTouch: true,
        pauseOnHover: true,
        easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
        speed: 1000,
        responsive: [{
                breakpoint: 800,
                settings: {
                    item: 3,
                    slideMove: 1,
                    slideMargin: 0,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    item: 1,
                    slideMove: 1,
                }
            }
        ]
    }); 
});

// Shrinking navbar
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").style.padding = "10px 0px";
    document.getElementById("navbar").style.backgroundColor = "#CC504C";
    document.getElementById("logo").style.width = "50px";

    document.getElementById("navbar-m").style.padding = "10px 0px";
    document.getElementById("logo-m").style.width = "30px";
  } else {
    document.getElementById("navbar").style.padding = "15px 0px";
    document.getElementById("navbar").style.backgroundColor = "rgba(0, 0, 0, 0.15)";
    document.getElementById("logo").style.width = "70px";

    document.getElementById("navbar-m").style.padding = "15px 0px";
    document.getElementById("logo-m").style.width = "40px";
  }
}

// ===== Scroll to Top ==== 
$(window).scroll(function() {
    if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
        $('#return-to-top').fadeIn(200);    // Fade in the arrow
    } else {
        $('#return-to-top').fadeOut(200);   // Else fade out the arrow
    }
});
$('#return-to-top').click(function() {      // When arrow is clicked
    $('body,html').animate({
        scrollTop : 0                       // Scroll to top of body
    }, 500);
});