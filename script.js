$(document).ready(function() {

var navClicked = false;

var coverHeight = $("#cover").height();


var sections = $('section')
    , nav = $('nav')
    , nav_height = nav.outerHeight();

$(window).on('scroll', function () {
    var cur_pos = $(this).scrollTop();

    sections.each(function() {
        var top = $(this).offset().top - nav_height,
            bottom = top + $(this).outerHeight();

        if (cur_pos >= top && cur_pos <= bottom) {
            nav.find('a').removeClass('active');
            sections.removeClass('active');

            $(this).addClass('active');
            nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('active');
        }
    });
});

nav.find('a').on('click', function () {
    var $el = $(this)
        , id = $el.attr('href');

    $('html, body').animate({
        scrollTop: $(id).offset().top - nav_height
    }, 500);

    return false;
});

       $(document).scroll(function(){
        if($(this).scrollTop() > 40)
        {
            $('.navbar-custom').css({"background":"#9BC2E6"});
            $('.navbar-custom').css({" -webkit-box-shadow": "0 4px 4px rgba(0, 0, 0, 0.5)",
                                        "-moz-box-shadow": "0 4px 4px rgba(0, 0, 0, 0.5)",
                                         "box-shadow": "0 4px 4px rgba(0, 0, 0, 0.5)"});
        } else if(navClicked === false ){
            $('.navbar-custom').css({"background":"transparent"});
            $('.navbar-custom').css({" -webkit-box-shadow": "0 0px 0px rgba(0, 0, 0, 0.5)",
                "-moz-box-shadow": "0 0px 0px rgba(0, 0, 0, 0.5)",
                "box-shadow": "0 0px 0px rgba(0, 0, 0, 0.5)"});

        }


    });

    $(".navbar-toggle").click(function() {
       if(navClicked === false) {
           $(".navbar-custom").css({"background": "#9BC2E6"});
           navClicked = true;
       } else if($(document).scrollTop() > 40){
           $(".navbar-custom").css({"background": "#9BC2E6"});
           navClicked = false;
       } else {
           $(".navbar-custom").css({"background": "transparent"});
           navClicked = false;
           $('.navbar-custom').css({" -webkit-box-shadow": "0 0px 0px rgba(0, 0, 0, 0.5)",
               "-moz-box-shadow": "0 0px 0px rgba(0, 0, 0, 0.5)",
               "box-shadow": "0 0px 0px rgba(0, 0, 0, 0.5)"});
       }

    });

    $(".navbar-collapse").click(function() {


        $(".navbar-custom").css({"background": "#000"});

    });

});
