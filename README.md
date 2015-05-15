#Simple slide show

<div id="slideShow">
    <div class="item active">
      img tag
    htag
    
      ptag
      
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
    
       $('#slideShow').xeiion_slide({
        pageLength: 3000,
        AnimateSpeed: 500,
        autoplay: true
    });
    
