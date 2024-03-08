jQuery(document).ready(function(){
           
  /*  $('').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        dots:false,
        responsive:{
            320:{
                items:1
            },
            575:{
                items:2
            },
            768:{
                items:4
            },
            1000:{
                items:5
            }
        }
    }); */
    $( "button.navbar-toggler" ).on( "click", function() {
        $(this).next().slideToggle(500);
        $(this).toggleClass('active');
    });

    $('.parallax-window').parallax();

    $('.video').parent().click(function () {
        if($(this).children(".video").get(0).paused)
        {
            $(this).children(".video").get(0).play();   
            $(this).children(".playpause").fadeOut();
        }
        else
        {  
            $(this).children(".video").get(0).pause();
            $(this).children(".playpause").fadeIn();
        }
    });


    /*addClass on scroll*/
    (function($) {      
      $.fn.visible = function(partial) {        
          var $t            = $(this),
              $w            = $(window),
              viewTop       = $w.scrollTop(),
              viewBottom    = viewTop + $w.height(),
              _top          = $t.offset().top,
              _bottom       = _top + $t.height(),
              compareTop    = partial === true ? _bottom : _top,
              compareBottom = partial === true ? _top : _bottom;
        
        return ((compareBottom <= viewBottom) && (compareTop >= viewTop));
    };        
    })(jQuery);
    $(window).scroll(function(event) {      
      $(".add_fade").each(function(i, el) {
        var el = $(el);
        if (el.visible(true)) { el.addClass("fadeIn"); } else { /*el.removeClass("fadeIn");*/  }
      });
      $("p").each(function(i, el) {
        var el = $(el);
        if (el.visible(true)) { el.addClass("fade"); } else { /*el.removeClass("fadeIn");*/  }
      });     
    });
    /*end code scroll*/

    /*counter animation*/
    $('.count').each(function () {
        $(this).prop('Counter',0).animate({
            Counter: $(this).text()
        }, {
            duration: 4000,
            easing: 'swing',
            step: function (now) {
                // $(this).text(Math.ceil(now));
               $(this).text(Math.ceil(now).toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
            }
        });
    });


  

      
});
         