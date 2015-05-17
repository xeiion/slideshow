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

        function SetCss() {

            $('body').css('overflow', 'hidden');

            //head and paragraph
            $('.item h1,.item p').css(
                    {'position': 'absolute',
                        'left': '50%'
                    }
            );

            // next/previous arrows
            $('.Slideshow-Controls .left,.Slideshow-Controls .right').css(
                    {
                        'position': 'absolute',
                        'padding': ' 5px 8px 15px 8px',
                        'border': 'solid 1px black',
                        'background': 'rgb(51, 153, 255)'
                    }
            ).hide();

            $('.Slideshow-Controls .right').css(
                    {'right': '10px',
                        'top': '40%'
                    }
            );

            $('.Slideshow-Controls .left').css(
                    {'left': '10px',
                        'top': '40%'
                    }
            );

            $('.Slideshow-Controls .left a,.Slideshow-Controls .right a').css(
                    {
                        'color': 'black',
                        'text-decoration': 'none',
                        'font-size': '50px'
                    }
            );

            //hide images
            $('#slideShow .item').css('display', 'none');

            //navigation
            $('.Slideshow-Controls ul').css(
                    {'position': 'absolute',
                        'text-align': 'center',
                        'width': '100%',
                        'bottom': '10px',
                        'list-style': 'none'
                    }
            );

            //main Nav div
            $('.Slideshow-Controls').css(
                    {'position': 'relative',
                        'height': '520px'
                    }
            );
            //Image

            $('#slideShow .item img').css(
                    {'height': '520px',
                        'width': '100%',
                        'position': 'absolute'
                    }
            );
        }

        SetCss();

        $('.item').each(function (i) {
            imageSource = $(".item:nth-child(" + (i + 1) + ") img").attr('src');
            if ((i + 1) === 1) {
                Class = 'class="active"';
            } else {
                Class = '';
            }
            $('.Slideshow-Controls ul').append('<li ' + Class + '><a data-slide-to="' + (i + 1) + '" href=""><img src="' + imageSource + '" /></a></li>');

            $(".Slideshow-Controls ul a img").css(
                    {'height': '70px',
                        'margin-left': '20px',
                        'border': 'solid 1px black',
                        'box-shadow': '0 0 4px rgba(0,0,0,.8)'
                    }
            );

            $('.Slideshow-Controls ul .active img').css('border', 'solid 1px #3399FF');

            $('li').css(
                    {
                        'display': 'inline'
                    }
            );
        });


        $('.Slideshow-Controls ul li a').click(function (event) {
            event.preventDefault();
            ClickValue = $(this).attr('data-slide-to');

            $(".Slideshow-Controls ul li").removeAttr('class');
            $(".Slideshow-Controls ul li:nth-child(" + ClickValue + ")").addClass('active');

            $('.Slideshow-Controls ul li img').css({
                'border': 'solid 1px black'}
            );

            $(".Slideshow-Controls ul li:nth-child(" + ClickValue + ") img").css('border', 'solid 1px #3399FF');

            if (settings.Count !== ClickValue) {
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

                    $(".Slideshow-Controls ul li").removeClass('active').removeAttr('class');
                    $(".Slideshow-Controls ul li:nth-child(" + settings.Count + ")").addClass('active');

                    $('.Slideshow-Controls ul li img').css(
                            {
                                'border': 'solid 1px black'
                            }
                    );

                    $('.Slideshow-Controls ul .active img').css('border', 'solid 1px #3399FF');
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
            $('.Slideshow-Controls .left,.Slideshow-Controls .right').stop().fadeIn(300);
            stopslider();
        });

        $('.Slideshow-Controls').mouseout(function () {
            $('.Slideshow-Controls .left,.Slideshow-Controls .right').stop().fadeOut(300);
            Restartslide(settings.Count);
        });


        $('.left a').click(function (event) {
            event.preventDefault();

            settings.Count--;

            if (settings.Count <= 0) {
                settings.Count = settings.Container.children().length;
            }

            $(".Slideshow-Controls ul li").removeClass('active').removeAttr('class');
            $(".Slideshow-Controls ul li:nth-child(" + settings.Count + ")").addClass('active');
//
            $('.Slideshow-Controls ul li img').css(
                    {
                        'border': 'solid 1px black'
                    }
            );

            $('.Slideshow-Controls ul .active img').css('border', 'solid 1px #3399FF');

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

            $(".Slideshow-Controls ul li").removeClass('active').removeAttr('class');
            $(".Slideshow-Controls ul li:nth-child(" + settings.Count + ")").addClass('active');

            $('.Slideshow-Controls ul li img').css(
                    {
                        'border': 'solid 1px black'
                    }
            );

            $('.Slideshow-Controls ul .active img').css('border', 'solid 1px #3399FF');

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