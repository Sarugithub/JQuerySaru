(function ($) {

    $.fn.imageSlider = function(){

        //setInterval

        setInterval(function(){

            $('#slider .slides').animate({'margin-left' : '-=720px'}, 1000), 3000})
    }
}(jQuery))