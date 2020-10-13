/*global $ */
(function($) {
    "use strict";

    // $(window).on('load', function(){
    //     $('body').addClass('stopScroll');
    //     $('.loader').fadeOut(500, function () {
    //         $(this).remove();
    //         $('body').removeClass('stopScroll');
    //     }); 
    // });

    // OPEN SIDE  MENU 
    $('.menuBtn').on('click', function(){
        $(this).addClass('open');
        $('.navMenu').toggleClass('show');
        $('.bodyOverlay').addClass('show');  
        setTimeout(function(){
            $('body').addClass('stopScroll');
        }, 200); 
    });

    // CLOSE SIDE MENU 
    $('.bodyOverlay').on('click', function(){
        $(this).removeClass('show');
        $('.navMenu').removeClass('show'); 
        $('.menuBtn').removeClass('open'); 
        $('body').removeClass('stopScroll');  
    });

    // //  Open DropDown
    // $('.dropToggle').on('click', function(e){
    //     e.preventDefault();
    //     e.stopPropagation();
    //     if($(this).next('.dropDown').hasClass('open')){
    //         $('.dropDown').removeClass('open');
    //     } else {
    //         $('.dropDown').removeClass('open');
    //         $(this).next('.dropDown').toggleClass('open');
    //     } 
    // });

    //  Close DropDown
    // $(document).on('click', function(){
    //     $('.dropDown').removeClass('open');
    // });

    
    // Header OWL 
    $('.owlHeader').owlCarousel({
        margin: 0,
        autoplay: true,
        loop: true,
        nav: true,
        dots: true,
        center: true,
        autoplaySpeed : 1000,
        autoplayTimeout : 1000,
        smartSpeed: 1000 ,
        navText: ["<i class='icofont-arrow-right'></i>", "<i class='icofont-arrow-left'></i>"],
        responsive: {
            0: {
                items: 1,
                dotsEach: 1
            },
            600: {
                items: 1,
                dotsEach: 1
            },
            1000: {
                items: 1,
                dotsEach: 1
            }
        }
    });

    // Testimonials OWL 
    $('.owlServices').owlCarousel({
        margin: 20,
        autoplay: true,
        loop: false,
        nav: true,
        dots: false,
        center : false ,
        autoplaySpeed : 3000,
        autoplayTimeout : 3000,
        smartSpeed: 3000 ,
        navText: ["<i class='icofont-long-arrow-left'></i>", "<i class='icofont-long-arrow-right'></i>"],
        responsive: {
            0: {
                items: 2
            },
            600: {
                items: 5
            },
            1000: {
                items: 6
            }
        }
    });

    // Partners OWL 
    $('.owlBlogs').owlCarousel({
        margin: 20,
        autoplay: true,
        loop: true,
        nav: false,
        dots: true,
        center : false ,
        autoplaySpeed : 5000,
        autoplayTimeout : 5000,
        smartSpeed: 5000 ,
        navText: ["<i class='icofont-thin-right'></i>", "<i class='icofont-thin-left'></i>"],
        responsive: {
            0: {
                items: 1,
                dotsEach: 1
            },
            600: {
                items: 2,
                dotsEach: 1
            },
            1000: {
                items: 3,
                dotsEach: 1
            }
        }
    });

    // Clients OWL 
    $('.owlClients').owlCarousel({
        margin: 20,
        autoplay: true,
        loop: true,
        nav: false,
        dots: false,
        center : false ,
        autoplaySpeed : 5000,
        autoplayTimeout : 5000,
        smartSpeed: 5000 ,
        navText: ["<i class='icofont-thin-right'></i>", "<i class='icofont-thin-left'></i>"],
        responsive: {
            0: {
                items: 2
            },
            600: {
                items: 4
            },
            1000: {
                items: 5
            }
        }
    });

    // Play Video
    $('#playVideo').on('click' , function(){
        let video = document.getElementById('video');
        $(this).parent().hide();
        video.play();
    });

    // SCROLL DOWN 
    $('.scrollDown').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({ 
            scrollTop: $($(this).attr('href')).offset().top
        }, 1000, 'linear');
    });

    // SCROLL TO TOP
    $('.scrollUp').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop:0
        }, 3000, 'linear');
    });

    // // Sticky Social Share
    let shareOffset = $('.share').offset().top - 100;
    $(window).scroll(function(){
        console.log($('.share').offset().top)
        if ($(window).scrollTop() > shareOffset){
            $('.share').addClass('sticky');
        } else {
            $('.share').removeClass('sticky');
        }
    });

    // Sticky Side List
    $(window).scroll(function(){
        if ($(window).scrollTop() > $('.sideList').offset().top - 100 ){
            $('.sideList').addClass('sticky');
        } else {
            $('.sideList').removeClass('sticky');
        }
    });


    // SHOW SIDE MENU 
    $('.showSide').on('click', function(e) {
        $('.sideList').toggleClass('open');
    });

    

    // // Upload File 
    // $('.uploadFile').on('change', function(e) {
    //     let fileName = e.target.value.split( '\\' ).pop();
    //     console.log(fileName);
    //     let files = $(this).parent('.uploadBox').prev('.uploadedFiles');
    //     files.append(
    //         '<div class="file">' +
    //             '<h3 class="fileName">' + fileName  + '</h3>' +
    //             '<span class="deleteFile"> <i class="icofont-ui-delete"></i> </span>' +
    //         '</div>'
    //     );               
    // });

    // // Delete File
    // $(document).on('click','.deleteFile' , function(){
    //     $(this).parent('.file').remove();
    // });

    // iniat WOW Js
    new WOW().init();
   
})(jQuery);

