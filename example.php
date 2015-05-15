<style>
    * {
        margin: 0;
    }
    .progressbar {
        width: 0%;
        background: blue;
        height: 5px;
    }
    .slideShow {
        position: relative;
        overflow: hidden;
        width: 100%;
        height: 520px;
    }

    #slideShow img {
        height: 520px;
        width: 100%;
        position: absolute;
    }

    .item {
        display: none;
    }

    .item h1, .item p {
        position: absolute;
        left: 50%;
    }

    .item p {
        bottom: 20px; 
    }

    .item h1 {
        bottom: 100px;
    }
    .active {
        z-index: 10;
    }
    .left,.right {
        height: 100%;
        position: absolute;
        opacity: 0;
        transition:  ease-in-out all 0.2s;
    }

    .Slideshow-Controls:hover .left, .Slideshow-Controls:hover .right {
        opacity: 1;
    }

    .left {
        left: 10px;
        top: 45%;
    }

    .right {
        right: 10px;
        top: 45%;
    }
    ul {
        position: absolute;

        z-index: 123;
        text-align: center;
        width: 100%;
        bottom: 10px;

    }

    .Slideshow-Controls {
        position: relative;
        height: 520px;
    }

    ul li {
        display: inline-block;
        list-style: none;
    }

    ul li a {
        display: block;
        background: blue;
        border: solid 1px black;
        padding: 20px 50px 20px 50px;
    }

    ul li a:hover, ul li a.active {
        background: black;
    }

</style>
<link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css">



<div class="progressbar"></div>

 

<div id="slideShow">
    <div class="item active">
        <img src="http://jackgur.dk/images/guest/tVUXzO.jpg" />
        <h1>123</h1>
        <p>123123</p>
    </div>
    <div class="item">
        <img src="YGtPvEd.jpg" />
        <h1>123</h1>
        <p>123123</p>
    </div>
    <div class="item">
        <img src="w3EKEQ.jpg" />
        <h1>123</h1>
        <p>123123</p>
    </div>


</div>
    <div class="Slideshow-Controls">
        <div class="left">
            <a  href=""><i class="fa fa-2x fa-arrow-left"></i></a>
        </div>
        <div class="right">
            <a href=""><i class="fa fa-2x fa-arrow-right"></i></a>
        </div>
        <ul></ul>

    </div>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
<script src="plugin.js"></script>
<script>

    $('#slideShow').xeiion_slide({
        pageLength: 3000,
        AnimateSpeed: 500,
        autoplay: true
    });
</script>
