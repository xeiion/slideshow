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
            Container: $('.inner-slider'),
            SlideTimer: ''

        }, options);

        if (!settings.color) {
            settings.color = 'rgb(51, 153, 255)';
        }
        ;

        function SetCss() {
            //
            $('.Slider').css(
                    {
                        'position': 'relative'
                    });

            //
            $('.SliderNavigation').css(
                    {
                        'position': 'absolute',
                        'list-style': 'none',
                        'text-align': 'center',
                        'left': '50%',
                        'z-index': '15',
                        'width': '60%',
                        'padding-left': '0',
                        'margin-left': '-30%'
                    });

            $('.inner-slider').css(
                    {
                        'position': 'relative',
                        'width': '100%',
                        'overflow': 'hidden',
                        'text-align': 'center'
                    });

            $('.inner-slider > .item > img').css(
                    {
                        'margin': 'auto',
                        'text-align': 'center',
                        'width': '100%'
                    });

            $('img').css(
                    {
                        'position': 'absolute',
                        'top': '0',
                        'left': '0'
                    });

            $('.active').css({'padding-top': '50%'});

            $('.item').hide();

            $('.control').css(
                    {
                        'position': 'absolute',
                        'top': '50%',
                        'bottom': '0',
                        'left': '0',
                        'width': '15%',
                        'font-size:': '1vh',
                        'text-align': 'center',
                        'text-shadow': '0 1px 2px rgba(0,0,0,.6)'
                    });

            $('.control a').css(
                    {
                        'text-decoration': 'none',
                        'padding': '50px 10px',
                        'color': 'black',
                        'background': settings.color,
                        'border': 'solid 1px black',
                        'display':'none'
                    });

            $('.right').css(
                    {
                        'right': '0',
                        'left': 'auto'
                    });

        }

        SetCss();

        $('.item').each(function (i) {
            imageSource = $(".item:nth-child(" + (i + 1) + ") img").attr('src');
            if ((i + 1) === 1) {
                Class = 'class="active"';
            } else {
                Class = '';
            }
            $('.SliderNavigation').append('<li ' + Class + '><a data-slide-to="' + (i + 1) + '" href=""><img src="' + imageSource + '" /></a></li>');

            $(".SliderNavigation a img").css(
                    {
                        'height': '70px',
                        'margin-left': '20px',
                        'border': 'solid 1px black',
                        'box-shadow': '0 0 4px rgba(0,0,0,.8)'
                    }
            );

            $('.SliderNavigation .active img').css('border', 'solid 1px ' + settings.color);

            $('li').css(
                    {
                        'display': 'inline'
                    }
            );
        });


        $('.SliderNavigation li a').click(function (event) {
            event.preventDefault();
            ClickValue = $(this).attr('data-slide-to');

            $(".SliderNavigation li").removeAttr('class');
            $(".SliderNavigation li:nth-child(" + ClickValue + ")").addClass('active');

            $('.SliderNavigation li img').css(
                    {
                        'border': 'solid 1px black'
                    }
            );

            $(".SliderNavigation li:nth-child(" + ClickValue + ") img").css('border', 'solid 1px ' + settings.color);

            if (settings.Count !== ClickValue) {
                Restartslide(ClickValue);

                $(".inner-slider .item").stop().fadeOut(settings.AnimateSpeed).removeClass('active');

                $(".inner-slider .item:nth-child(" + ClickValue + ")").stop().addClass('active').fadeIn(settings.AnimateSpeed);
                $('.item').css('padding-top', '0');
                $('.active').css('padding-top', '50%');
            }
        });


        function startslider() {
            if (settings.autoplay) {

                settings.SlideTimer = setInterval(function () {

                    $(".inner-slider .item").fadeOut(settings.AnimateSpeed);
                    if (settings.Count === 0) {
                        settings.Count += 2;
                    } else {
                        settings.Count++;
                    }


                    if (settings.Count === settings.Container.children().length + 1) {
                        settings.Count = 1;
                    }

                    $(".inner-slider .item").removeClass('active');

                    $(".inner-slider .item:nth-child(" + settings.Count + ")").addClass('active').fadeIn(settings.AnimateSpeed);

                    $(".SliderNavigation li").removeClass('active').removeAttr('class');
                    $(".SliderNavigation li:nth-child(" + settings.Count + ")").addClass('active');

                    $('.SliderNavigation li img').css(
                            {
                                'border': 'solid 1px black'
                            }
                    );
                    $('.item').css('padding-top', '0');
                    $('.active').css('padding-top', '50%');
                    $('.SliderNavigation .active img').css('border', 'solid 1px ' + settings.color);
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


        $('.Slider').mouseover(function () {
            $('.control a').show();
            stopslider();
        });

        $('.Slider').mouseout(function () {
           $('.control a').hide();
            Restartslide(settings.Count);
        });


        $('.left').click(function (event) {
            event.preventDefault();

            settings.Count--;

            if (settings.Count <= 0) {
                settings.Count = settings.Container.children().length;
            }

            $(".SliderNavigation li").removeClass('active').removeAttr('class');
            $(".SliderNavigation li:nth-child(" + settings.Count + ")").addClass('active');
//
            $('.SliderNavigation li img').css(
                    {
                        'border': 'solid 1px black'
                    }
            );

            $('.SliderNavigation .active img').css('border', 'solid 1px ' + settings.color);

            $(".inner-slider .item").stop().fadeOut(settings.AnimateSpeed).removeClass('active');

            $(".inner-slider .item:nth-child(" + settings.Count + ")").stop().addClass('active').fadeIn(settings.AnimateSpeed);
            $('.item').css('padding-top', '0');
            $('.active').css('padding-top', '50%');
            Restartslide(settings.Count);
        });

        $('.right').click(function (event) {
            event.preventDefault();
            if (settings.Count === 0) {
                settings.Count += 2;
            } else {
                settings.Count++;
            }

            if (settings.Count === settings.Container.children().length + 1) {
                settings.Count = 1;
            }

            $(".SliderNavigation li").removeClass('active').removeAttr('class');
            $(".SliderNavigation li:nth-child(" + settings.Count + ")").addClass('active');

            $('.SliderNavigation li img').css(
                    {
                        'border': 'solid 1px black'
                    }
            );

            console.log(settings.Count);
            $('.SliderNavigation .active img').css('border', 'solid 1px ' + settings.color);

            $(".inner-slider .item").stop().fadeOut(settings.AnimateSpeed).removeClass('active');

            $(".inner-slider .item:nth-child(" + settings.Count + ")").stop().addClass('active').fadeIn(settings.AnimateSpeed);
            $('.item').css('padding-top', '0');
            $('.active').css('padding-top', '50%');
            Restartslide(settings.Count);

        });


        if (settings.autoplay) {
            startslider();
        }

        $(".active").show();

    };

}(jQuery));