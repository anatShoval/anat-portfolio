/* JavaScript Document */

$(document).ready(function () {

    let mySkills = $('div.sSkills > p').height() + 45;
    let circleHight = $('.allCircles').width();

    $('.allCircles').css('height', circleHight + 'px');

    $('a.mobile_menu_skills').css('margin-top', mySkills + 'px');
    $('nav a.mobile_menu').on('click', function () {

        let currentNavHeight = $('nav').height();

        if (currentNavHeight < 5) {
            let newNavHight = $('nav > ul').height() + 15;
            $('nav').animate({ 'height': newNavHight + 'px'},750);
        }else{
            $('nav').animate({ 'height': '0px' }, 750, function () {
                $(this).removeAttr('style');
            });
        }

    });
    $(window).resize(function () {
        circleHight = $('.allCircles').width();
        $('.allCircles').css('height', circleHight + 'px');
        if ($(this).width() > 625) {
            $('nav').removeAttr('style');
            $('a.mobile_menu_skills').css('margin-top', mySkills + 'px');
        }
    })

    $('.mobile_menu_skills').on('click', function () {
        let currentskillsHeight = $('.SoftwareSkills').height();
        mySkills = $('div.sSkills > p').height() + 45;
        let newskillsHight = $('div.SoftwareSkills > ul').height() + 250;

        if (currentskillsHeight < 5) {    
            $('.SoftwareSkills').animate({ 'height': newskillsHight + 'px' }, 950);
            $('.mobile_menu_skills img').attr("src", "images/LessIcon.png"); //css('background', 'url(../images/LessIcon.png) no-repeat 0 0');
            //$('.mobile_menu_skills img:hover').attr("src", "images/LessIconH.png");//.css('background', 'url(../images/LessIconH.png) no-repeat 0 0');
            $('a.mobile_menu_skills').css('margin-top', (newskillsHight+190)+'px');
        }
        else {
            $('.SoftwareSkills').animate({ 'height': '0px' }, 950, function () {
                $(this).removeAttr('style');

                $('.mobile_menu_skills img').attr("src", "images/MoreIcon.png");//css('background', 'url(../images/MoreIcon.png) no-repeat 0 0');
                //$('.mobile_menu_skills img:hover').attr("src", "images/MoreIconH.png");
                $('a.mobile_menu_skills').css('margin-top', mySkills + 'px');
            });
        }

    });

    $('.mobile_menu_skills img').mouseover(function () {
        let currentskillsHeight = $('.SoftwareSkills').height();

        if (currentskillsHeight < 5) {
            $('.mobile_menu_skills img:hover').attr("src", "images/MoreIconH.png");
        }
        else {
            $('.mobile_menu_skills img:hover').attr("src", "images/LessIconH.png");
        }
    });
    $('.mobile_menu_skills img').mouseout(function () {
        let currentskillsHeight = $('.SoftwareSkills').height();

        if (currentskillsHeight < 5) {
            $('.mobile_menu_skills img').attr("src", "images/MoreIcon.png");
        }
        else {
            $('.mobile_menu_skills img').attr("src", "images/LessIcon.png");
            
        }
    });

    $(window).resize(function () {

        if ($(this).width() > 625) {
            $('.SoftwareSkills').removeAttr('style');
        }
    })
});

var slideIndex = 1;
//video
function pageLoad() {
    slideIndex = 1;
    showSlides(slideIndex);
}
function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}