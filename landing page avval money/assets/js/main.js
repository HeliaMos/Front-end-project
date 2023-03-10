/**
 * Template Name: Moderna - v2.0.1
 * Template URL: https://bootstrapmade.com/free-bootstrap-template-corporate-moderna/
 * Author: BootstrapMade.com
 * License: https://bootstrapmade.com/license/
 */
!(function($) {
    "use strict";

    // Toggle .header-scrolled class to #header when page is scrolled
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('#header').addClass('header-scrolled');
        } else {
            $('#header').removeClass('header-scrolled');
        }
    });

    if ($(window).scrollTop() > 100) {
        $('#header').addClass('header-scrolled');
    }

    // Smooth scroll for the navigation menu and links with .scrollto classes
    $(document).on('click', '.nav-menu a, .mobile-nav a, .scrollto', function(e) {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            e.preventDefault();
            var target = $(this.hash);
            if (target.length) {

                var scrollto = target.offset().top;
                var scrolled = 20;

                if ($('#header').length) {
                    scrollto -= $('#header').outerHeight()

                    if (!$('#header').hasClass('header-scrolled')) {
                        scrollto += scrolled;
                    }
                }

                if ($(this).attr("href") == '#header') {
                    scrollto = 0;
                }

                $('html, body').animate({
                    scrollTop: scrollto
                }, 1500, 'easeInOutExpo');

                if ($(this).parents('.nav-menu, .mobile-nav').length) {
                    $('.nav-menu .active, .mobile-nav .active').removeClass('active');
                    $(this).closest('li').addClass('active');
                }

                if ($('body').hasClass('mobile-nav-active')) {
                    $('body').removeClass('mobile-nav-active');
                    $('.mobile-nav-toggle i').toggleClass('bx-menu bx-x');
                    $('.mobile-nav-overly').fadeOut();
                }
                return false;
            }
        }
    });

    // Mobile Navigation
    if ($('.nav-menu').length) {
        var $mobile_nav = $('.nav-menu').clone().prop({
            class: 'mobile-nav d-lg-none'
        });
        $('body').append($mobile_nav);
        $('body').prepend('<button type="button" class="mobile-nav-toggle d-lg-none"><i class="bx bx-menu"></i></button>');
        $('body').append('<div class="mobile-nav-overly"></div>');

        $(document).on('click', '.mobile-nav-toggle', function(e) {
            $('body').toggleClass('mobile-nav-active');
            $('.mobile-nav-toggle i').toggleClass('bx-menu bx-x');
            $('.mobile-nav-overly').toggle();
        });

        $(document).on('click', '.mobile-nav .drop-down > a', function(e) {
            e.preventDefault();
            $(this).next().slideToggle(300);
            $(this).parent().toggleClass('active');
        });

        $(document).click(function(e) {
            var container = $(".mobile-nav, .mobile-nav-toggle");
            if (!container.is(e.target) && container.has(e.target).length === 0) {
                if ($('body').hasClass('mobile-nav-active')) {
                    $('body').removeClass('mobile-nav-active');
                    $('.mobile-nav-toggle i').toggleClass('bx-menu bx-x');
                    $('.mobile-nav-overly').fadeOut();
                }
            }
        });
    } else if ($(".mobile-nav, .mobile-nav-toggle").length) {
        $(".mobile-nav, .mobile-nav-toggle").hide();
    }
    // Real view height for mobile devices
    if (window.matchMedia("(max-width: 767px)").matches) {
        $('#hero').css({
            height: $(window).height()
        });
    }

    // Intro carousel
    var heroCarousel = $("#heroCarousel");

    heroCarousel.on('slid.bs.carousel', function(e) {
        $(this).find('h2').addClass('animated fadeInDown');
        $(this).find('p').addClass('animated fadeInUp');
        $(this).find('.btn-get-started').addClass('animated fadeInUp');
    });
    // Back to top button
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });

    $('.back-to-top').click(function() {
        $('html, body').animate({
            scrollTop: 0
        }, 1500, 'easeInOutExpo');
        return false;
    });

    // Initiate the venobox plugin
    $(window).on('load', function() {
        $('.venobox').venobox();
    });

    // jQuery counterUp
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 1000
    });

    // Skills section
    $('.skills-content').waypoint(function() {
        $('.progress .progress-bar').each(function() {
            $(this).css("width", $(this).attr("aria-valuenow") + '%');
        });
    }, {
        offset: '80%'
    });

    // Testimonials carousel (uses the Owl Carousel library)
    $(".testimonials-carousel").owlCarousel({
        autoplay: true,
        dots: true,
        loop: true,
        items: 1
    });

    // Porfolio isotope and filter
    $(window).on('load', function() {
        var portfolioIsotope = $('.portfolio-container').isotope({
            layoutMode: 'fitRows'
        });

        $('#portfolio-flters li').on('click', function() {
            $("#portfolio-flters li").removeClass('filter-active');
            $(this).addClass('filter-active');

            portfolioIsotope.isotope({
                filter: $(this).data('filter')
            });
        });

    });

    // Initi AOS
    AOS.init({
        duration: 1000,
        easing: "ease-in-out-back"
    });

})(jQuery);



