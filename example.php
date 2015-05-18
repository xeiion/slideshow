<link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css">
<style>
/*    .active{
        padding-top: 50%;
    }

    img {
        top: 0;
        left: 0;
        position: absolute;
    }*/
</style>

<div class="Slider">

    <div class="inner-slider">
        <div class="item active">
            <img src="w3EKEQ.jpg" />
        </div>
        <div class="item">
            <img src="Dul4dI.jpg" />
        </div>
        <div class="item">
            <img src="YGtPvEd.jpg" />
        </div>
    </div>
    
    <ul class="SliderNavigation">

    </ul>

    <div class='left control'>

        <a href='' class=''>&#9001;</a>
    </div>
    <div class='right control'>
        <a href='' class=''>&#9002;</a>
    </div>
</div>






<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
<script src="jquery-ui.js"></script>
<script src="plugin.js"></script>
<script>
    $(document).ready(function () {


        $('.Slider').xeiion_slide({
            pageLength: 3000,
            AnimateSpeed: 1000,
            autoplay: false,
            color: 'rgb(51, 153, 255)'
        });
    });
</script>
