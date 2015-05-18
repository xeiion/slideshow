#Simple slide show

See example how to implant the slideshow.


place this in script


   $(document).ready(function () {
        $('.Slider').xeiion_slide({
            pageLength: 3000,
            AnimateSpeed: 1000,
            autoplay: false,
            color: 'rgb(51, 153, 255)'
        });
    });
