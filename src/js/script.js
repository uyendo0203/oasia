function isValidForm(form) {
    isValid = true;

    var REX_IS_NUMBER = new RegExp('^[0-9]*$');
    var REX_LOWERCASE = new RegExp('(?=.*[a-z])');
    var REX_UPPERCASE = new RegExp('(?=.*[A-Z])');
    var REX_NUMBER = new RegExp('(?=.*[0-9])');
    var REX_SPECIAL = new RegExp('(?=.[!@#\$%\^&])');
    var REX_INTERGER = new RegExp('^[0-9]*$');
    var REX_PHONE = new RegExp('^(0|84)[0-9]*$');
    var REX_EMAIL = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    var REX_URL = new RegExp(/^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!10(?:\.\d{1,3}){3})(?!127(?:\.​\d{1,3}){3})(?!169\.254(?:\.\d{1,3}){2})(?!192\.168(?:\.\d{1,3}){2})(?!172\.(?:1[​6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1​,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00​a1-\uffff0-9]+-?)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]+-?)*[a-z\u​00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/[^\s]*)?$/i);

    form.forEach(function (input) {
        var value = $(input.name).val();
        input.validators.forEach(function (validator) {
            switch (validator) {
                case 'required':
                    if (value === '') {
                        isValid = false;
                    }
                    break;
                case 'isNumber':
                    if (REX_IS_NUMBER.test(value) === false) {
                        isValid = false;
                    }
                    break;
                case 'min':
                    if (+value < input.min) {
                        isValid = false;
                    }
                    break;
                case 'max':
                    if (+value > input.max) {
                        isValid = false;
                    }
                    break;
                case 'minLength':
                    if (value.length < input.minLength) {
                        isValid = false;
                    }
                    break;
                case 'maxLength':
                    if (value.length > input.maxLength) {
                        isValid = false;
                    }
                    break;
                case 'email':
                    if (REX_EMAIL.test(value) === false) {
                        isValid = false;
                    }
                    break;
            }
        });
    });

    return isValid;
}
function validateForm($submit, form) {

    function updateView() {
        $($submit).attr("disabled", !isValidForm(form));
    }

    var arrElement = [];
    form.forEach(function (element) {
        arrElement.push(element.name);
    });

    $(arrElement.join(",")).on("change keyup", function () {
        updateView();
    });
    updateView();
}
$(window).on("load", function () {

    new WOW().init();
    $('.loading').removeClass('active')
    Menu()
    OpenMenu()
    CloseMenu()

    Block1ValidateForm()
    Block7ValidateForm()
    PopupValidateForm()

    block4Slider()
    block5Slider()
    block6Slider()
    block7Slider()

    /*block 03*/
    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 5,
        loop: true,
        autoplay: false,
        centeredSlides: true,
        navigation: {
            nextEl: '.swiper-next',
            prevEl: '.swiper-prev',
        },
        breakpoints: {
            767: {
                slidesPerView: 1,

            }
        },
        on: {
            init: function (slide) {
                /* do something */
                // console.log('slide-init', swiper);
                $('.swiper-slide-next').next(1).addClass('swiper-slide-next-next')
            },
            slideChange: function (slide) {
                /* do something */
                // console.log('slide-changed', swiper);
                let current
                if (swiper) {
                    if (swiper.realIndex) {
                        current = swiper.realIndex + 1
                    }
                    if (swiper.realIndex == 0) {
                        current = 1
                    }
                    $('.block3__list-text .text').removeClass('active')
                    $('.block3__list-text-' + current).addClass('active')

                    $('.swiper-slide-next').next(1).addClass('swiper-slide-next-next')
                    $('.swiper-slide-prev').next(1).addClass('swiper-slide-next-next')
                    $('.swiper-slide-prev').next(-1).removeClass('swiper-slide-next-next')
                    $('.swiper-slide-next').nextAll().removeClass('swiper-slide-next-next')

                    $('.swiper-slide-prev').prev(-1).addClass('swiper-slide-prev-prev')

                    setTimeout(() => {
                        if ($('.swiper-slide-next').hasClass('swiper-slide-next-next')) {
                            $('.swiper-slide-next').removeClass('swiper-slide-next-next')
                        } else {
                            $('.swiper-slide-next').next(1).addClass('swiper-slide-next-next')
                        }

                        if ($('.swiper-slide-prev').hasClass('swiper-slide-next-next')) {
                            $('.swiper-slide-prev').removeClass('swiper-slide-next-next')
                            $('.swiper-slide-prev').next(1).addClass('swiper-slide-next-next')
                        }


                    }, 100);

                }
            },
        }
    });

    $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
        $('.block4__slider-js').slick('resize');
        $('.block6-slider-1-js').slick('resize');
        $('.block6-slider-2-js').slick('resize');
    })

    $(".block4__slider--wrap .nav.nav-tabs").on("toggled", function (event, tab) {
        $('.block4__slider-js').slick('resize');
    });

});

$(window).scroll(function () {
    $(window).scrollTop() >= 145
        ? $('.menu__logo').addClass('scroll')
        : $('.menu__logo').removeClass('scroll');
});

