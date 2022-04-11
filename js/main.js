    /////////////////////////////////////////////// Start  Scroll-nav function   ////////////////////////////////////////
    let functionOffset = $('.head-p').offset().top
    $(window).scroll(function() {
        let scrollOffset = $(window).scrollTop()
        if (scrollOffset > functionOffset) {
            $('.navbar').css({ 'backgroundColor': 'rgba(0,0,0,0.6)', 'Transition': 'all 2s' }, 2000)
            $('#btnTop').fadeIn(2000)
        } else {
            $('.navbar').css({ 'backgroundColor': 'transparent' })
            $('#btnTop').fadeOut(2000)
        }
    });
    $('.nav-link').click(function() {
        let currentLink = $(this).attr('href');
        let currentSc = $(currentLink).offset().top;
        $('body').animate({ scrollTop: currentSc }, 2000)
    })

    $('#btnTop').click(function() {
            $('html,body').animate({ scrollTop: 0 }, )

        })
        /////////////////////////////////////////////// End  Scroll-nav function   ////////////////////////////////////////

    /////////////////////////////////////////////// Start  D-none nav links function   ////////////////////////////////////////

    $('.js-scroll-trigger').click(function() {
        $('.navbar-collapse').collapse('hide');
    });
    /////////////////////////////////////////////// End   D-none nav links function    ////////////////////////////////////////

    /////////////////////////////////////////////// Start loading  function    /////////////////////////////////////////////////

    $('body').ready(function() {
            $('.center').fadeOut(2070)
            $('body,html').css('overflow', 'visible')
        })
        /////////////////////////////////////////////// End  loading  function    ////////////////////////////////////////

    /////////////////////////////////////////////// Start  ColorOption  function    ////////////////////////////////////////
    let currentBgColor = ['red', 'green', '#76d275', '#651fff', '#ffad42'];
    for (let i = 0; i < currentBgColor.length; i++) {
        $('.colorOptions li').eq(i).css('backgroundColor', currentBgColor[i]);
    }

    $('.colorOptions li').click(function() {
        let currentColor = $(this).css('backgroundColor')
        $('.change').css('color', currentColor)
    })

    $('.colorBox').click(function() {
        if ($('.colorBox').css('left') === '0px') {
            $(this).animate({ 'left': '-185px' }, 2000)
        } else {
            $(this).animate({ 'left': '0px' }, 2000)

        }
    })

    /////////////////////////////////////////////// End  ColorOption  function    ////////////////////////////////////////


    /////////////////////////////////////////////// Start  Typing-js  function    ////////////////////////////////////////

    var options = {
        strings: [' Computer and Markting Learning '],
        typeSpeed: 40,
        loop: true,
        backDelay: 200,
        backSpeed: 100,
        typeSpeed: 100,
        showCursor: false,
        fadeOut: true,
        fadeOutClass: 'typed-fade-out',
        fadeOutDelay: 500,
    };
    var typed = new Typed('.titleType', options);
    /////////////////////////////////////////////// End  Typing-js  function    ////////////////////////////////////////