/*.......*/
/*????????*/

//?????????? ?????? ?????????? ???? ??????????????

$(document).ready(function() {



    //???? ???????? ?????? ?????? ?????? ???? ???? ?????????? ???????????? ???????? ???????????? ?????? ???? ??????
    $("#check").click(function() {

        if ($(this).is(':checked')) {
            //$(this).prop('checked',false);
            $("#btn-signIn").removeAttr("disabled");
            $("#btn-signIn").css("background-color", "rgb(82, 161, 118)");
            $("#btn-signIn").css("border", "none");
        } else {
            //$(this).prop('checked',true);
            $("#btn-signIn").attr('disabled', 'disabled');
            $("#btn-signIn").css("background-color", "rgb(185, 207, 192)");
        }
    });

    //?????????? ???????? ???????? ???????? ???? ???????????? ???? ????????????
    jQuery('.inputCalc').keyup(function() {
        this.value = this.value.replace(/[^0-9\.]/g, '');
    });


    //?????????? ?????????? ?????????? ???? ??????????????
    function replaceNumber(numbers) {
        numbers = numbers.replace(/??/g, '1');
        numbers = numbers.replace(/??/g, '2');
        numbers = numbers.replace(/??/g, '3');
        numbers = numbers.replace(/??/g, '4');
        numbers = numbers.replace(/??/g, '5');
        numbers = numbers.replace(/??/g, '6');
        numbers = numbers.replace(/??/g, '7');
        numbers = numbers.replace(/??/g, '8');
        numbers = numbers.replace(/??/g, '9');
        numbers = numbers.replace(/??/g, '0');
        return numbers;
    }
    //?????? ???????? ?????????? 
    function separate(Number) {
        Number += '';
        Number = Number.replace(',', '');
        x = Number.split('.');
        y = x[0];
        z = x.length > 1 ? '.' + x[1] : '';
        var rgx = /(\d+)(\d{3})/;
        while (rgx.test(y))
            y = y.replace(rgx, '$1' + ',' + '$2');
        return y + z;
    }
    //?????????? ???????? ??????????
    function truncateDecimals(num, digits) {
        debugger;
        var numS = num.toString(),
            decPos = numS.indexOf('.'),
            substrLength = decPos == -1 ? numS.length : 1 + decPos + digits,
            trimmedResult = numS.substr(0, substrLength),
            finalResult = isNaN(trimmedResult) ? 0 : trimmedResult;
        return parseFloat(finalResult);
    }
    //?????????? ???????? ?????????? ???????????????? ??????
    function fix(number) {
        return parseFloat(number).toFixed(6);
    }
    //?????????? ???????? ?????????? ???????????????? ?????????? ????????
    function fixed(number) {
        return parseFloat(number).toFixed(2);
    }


    //???????? ???????? ?? ???????????? ???? ???????? ???????? ???????? ?? ?????????? ???? ???????? ???????? ???? ?????? ???????? ???????? ?? ????????
    $("#btnBuy-Perfectmoney").click(function() {

        $("#PriceBuy-Perfectmoney").css("color", "rgb(82, 236, 68)");
        $("#PriceSell-Perfectmoney").css("color", "rgb(226, 226, 226)");
        $("#btnSell-Perfectmoney").css("background-color", "rgb(202, 202, 202)");
        $("#btnBuy-Perfectmoney").css("background-color", "rgb(17, 119, 63)");
        $("#btnBuy-Perfectmoney").addClass("active");
        $("#btnSell-Perfectmoney").removeClass("active");
        $("#txt-pricePerfectmoney").removeAttr("disabled");

        var count = $('#txt-countPerfectmoney').val();
        if ($.isNumeric(replaceNumber(count)) || count == '') {
            if (count == '') {
                $('#txt-pricePerfectmoney').val('');
                $('#txt-countPerfectmoney').val('');
            } else {
                var a = ($('#PriceBuy-Perfectmoney').text());
                var b = parseFloat(replaceNumber(count)) * parseInt(replaceNumber(a));
                $('#txt-pricePerfectmoney').val(separate(parseInt(b)));
                $('#txt-countPerfectmoney').val(replaceNumber(count));
            }
        }

    });
    //???????? ???????? ?? ???????????? ???? ???????? ???????? ???????? ?? ?????????? ???? ???????? ???????? ???? ?????? ???????? ???????? ?? ????????


    $("#btnSell-Perfectmoney").click(function() {

        $("#PriceBuy-Perfectmoney").css("color", "rgb(226, 226, 226)");
        $("#PriceSell-Perfectmoney").css("color", "rgb(82, 236, 68)");
        $("#btnSell-Perfectmoney").css("background-color", "rgb(17, 119, 63)");
        $("#btnBuy-Perfectmoney").css("background-color", "rgb(202, 202, 202)");
        $("#btnSell-Perfectmoney").toggleClass('sell');
        $("#btnSell-Perfectmoney").addClass("active")
        $("#btnBuy-Perfectmoney").removeClass("active");
        $("#txt-pricePerfectmoney").attr('disabled', 'disabled');

        var count = $('#txt-countPerfectmoney').val();
        if ($.isNumeric(replaceNumber(count)) || count == '') {
            if (count == '') {
                $('#txt-pricePerfectmoney').val('');
                $('#txt-countPerfectmoney').val('');
            } else {
                var a = ($('#PriceSell-Perfectmoney').text());
                var b = parseFloat(replaceNumber(count)) * parseInt(replaceNumber(a));
                $('#txt-pricePerfectmoney').val(separate(parseInt(b)));
                $('#txt-countPerfectmoney').val(replaceNumber(count));
            }
        }
    });
    //???????????? ???????? ???? ???????? ???????? ?????????? ????????  ???????? ???????? ?? ????????
    $('#txt-countPerfectmoney').keyup(function() {

        //????????
        if ($('#btnBuy-Perfectmoney').hasClass("active")) {
            var count = $('#txt-countPerfectmoney').val();
            if ($.isNumeric(replaceNumber(count)) || count == '') {
                if (count == '') {
                    $('#txt-pricePerfectmoney').val('');
                    $('#txt-countPerfectmoney').val('');
                } else {
                    var a = ($('#PriceBuy-Perfectmoney').text());
                    var b = parseFloat(replaceNumber(count)) * parseInt(replaceNumber(a));
                    $('#txt-pricePerfectmoney').val(separate(parseInt(b)));
                    $('#txt-countPerfectmoney').val(replaceNumber(count));
                }
            }
        }
        //????????
        else {
            var count = $('#txt-countPerfectmoney').val();
            if ($.isNumeric(replaceNumber(count)) || count == '') {
                if (count == '') {
                    $('#txt-pricePerfectmoney').val('');
                    $('#txt-countPerfectmoney').val('');
                } else {
                    var a = ($('#PriceSell-Perfectmoney').text());
                    var b = parseFloat(replaceNumber(count)) * parseInt(replaceNumber(a));
                    $('#txt-pricePerfectmoney').val(separate(parseInt(b)));
                    $('#txt-countPerfectmoney').val(replaceNumber(count));
                }
            }
        }
    });
    //???????????? ?????????? ???????? ???? ???????? ???????? ???????? ???? ???????? ???????? ?? ????????
    $('#txt-pricePerfectmoney').keyup(function() {

        //????????
        if ($('#btnBuy-Perfectmoney').hasClass("active")) {
            var count = $('#txt-pricePerfectmoney').val().replace(/,/g, "");
            if ($.isNumeric(replaceNumber(count)) || count == '') {
                if (count == '') {
                    $('#txt-pricePerfectmoney').val('');
                    $('#txt-countPerfectmoney').val('');
                } else {
                    var a = ($('#PriceBuy-Perfectmoney').text());
                    var b = parseFloat(replaceNumber(count)) / parseInt(replaceNumber(a));
                    $('#txt-countPerfectmoney').val(b);
                    $('#txt-pricePerfectmoney').val(separate(parseInt(count)));
                    $('#txt-countPerfectmoney').val(fixed(b));
                }
            }
        }
        //????????
        else {
            var count = $('#txt-pricePerfectmoney').val().replace(/,/g, "");
            if ($.isNumeric(replaceNumber(count)) || count == '') {
                if (count == '') {
                    $('#txt-pricePerfectmoney').val('');
                    $('#txt-countPerfectmoney').val('');
                } else {
                    var a = ($('#PriceSell-Perfectmoney').text());
                    var b = parseFloat(replaceNumber(count)) / parseInt(replaceNumber(a));
                    $('#txt-countPerfectmoney').val(b);
                    $('#txt-pricePerfectmoney').val(separate(parseInt(count)));
                    $('#txt-countPerfectmoney').val(fixed(b));
                }
            }
        }

    });









    //???????? ???????? ?? ???????????? ???? ???????? ???????? ???????? ?? ?????????? ???? ???????? ???????? ???? ?????? ???????? ???????? ?? ????????
    $("#BtnBuy-Tether").click(function() {
        debugger;
        $("#PriceBuy-Tether").css("color", "rgb(82, 236, 68)");
        $("#PriceSell-Tether").css("color", "rgb(226, 226, 226)");
        $("#BtnSell-Tether").css("background-color", "rgb(202, 202, 202)");
        $("#BtnBuy-Tether").css("background-color", "rgb(17, 119, 63)");
        $("#BtnBuy-Tether").addClass("active");
        $("#BtnSell-Tether").removeClass("active");
        $("#txt-PriceTether").removeAttr("disabled");
        var count = $('#txt-countTether').val();
        if ($.isNumeric(replaceNumber(count)) || count == '') {
            if (count == '') {
                $('#txt-PriceTether').val('');
                $('#txt-countTether').val('');
            } else {
                var a = ($('#PriceBuy-Tether').text());
                var b = parseFloat(replaceNumber(count)) * parseInt(replaceNumber(a));
                $('#txt-PriceTether').val(separate(parseInt(b)));
                $('#txt-countTether').val(replaceNumber(count));
            }
        }

    });
    //???????? ???????? ?? ???????????? ???? ???????? ???????? ???????? ?? ?????????? ???? ???????? ???????? ???? ?????? ???????? ???????? ?? ????????
    $("#BtnSell-Tether").click(function() {
        $("#PriceBuy-Tether").css("color", "rgb(226, 226, 226)");
        $("#PriceSell-Tether").css("color", "rgb(82, 236, 68)");
        $("#BtnSell-Tether").css("background-color", "rgb(17, 119, 63)");
        $("#BtnBuy-Tether").css("background-color", "rgb(202, 202, 202)");
        $("#BtnSell-Tether").addClass("active")
        $("#BtnBuy-Tether").removeClass("active");
        $("#txt-PriceTether").attr('disabled', 'disabled');
        var count = $('#txt-countTether').val();
        if ($.isNumeric(replaceNumber(count)) || count == '') {
            if (count == '') {
                $('#txt-PriceTether').val('');
                $('#txt-countTether').val('');
            } else {
                var a = ($('#PriceSell-Tether').text());
                var b = parseFloat(replaceNumber(count)) * parseInt(replaceNumber(a));
                $('#txt-PriceTether').val(separate(parseInt(b)));
                $('#txt-countTether').val(replaceNumber(count));
            }
        }
    });
    //???????????? ???????? ???? ???????? ???????? ?????????? ??????  ???????? ???????? ?? ????????
    $('#txt-countTether').keyup(function() {

        //????????
        if ($('#BtnBuy-Tether').hasClass("active")) {
            var count = $('#txt-countTether').val();
            if ($.isNumeric(replaceNumber(count)) || count == '') {
                if (count == '') {
                    $('#txt-PriceTether').val('');
                    $('#txt-countTether').val('');
                } else {
                    var a = ($('#PriceBuy-Tether').text());
                    var b = parseFloat(replaceNumber(count)) * parseInt(replaceNumber(a));
                    $('#txt-PriceTether').val(separate(parseInt(b)));
                    $('#txt-countTether').val(replaceNumber(count));
                }
            }
        }
        //????????
        else {
            var count = $('#txt-countTether').val();
            if ($.isNumeric(replaceNumber(count)) || count == '') {
                if (count == '') {
                    $('#txt-PriceTether').val('');
                    $('#txt-countTether').val('');
                } else {
                    var a = ($('#PriceSell-Tether').text());
                    var b = parseFloat(replaceNumber(count)) * parseInt(replaceNumber(a));
                    $('#txt-PriceTether').val(separate(parseInt(b)));
                    $('#txt-countTether').val(replaceNumber(count));
                }
            }
        }
    });
    //???????????? ?????????? ?????? ???? ???????? ???????? ???????? ???? ???????? ???????? ?? ????????
    $('#txt-PriceTether').keyup(function() {

        //????????
        if ($('#BtnBuy-Tether').hasClass("active")) {
            var count = $('#txt-PriceTether').val().replace(/,/g, "");
            if ($.isNumeric(replaceNumber(count)) || count == '') {
                if (count == '') {
                    $('#txt-PriceTether').val('');
                    $('#txt-countTether').val('');
                } else {
                    var a = ($('#PriceBuy-Tether').text());
                    var b = parseFloat(replaceNumber(count)) / parseInt(replaceNumber(a));
                    $('#txt-countTether').val(b);
                    $('#txt-PriceTether').val(separate(parseInt(count)));
                    $('#txt-countTether').val(fix(b));


                }
            }
        }
        //????????
        else {
            var count = $('#txt-PriceTether').val().replace(/,/g, "");
            if ($.isNumeric(replaceNumber(count)) || count == '') {
                if (count == '') {
                    $('#txt-PriceTether').val('');
                    $('#txt-countTether').val('');
                } else {
                    var a = ($('#PriceSell-Tether').text());
                    var b = parseFloat(replaceNumber(count)) / parseInt(replaceNumber(a));
                    $('#txt-countTether').val(b);
                    $('#txt-PriceTether').val(separate(parseInt(count)));
                    $('#txt-countTether').val(fix(b));
                }
            }
        }

    });

});