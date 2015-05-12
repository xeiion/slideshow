$(document).ready(function () {
    var pause = 2000;
    var animateSpeed = 1000;

    var Container = $('#slideShow');
    var listItems = Container.children('.item');
    var count = 0;
    var Timer;

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
                PreviousImage = count - 1;
            }

            $('#slideShow .item').hide().removeClass('active').css('opacity', 0);

            $('#slideShow .item:nth-child(' + PreviousImage + '').show().css('opacity', '1');

            $('#slideShow .item:nth-child(' + count + '').show().addClass('active').animate({'opacity': '1'}, animateSpeed);
        }, pause);
    }

//Stopping slideshow
    function stopSlide() {
        clearInterval(Timer);
    }

//setting the new item on click

    $('a').click(function (event) {
        event.preventDefault();
        NewCount = $(this).attr('data-slide-to');
        if (NewCount !== count) {
            $('a').removeClass('active').removeAttr('class');
            $(this).addClass('active');
            $('#slideShow .item').hide().removeClass('active');
            $("#slideShow .item:nth-child(" + NewCount + ")").show().addClass('active').animate({'opacity': '1'}, animateSpeed);
            stopSlide();
            startSlide();
        }
    });
//stopping the slideshow on hover
    $('#slideShow').mouseover(function () {
        stopSlide();
    });

//starting the slideshow on mouse out
    $('#slideShow').mouseout(function () {
        count = $('#slideShow').attr('data', count);
        startSlide();
    });

//hide all items expect first one
    listItems.not(':first').hide();

    //starting the slideshow 
    startSlide();


});
