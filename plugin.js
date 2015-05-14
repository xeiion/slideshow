/**
 * @preserve Xeiion Slide version 1.00
 * http://jack-petersen.com
 *
 * Copyright 2015, Jack petersen.
 * Free to use under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 */


(function ($) {

    $.fn.xeiion_slide = function (options) {

        var settings = $.extend({
            ProgressTimer: 0,
            Count: 0,
            Container: $('#slideShow'),
            SlideTimer: '',
            restart: false

        }, options);





        $('.item').each(function (i) {
            $('.Slideshow-Controls ul').append('<li><a data-slide-to="' + (i + 1) + '" href="">' + (i + 1) + '</a></li>');
        });


        $('.Slideshow-Controls ul li a').click(function (event) {
            event.preventDefault();
            ClickValue = $(this).attr('data-slide-to');
            Restartslide(ClickValue);

        });


        function startslider() {
            settings.SlideTimer = setInterval(function () {
                $("#slideShow .item").fadeOut(500);
                if (!settings.restart) {
                    settings.Count++;
                }

                if (settings.Count === settings.Container.children().length + 1) {
                    settings.Count = 1;

                }
                settings.restart = false;
                if (!settings.Count) {
                    settings.Count = 1;
                }

                $("#slideShow .item").removeClass('active');
                $("#slideShow .item:nth-child(" + settings.Count + ")").addClass('active').fadeIn(500);
            }, settings.Pageload);

        }

        function Restartslide(id) {
            stopslider();
            settings.Count = id;
            settings.restart = true;
            startslider();
        }


        function stopslider() {
            clearInterval(ProgressTimer);
            clearInterval(settings.SlideTimer);
        }


        function Progressbar() {
            if (settings.autoplay) {
                ProgressTimer = setInterval(function () {

                    totaltWidth = $(window).width();
                    if ($('.progressbar').width() === totaltWidth) {
                        $('.progressbar').css('width', '0%');
                    }
                    progress = $('.progressbar').animate({'width': '100%'}, settings.Pageload - 20);
                }, settings.Pageload);
            }
        }


        $('#slideShow').mouseover(function () {
            if (progress) {
                progress.stop();
            }
            stopslider();
        });


        $('#slideShow').mouseout(function () {
            width = $('.progressbar').width();
            console.log(settings.Count);
            Restartslide(settings.Count);
            Progressbar();
        });


        Progressbar();




        if (settings.autoplay) {
            startslider();
        }
    };

}(jQuery));