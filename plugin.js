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
            SlideTimer: ''

        }, options);
        var progress;

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
                    settings.Count++;

                    if (settings.Count === settings.Container.children().length + 1) {
                        settings.Count = 1;

                    }

                    $("#slideShow .item").removeClass('active');
                    $("#slideShow .item:nth-child(" + settings.Count + ")").addClass('active').fadeIn(settings.AnimateSpeed);
                }, settings.pageLength);
            } else {
                //fix white background on false auto play loading first todo
                //add fadein/fadeout speed option
            }
        }

        function Restartslide(id) {
            stopslider();
            settings.Count = id;
            Progressbar();

            startslider();
        }


        function stopslider() {
            if (settings.autoplay) {
                clearInterval(ProgressTimer);
            }
            clearInterval(settings.SlideTimer);
        }


        function Progressbar() {
            if (settings.autoplay) {
                ProgressTimer = setInterval(function () {

                    totaltWidth = $(window).width();
                    if ($('.progressbar').width() === totaltWidth) {
                        $('.progressbar').css('width', '0%');
                    }

                    progress = $('.progressbar').animate({'width': '100%'}, settings.pageLength - 20);
                }, settings.pageLength);
            }
        }


        $('#slideShow').mouseover(function () {
            if (settings.autoplay) {
                if (progress) {
                    progress.stop();
                }
            }
            stopslider();
        });


        $('#slideShow').mouseout(function () {
            Restartslide(settings.Count);
            Progressbar();
        });


        $('.left a').click(function (event) {
            event.preventDefault();

            settings.Count--;

            if (settings.Count <= 0) {
                settings.Count = settings.Container.children().length;
            }
            $("#slideShow .item").fadeOut(settings.AnimateSpeed).removeClass('active');
            $("#slideShow .item:nth-child(" + settings.Count + ")").addClass('active').fadeIn(settings.AnimateSpeed);
            Restartslide(settings.Count);
            Progressbar();
        });

        $('.right a').click(function (event) {
            event.preventDefault();

            settings.Count++;
            if (settings.Count === settings.Container.children().length + 1) {
                settings.Count = 1;
            }
            $("#slideShow .item").fadeOut(settings.AnimateSpeed).removeClass('active');
            $("#slideShow .item:nth-child(" + settings.Count + ")").addClass('active').fadeIn(settings.AnimateSpeed);
            Restartslide(settings.Count);

        });

        Progressbar();

        if (settings.autoplay) {
            startslider();
        }
    };

}(jQuery));