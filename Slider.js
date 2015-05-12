$(document).ready(function () {
    var pause = 2000;
    var animateSpeed = 1000;

    var Container = $('#slideShow');
    var listItems = Container.children('.item');
    var count = 0;
    var Timer;
    progress = '';
    var NewCount = '';

// Generating Links depending on items

    $('.item').each(function (i) {
        $('.Slideshow-Controls ul').append('<li><a data-slide-to="' + (i + 1) + '" href="">' + (i + 1) + '</a></li>');
    });


// Starting slideshow
    function startSlide() {
        if ($('#slideShow').attr('data')) {
            count = $('#slideShow').attr('data');
        } else {
            count = NewCount;
        }

        Timer = setInterval(function () {
            $('#slideShow').removeAttr('data');
            count++;
            if (count === Container.children().length + 1) {
                count = 1;
                PreviousImage = 4;
            } else {
                if (count !== 1) {
                    PreviousImage = count - 1;
                } else {
                    PreviousImage = count;
                }
            }

            totaltWidth = $(window).width();
            $('#slideShow .item').hide().removeClass('active').css('opacity', 0);
            $('#slideShow .item:nth-child(' + PreviousImage + '').show().css('opacity', '1');
            $('.item h1').css('right', '0').animate({'right': '50%'}, 200);
            $('.item p').css('right', '0').animate({'right': '50%'}, 700);
            if ($('.progressbar').width() === totaltWidth) {
                $('.progressbar').css('width', '0%');
            }
            progress = $('.progressbar').animate({'width': '100%'}, 1980);
            $('#slideShow .item:nth-child(' + count + '').show().addClass('active').animate({'opacity': '1'}, animateSpeed);
        }, pause);
    }

//Stopping slideshow
    function stopSlide() {
        clearInterval(Timer);
    }
//setting the new item on click

    $('.Slideshow-Controls ul li a').click(function (event) {
        event.preventDefault();
        NewCount = $(this).attr('data-slide-to');
        if (NewCount !== count) {
            $('a').removeClass('active').removeAttr('class');
            $(this).addClass('active');
            $('#slideShow .item').hide().removeClass('active').css('opacity', '0');
            $('.item h1').css('right', '0').animate({'right': '50%'}, 200);
            $('.item p').css('right', '0').animate({'right': '50%'}, 700);
            $('.progressbar').css('width', '0%');

            if (count === '') {
                $('#slideShow .item:nth-child(1)').show().css('opacity', '1');
            } else {
                $('#slideShow .item:nth-child(' + count + '').show().css('opacity', '1');
            }

            $("#slideShow .item:nth-child(" + NewCount + ")").show().addClass('active').animate({'opacity': '1'}, animateSpeed);
            stopSlide();
            startSlide();
        }
    });
//stopping the slideshow on hover
    $('#slideShow').mouseover(function () {
        if (progress) {
            progress.stop();
        }
        stopSlide();
    });

//starting the slideshow on mouse out
    $('#slideShow').mouseout(function () {
        count = $('#slideShow').attr('data', count);
        width = $('.progressbar').width();
        startSlide();
    });

//hide all items expect first one
    listItems.not(':first').hide();

    //starting the slideshow 
    startSlide();


});