$(window).on("resize", function () {

});

function goToByScroll(echo) {
    let space = 70
    switch (echo) {
        case 'udvt':
            space = -70
            break;
        default:
            space = 0
            break;
    }

    $('html,body').animate({
        scrollTop: $("#" + echo).offset().top + space,
    }, 'slow');
}

let Menu = function () {
    $('.menu__absolute a').click(function (e) {
        e.preventDefault();

        let link = $(this).attr('link')

        $('.menu__absolute a').removeClass('active');
        $('.menu__absolute a[link="' + link + '"]').addClass('active');


        if (link != '' && link != undefined) {
            goToByScroll(link);
        }
    })
}

let OpenMenu = function () {
    $('.menu__text_toggle').click(function () {
        if ($(this).hasClass('active')) {
            $(this).removeClass('active')
            $('.menu__absolute').removeClass('active')
        } else {
            $(this).addClass('active')
            $('.menu__absolute').addClass('active')
        }
    })
}

let CloseMenu = function () {
    $('.menu__toggle_close').click(function () {
        $('.menu__text_toggle').removeClass('active')
        if ($('.menu__absolute').hasClass('active')) {
            $('.menu__absolute').removeClass('active')
        } else {
            $('.menu__absolute').addClass('active')
        }
    })
}

let Block1ValidateForm = function () {
    var form = [{
        name: '.block1Name',
        validators: ['required']
    }, {
        name: '.block1Phone',
        validators: ['required', 'minLength', 'maxLength'],
        minLength: 10,
        maxLength: 10,
    }, {
        name: '.block1Email',
        validators: ['required', 'email']
    }, {
        name: '.block1Note',
        validators: []
    }]
    var $submit = ".block1 .form__submit";
    validateForm($submit, form);
}

let Block7ValidateForm = function () {
    var form = [{
        name: '.block7Name',
        validators: ['required']
    }, {
        name: '.block7Phone',
        validators: ['required', 'minLength', 'maxLength'],
        minLength: 10,
        maxLength: 10,
    }, {
        name: '.block7Email',
        validators: ['required', 'email']
    }, {
        name: '.block7Note',
        validators: []
    }]
    var $submit = ".block8__contact .form__submit";
    validateForm($submit, form);
}

let PopupValidateForm = function () {
    var form = [{
        name: '.PopupName',
        validators: ['required']
    }, {
        name: '.PopupPhone',
        validators: ['required', 'minLength', 'maxLength'],
        minLength: 10,
        maxLength: 10,
    }, {
        name: '.PopupEmail',
        validators: ['required', 'email']
    }, {
        name: '.PopupNote',
        validators: []
    }]
    var $submit = ".popup__button .form__submit";
    validateForm($submit, form);
}

let block4Slider = function () {
    $('.block4__slider-js').slick({
        autoplay: true,
        arrow: true,
        dots: false,
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '.block4__slider--arrow .slick-prev',
        nextArrow: '.block4__slider--arrow .slick-next',
    });
}
let block5Slider = function () {
    $('#block5__slider').slick({
        autoplay: true,
        arrow: true,
        dots: false,
        loop: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '.block5__slider--arrow .slick-prev',
        nextArrow: '.block5__slider--arrow .slick-next',
    });
}
let block6Slider = function () {

    let numberActive = function (currentSlide) {
        let number = 0;
        if (currentSlide < 9) {
            number = '0' + (currentSlide + 1)
        } else {
            number = currentSlide + 1
        }
        $('.block6__slider1--arrow .slick-number').html(number)
    }

    // init and hide number < 1 
    $('.block6-slider-1-js').on('init', function (event, slick) {
        if (slick.slideCount == 1) {
            $('.block6__slider1--arrow .slick-number').hide()
        } else {
            $('.block6__slider1--arrow .slick-number').show()
        }
    });

    $('.block6-slider-1-js').slick({
        autoplay: true,
        arrow: true,
        dots: false,
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '.block6__slider1--arrow .slick-prev',
        nextArrow: '.block6__slider1--arrow .slick-next',
    }).on('afterChange', function (event, slick) {
        numberActive(slick.currentSlide)
    });

    $('.block6-slider-2-js').slick({
        autoplay: true,
        arrow: true,
        dots: true,
        fade: true,
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: '<button type="button" class="slick-arrow slick-next">Next</button>',
    });
}
let block7Slider = function () {
    $('#block7__slider--for').slick({
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '#block7__slider--nav'
    });
    $('#block7__slider--nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '#block7__slider--for',
        dots: false,
        infinite: true,
        arrows: true,
        autoplay: true,
        focusOnSelect: true,
        prevArrow: '.block7__slider .slick-prev',
        nextArrow: '.block7__slider .slick-next',
        responsive: [
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                }
            },
        ]
    }).on('afterChange', function (event, slick) {
        $('.block7__title-slide-item').removeClass('active')
        $('.block7__slider-nav-text-' + slick.currentSlide).addClass('active')
    });
}


