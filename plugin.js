(function ($) {

    $.fn.xeiion_slide = function (options) {

        var settings = $.extend({
        }, options);

        var ProgressTimer = 0;
        var Count = 0;
        var Container = $('#slideShow');
        var listItems = Container.children('.item');
        progress = '';
        SlideTimer = '';
        NewCount = '';


        $('.item').each(function (i) {
            $('.Slideshow-Controls ul').append('<li><a data-slide-to="' + (i + 1) + '" href="">' + (i + 1) + '</a></li>');
        });


        $('.Slideshow-Controls ul li a').click(function (event) {
            event.preventDefault();
            if (!$(this).hasClass('active')) {
                $('.Slideshow-Controls ul li a').removeClass('active').removeAttr('class');
                $(this).addClass('active');
                $('#slideShow .item').hide().removeClass('active').css('opacity', '0');
                NewCount = $(this).attr('data-slide-to');

                if (progress) {
                    progress.stop();
                    clearInterval(ProgressTimer);
                    $('.progressbar').css('width', '0');
                }

                $("#slideShow .item:nth-child(" + NewCount + ")").show().addClass('active').animate({'opacity': '1'}, settings.Pageload);
                stopslider();
                startslider();
                if (progress) {
                    Progressbar();
                }
            }

        });


        function startslider() {
            if ($('#slideShow').attr('data')) {
                Count = $('#slideShow').attr('data');
            } else {
                Count = NewCount;
            }
            if (settings.autoplay) {

                SlideTimer = setInterval(function () {
                    $('#slideShow').removeAttr('data');
                    Count++;
                    if (Count === Container.children().length + 1) {
                        Count = 1;
                    }
                    if (Count !== NewCount) {
                        $('#slideShow .item').css('opacity', '0').removeClass('active').hide();
                        $('#slideShow .item:nth-child(' + Count + '').show().addClass('active').animate({'opacity': '1'}, settings.Pageload);
                    }
                }, settings.Pageload);
            }
        }


        function stopslider() {
            clearInterval(ProgressTimer);
            clearInterval(SlideTimer);
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
            Count = $('#slideShow').attr('data', Count);
            width = $('.progressbar').width();

            startslider();
            Progressbar();
        });


        Progressbar();

        listItems.not(':first').hide();
        if (settings.autoplay) {
            startslider();
        }
    };

}(jQuery));