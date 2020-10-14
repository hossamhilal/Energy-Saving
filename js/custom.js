/*global $ */
(function($) {
    "use strict";

    var rtlVal = false ;

    $(window).on('load', function(){
        $('body').addClass('stopScroll');
        $('.loader').fadeOut(500, function () {
            $(this).remove();
            $('body').removeClass('stopScroll');
        });  
    });

    if($('body').hasClass('ar')) {
        rtlVal = true;
        console.log(rtlVal)
    }
    else{
        rtlVal = false;
        console.log(rtlVal)
    }

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
    
    // Header OWL 
    $('.owlHeader').owlCarousel({
        rtl: rtlVal ,
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
        rtl: rtlVal ,
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
            425: {
                items: 3
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
        rtl: rtlVal ,
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
        rtl: rtlVal ,
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
        if ($(window).scrollTop() > shareOffset){
            $('.share').addClass('sticky');
        } else {
            $('.share').removeClass('sticky');
        }
    });

    // Sticky Side List
    let sideOffset = $('.sideList').offset().top - 100;
    $(window).scroll(function(){
        if ($(window).scrollTop() > sideOffset ){
            $('.sideList').addClass('sticky');
        } else {
            $('.sideList').removeClass('sticky');
        }
    });

    // SHOW SIDE MENU 
    $('.showSide').on('click', function(e) {
        $('.sideList').toggleClass('open');
    });

    // close Modal
    $('.modal').on('click', function(e) {
        $(this).modal('hide')
    });

    $('.modal-dialog').on('click', function(e) {
        e.stopPropagation();
    });

    // INPUT FOCUS ANIMATION 
    $('.form-control').focus(function(){
        $(this).parent('.field').addClass('animated');
    });

    $('.form-control').each(function() { 
        if ($(this).val() != "") {
            $(this).parent('.field').addClass('animated');   
        }
    });

    $('.form-control').focusout(function(){
        if($(this).val() === "")
        $(this).parent('.field').removeClass('animated');
    });


    // Upload File 
    $('.file').on('change', function(e) {
        var filename = e.target.files[0].name;
        console.log('filename' , filename)
        let fileName = e.target.value.split( '\\' ).pop();
        console.log('fileName' , fileName);
        let files = $(this).parent('.uploadFile').next('.fileNames');
        files.append(
            '<div class="file">' +
                '<h3 class="fileName">' + filename  + '</h3>' +
                '<span class="deleteFile"> <i class="icofont-ui-delete"></i> </span>' +
            '</div>'
        );               
    });

    // Delete File
    $(document).on('click','.deleteFile' , function(){
        $(this).parent('.file').remove();
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

