# slideshow


Just leave ul empty auto generating links

    <div class="progressbar"></div>
    
    <div id="slideShow">
          <div class="item">
            <img src=" image" />
            <h1></h1>
            <p></p>
        </div>
        
        <div class="item">
            <img src="image" />
              <h1></h1>
            <p></p>
        </div>
        
        <div class="item">
            <img src="image" />
              <h1></h1>
            <p></p>
        </div>
        
        <div class="item">
            <img src="image" />
              <h1></h1>
            <p></p>
        </div>
        
    </div>

    <div class="Slideshow-Controls">
        <ul>
        </ul>
    </div>


    $('#slideShow').xeiion_slide({
        autoplay: true,
        Pageload: 1000
    });
