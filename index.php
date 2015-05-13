<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
        <title>Bootstrap 101 Template</title>
        <style>
            * {
                margin: 0;
            }
            .slideShow {
                position: relative;
                width: 100%;
                height: 520px;
            }

            #slideShow img {
                height: 520px;
                width: 100%;
            }

            .item {
                opacity: 0;
                position: absolute;
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
                opacity: 1;
                z-index: 10;
            }

            ul {
                position: absolute;
                z-index: 123;
                right: 0;
                top:5px;

            }

            ul li {
                list-style: none;
            }

            ul li a {
                display: block;
                background: blue;
                border: solid 1px black;
                padding: 20px 50px 20px 50px;
            }

            ul li a:hover {
                background: black;
            }
            .progressbar {
                width: 0%;
                background: blue;
                height: 5px;
            }
        </style>

    </head>

    <div class="Slideshow-Controls">
        <ul></ul>

    </div>
    <div class="progressbar"></div>
    <div id="slideShow">
        <div class="item active">
            <img id="" src="http://jackgur.dk/images/guest/Ds5MuC.jpg" />  
            <h1>123</h1>
            <p>123123</p>
        </div>
        <div class="item">
            <img src="http://jackgur.dk/images/guest/tVUXzO.jpg" />
            <h1>123</h1>
            <p>123123</p>
        </div>
        <div class="item">
            <img src="http://jackgur.dk/images/guest/9UHo3a.jpg" />
            <h1>123</h1>
            <p>123123</p>
        </div>
        <div class="item">
            <img src="http://jackgur.dk/images/guest/FVJ6Au.jpg" />
            <h1>123</h1>
            <p>123123</p>
        </div>
    </div>




    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
    <script src="plugin.js"></script>
    <script>
        $('#slideShow').xeiion_slide({
            autoplay: true,
            Pageload: 1000
        });
    </script>
</body>
</html>