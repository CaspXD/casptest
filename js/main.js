/* -------------------------------------------

	Name: 		App ollo
	Author:		"Miller Digital Design" Nazar Miller
    Support:    miller.themes@gmail.com
	   		   
--------------------------------------------- */

$(function () {

    "use strict";

    //preloader
    $(window).on("load", function () {
        $('.preloader').delay(500).fadeOut('slow');
    });

    //add section class
    $("#header-1").addClass("header-1")
    $("#header-2").addClass("header-2")
    $("#header-carousel").addClass("header-carousel")
    $("#start").addClass("start")
    $("#about").addClass("about")
    $("#video").addClass("video")
    $("#features").addClass("features")
    $("#screenshots").addClass("screenshots")
    $("#download").addClass("download")
    $("#reviews").addClass("reviews")
    $("#team").addClass("team")
    $("#stats").addClass("stats")
    $("#price").addClass("price")
    $("#faq").addClass("faq")
    $("#blog").addClass("blog")
    
    //typed animation text
    $('[data-typer-targets]').typer();
    $.typer.options.clearOnHighlight=false;
    
    //navigation scrollspy
    var lastId,
        topMenu = $("#navigation"),
        topMenuHeight = topMenu.outerHeight() - 60,
        menuItems = topMenu.find("a"),
        scrollItems = menuItems.map(function () {
            var item = $($(this).attr("href"));
            if (item.length) {
                return item;
            }
        });

    menuItems.on("click", function (e) {
        var href = $(this).attr("href"),
            offsetTop = href === "#" ? 0 : $(href).offset().top - topMenuHeight + 1;
        //scrollspy smooth scroll. default speed: 1200
        $('html, body').stop().animate({
            scrollTop: offsetTop
        }, 1200);
        e.preventDefault();
    });

    $(window).on("scroll", function () {
        var fromTop = $(this).scrollTop() + topMenuHeight;
        var cur = scrollItems.map(function () {
            if ($(this).offset().top < fromTop)
                return this;
        });
        cur = cur[cur.length - 1];
        var id = cur && cur.length ? cur[0].id : "";
        if (lastId !== id) {
            lastId = id;
            menuItems
                .parent().removeClass("active")
                .end().filter("[href='#" + id + "']").parent().addClass("active");
        }

        //navbar color after scroll
        if ($(this).scrollTop() > 100) {
            $('.navbar').addClass("scrolled");
            $('.navbar').removeClass("no-scrolled");
        } else {
            $('.navbar').removeClass("scrolled");
            $('.navbar').addClass("no-scrolled");
        }
    });

    // burger menu button
    $(window).on("click", function () {
        $(".burger-menu").toggleClass("menu-on");
    });

    // wow
    new WOW().init();

    // counterup
    $('.counter').counterUp({
        delay: 10,
        time: 2000
    });

    // header slider
    $("#header-carousel").owlCarousel({
        loop: true,
        mouseDrag: false,
        touchDrag: false,
        nav: true,
        navSpeed: 100,
        autoplay: true,
        autoplayTimeout: 10000,
        dots: false,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        navText: ['<i class="fa fa-chevron-left" aria-hidden="true"></i>', '<i class="fa fa-chevron-right" aria-hidden="true"></i>'],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })

    // header screenshots slider
    $('.header-slider').owlCarousel({
        animateOut: 'fadeOut',
        mouseDrag: false,
        dots: true,
        loop: true,
        navText: [''],
        dots: false,
        items: 1,
        autoplay: true,
        smartSpeed: 450
    });

    //screenshots slider
    $('.screenshots-slider').owlCarousel({
        center: true,
        items: 2,
        loop: true,
        navSpeed: 900,
        nav: false,
        dots: true,
        dotsSpeed: 900,
        navText: ['', ''],
        navText: ['<i class="fa fa-arrow-circle-left" aria-hidden="true"></i>', '<i class="fa fa-arrow-circle-right" aria-hidden="true"></i>'],
        responsive: {
            375: {
                items: 2,
                navText: ['<i class="fa fa-arrow-circle-left" aria-hidden="true"></i>', '<i class="fa fa-arrow-circle-right" aria-hidden="true"></i>'],
            },
            768: {
                items: 4,
                navText: ['<i class="fa fa-arrow-circle-left" aria-hidden="true"></i>', '<i class="fa fa-arrow-circle-right" aria-hidden="true"></i>'],
            },
            992: {
                items: 6,
                navText: ['<i class="fa fa-arrow-circle-left" aria-hidden="true"></i>', '<i class="fa fa-arrow-circle-right" aria-hidden="true"></i>'],
            },
            1200: {
                items: 6,
                navText: ['<i class="fa fa-arrow-circle-left" aria-hidden="true"></i>', '<i class="fa fa-arrow-circle-right" aria-hidden="true"></i>'],
            }
        }
    });

    //reviews-slider
    $('.reviews-slider').owlCarousel({
        center: true,
        items: 1,
        loop: true,
        navSpeed: 900,
        dots: true,
        dotsSpeed: 900,
        navText: ['', ''],
        navText: ['<i class="fa fa-arrow-circle-left" aria-hidden="true"></i>', '<i class="fa fa-arrow-circle-right" aria-hidden="true"></i>'],
        responsive: {
            375: {
                items: 1,
                navText: ['<i class="fa fa-arrow-circle-left" aria-hidden="true"></i>', '<i class="fa fa-arrow-circle-right" aria-hidden="true"></i>'],
            },
            550: {
                items: 2,
                navText: ['<i class="fa fa-arrow-circle-left" aria-hidden="true"></i>', '<i class="fa fa-arrow-circle-right" aria-hidden="true"></i>'],
            },
            992: {
                items: 4,
                navText: ['<i class="fa fa-arrow-circle-left" aria-hidden="true"></i>', '<i class="fa fa-arrow-circle-right" aria-hidden="true"></i>'],
            }
        }
    });

});