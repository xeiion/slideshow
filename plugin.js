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
            Mouseout: false

        }, options);





        $('.item').each(function (i) {
            $('.Slideshow-Controls ul').append('<li><a data-slide-to="' + (i + 1) + '" href="">' + (i + 1) + '</a></li>');
        });


        $('.Slideshow-Controls ul li a').click(function (event) {
            event.preventDefault();
            ClickValue = $(this).attr('data-slide-to');
            if (settings.count !== ClickValue) {
                Restartslide(ClickValue);

                $("#slideShow .item").fadeOut(500).removeClass('active');
                $("#slideShow .item:nth-child(" + ClickValue + ")").addClass('active').fadeIn(500);
                //todo fix que build ups
            }
        });


        function startslider() {
            if (settings.autoplay) {

                settings.SlideTimer = setInterval(function () {
                    if (settings.Mouseout) {
                        settings.Mouseout = false;
                    } else {
                        $("#slideShow .item").fadeOut(500);
                    }

                    settings.Count++;

                    if (settings.Count === settings.Container.children().length + 1) {
                        settings.Count = 1;

                    }
                    if (!settings.Count) {
                        settings.Count = 1;
                    }

                    $("#slideShow .item").removeClass('active');
                    $("#slideShow .item:nth-child(" + settings.Count + ")").addClass('active').fadeIn(500);
                }, settings.Pageload);
            } else {
                //fix white background on false auto play loading first todo
                //add fadein/fadeout speed option
            }
        }

        function Restartslide(id) {
            stopslider();
            settings.Count = id;
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
                    progress = $('.progressbar').animate({'width': '100%'}, settings.Pageload - 20);
                }, settings.Pageload);
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
            width = $('.progressbar').width();
            settings.Mouseout = true;
            Restartslide(settings.Count);
            Progressbar();
        });


        $('.clickLeft').click(function () {
            //not working
            settings.Count++;
        });

        $('.clickRight').click(function () {
              //not working
            settings.Count--;
        });

        Progressbar();

        if (settings.autoplay) {
            startslider();
        }
    };

}(jQuery));