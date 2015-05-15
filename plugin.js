/**
 * @preserve Xeiion simple slider version 1.00
 * http://jack-petersen.com
 *
 * Copyright 2015, Jack petersen.
 * Free to use under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 */


(function ($) {

    $.fn.xeiion_slide = function (options) {

        var settings = $.extend({
            Count: 0,
            Container: $('#slideShow'),
            SlideTimer: ''

        }, options);

        $('.item').each(function (i) {
            $('.Slideshow-Controls ul').append('<li><a data-slide-to="' + (i + 1) + '" href="">' + (i + 1) + '</a></li>');
        });


        $('.Slideshow-Controls ul li a').click(function (event) {
            event.preventDefault();
            ClickValue = $(this).attr('data-slide-to');
            if (settings.count !== ClickValue) {
                Restartslide(ClickValue);

                $("#slideShow .item").stop().fadeOut(settings.AnimateSpeed).removeClass('active');
                $("#slideShow .item:nth-child(" + ClickValue + ")").stop().addClass('active').fadeIn(settings.AnimateSpeed);
            }
        });


        function startslider() {
            if (settings.autoplay) {

                settings.SlideTimer = setInterval(function () {

                    $("#slideShow .item").fadeOut(settings.AnimateSpeed);
                    if (settings.Count === 0) {
                        settings.Count += 2;
                    } else {
                        settings.Count++;
                    }


                    if (settings.Count === settings.Container.children().length + 1) {
                        settings.Count = 1;
                    }

                    $("#slideShow .item").removeClass('active');
                    $("#slideShow .item:nth-child(" + settings.Count + ")").addClass('active').fadeIn(settings.AnimateSpeed);
                }, settings.pageLength);
            }
        }

        function Restartslide(id) {
            stopslider();
            settings.Count = id;

            startslider();
        }


        function stopslider() {
            clearInterval(settings.SlideTimer);
        }


        $('.Slideshow-Controls').mouseover(function () {
            stopslider();
        });


        $('.Slideshow-Controls').mouseout(function () {
            Restartslide(settings.Count);
        });


        $('.left a').click(function (event) {
            event.preventDefault();

            settings.Count--;

            if (settings.Count <= 0) {
                settings.Count = settings.Container.children().length;
            }
            $("#slideShow .item").stop().fadeOut(settings.AnimateSpeed).removeClass('active');
            $("#slideShow .item:nth-child(" + settings.Count + ")").stop().addClass('active').fadeIn(settings.AnimateSpeed);
            Restartslide(settings.Count);
        });

        $('.right a').click(function (event) {
            event.preventDefault();
            if (settings.Count === 0) {
                settings.Count += 2;
            } else {
                settings.Count++;
            }

            if (settings.Count === settings.Container.children().length + 1) {
                settings.Count = 1;
            }

            $("#slideShow .item").stop().fadeOut(settings.AnimateSpeed).removeClass('active');
            $("#slideShow .item:nth-child(" + settings.Count + ")").stop().addClass('active').fadeIn(settings.AnimateSpeed);
            Restartslide(settings.Count);

        });


        if (settings.autoplay) {
            startslider();
        }
        $(".active").show();
    };

}(jQuery));