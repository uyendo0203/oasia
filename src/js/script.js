function isValidForm(form) {
    isValid = true;

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

    var REX_IS_NUMBER = new RegExp('^[0-9]*$');
    var REX_LOWERCASE = new RegExp('(?=.*[a-z])');
    var REX_UPPERCASE = new RegExp('(?=.*[A-Z])');
    var REX_NUMBER = new RegExp('(?=.*[0-9])');
    var REX_SPECIAL = new RegExp('(?=.[!@#\$%\^&])');
    var REX_INTERGER = new RegExp('^[0-9]*$');
    var REX_PHONE = new RegExp('^(0|84)[0-9]*$');
    var REX_EMAIL = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    var REX_URL = new RegExp(/^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!10(?:\.\d{1,3}){3})(?!127(?:\.​\d{1,3}){3})(?!169\.254(?:\.\d{1,3}){2})(?!192\.168(?:\.\d{1,3}){2})(?!172\.(?:1[​6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1​,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00​a1-\uffff0-9]+-?)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]+-?)*[a-z\u​00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/[^\s]*)?$/i);

    new WOW().init();
    $('.loading').removeClass('active')
    Menu()
    OpenMenu()
    CloseMenu()
    Block1ValidateForm()
    block3Slider()
    block4Slider()
    block6Slider()
    block7Slider()
});

$(window).scroll(function () {
    $(window).scrollTop() >= 145
        ? $('.menu__logo').addClass('scroll')
        : $('.menu__logo').removeClass('scroll');
});

$(window).on("resize", function () {

});
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
        validators: []
    }, {
        name: '.block1Note',
        validators: []
    }]
    var $submit = ".block1 .form__submit";
    validateForm($submit, form);
}
let PopupValidateForm = function () {
    var form = [{
        name: '.PopupName',
        validators: ['required']
    }, {
        name: '.PopupPhone',
        validators: ['required', 'isNumber', 'minLength', 'maxLength'],
        minLength: 10,
        maxLength: 10,
    }, {
        name: '.PopupEmail',
        validators: []
    }, {
        name: '.PopupNote',
        validators: []
    }]
    var $submit = ".popup__button .form__submit";
    validateForm($submit, form);
}


function goToByScroll(echo) {
    $('html,body').animate({
        scrollTop: $("#" + echo).offset().top,
    }, 'slow');
}

let Menu = function () {
    $('.menu__absolute a').click(function (e) {
        e.preventDefault();

        let link = $(this).attr('link')

        // $('.menu__absolute a').removeClass('active');
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

let block3Slider = function () {
    // $('#block3__slider').slick({
    //     centerMode: true,
    //     centerPadding: '20px',
    //     slidesToShow: 5,
    //     // responsive: [
    //     //     {
    //     //         breakpoint: 768,
    //     //         settings: {
    //     //             arrows: false,
    //     //             centerMode: true,
    //     //             centerPadding: '40px',
    //     //             slidesToShow: 3
    //     //         }
    //     //     },
    //     //     {
    //     //         breakpoint: 480,
    //     //         settings: {
    //     //             arrows: false,
    //     //             centerMode: true,
    //     //             centerPadding: '40px',
    //     //             slidesToShow: 1
    //     //         }
    //     //     }
    //     // ]
    // });

    $('#block3__slider--for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        asNavFor: '#block3__slider--nav'
    });
    $('#block3__slider--nav').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        asNavFor: '#block3__slider--for',
        dots: false,
        arrows: false,
        centerMode: true,
        focusOnSelect: true,
        centerMode: true,
        centerPadding: '50px',
    });

}
let block4Slider = function () {
    $('#block4__slider').slick({
        arrow: false,
        dots: false,
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
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

    $('#block6-slider-1').slick({
        arrow: true,
        dots: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '.block6__slider1--arrow .slick-prev',
        nextArrow: '.block6__slider1--arrow .slick-next',
    }).on('afterChange', function (event, slick) {
        console.log('afterChange');
        numberActive(slick.currentSlide)
    });

    $('#block6-slider-2').slick({
        arrow: true,
        dots: true,
        // fade: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: '<button type="button" class="slick-arrow slick-next">Next</button>',
    });
}

let block7Slider = function () {
    $('#block7__slider--for').slick({
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
        focusOnSelect: true,
        prevArrow: '.block7__slider .slick-prev',
        nextArrow: '.block7__slider .slick-next',
    }).on('afterChange', function (event, slick) {
        $('.block7__title-slide-item').removeClass('active')
        $('.block7__slider-nav-text-' + slick.currentSlide).addClass('active')
    });

}


