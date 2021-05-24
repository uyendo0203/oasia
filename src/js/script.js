
$(window).on("load", function () {
    new WOW().init();
    $('.loading').removeClass('active')
});

$(window).on("scroll", function () {

});

$(window).on("resize", function () {

});

let videoAction = function () {
    let player;
    let idVideo = $('.video__play')[0] && $('.video__play')[0].attributes.video && $('.video__play')[0].attributes.video.value;

    onYouTubeIframeAPIReady()
    function onYouTubeIframeAPIReady() {
        player = new YT.Player('player', {
            height: '390',
            width: '640',
            videoId: idVideo,
            playerVars: {
                color: 'white',
                // controls: 0,
                rel: 0,
                enablejsapi: 1,
                modestbranding: 1, showinfo: 0, ecver: 2
            },
            events: {
                'onReady': onPause,
                'onStateChange': onPlayerStateChange
            }
        });
    }

    function onPause(event) {
        event.target.pauseVideo();
    }

    var done = false;
    function onPlayerStateChange(event) {
        if (event.data == YT.PlayerState.PLAYING && !done) {
            done = true;
        }
    }

    function playVideoActiveClass(status) {
        if (status) {
            $('.video__pause').addClass('inactive')
            $('.video__play').addClass('active')
            player.playVideo();
        } else {
            $('.video__pause').removeClass('inactive')
            $('.video__play').removeClass('active')
            player.stopVideo();
        }

    }

    // play 
    $('.video__pause .play-icon').click(function () {
        playVideoActiveClass(true)
    })

    // trigger play 
    $('#playVideoTrigger').click(function () {
        playVideoActiveClass(true)
    })
}

let sliderHome = function () {
    if ($(".home-slider__wrap").length === 0) {
        return false
    }

    $(".home-slider__wrap").slick({
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
    });

    let htmlTextLogo = $('.home-slider__footer').html()

    $(".home-slider__wrap").on('beforeChange', function (event, slick, currentSlide, nextSlide) {
        if (nextSlide == 1) {
            $('.home-slider__footer .text').html('')
        } else {
            $('.home-slider__footer .text').html(htmlTextLogo)
        }

    });
}


