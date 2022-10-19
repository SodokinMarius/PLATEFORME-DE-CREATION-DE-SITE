$(document).ready(function(){
    $('.tohide-text-other-p,.tohide-text-first-p,.tohide-text-second-p').hide();
    $('.tohide-text-first-p-footer,.tohide-text-second-p-footer,.tohide-text-other-p-footer').hide();
    
    $(".p-add").css({"background-color":"#4169E1","color":"#FFFFFF"});
    //$('#first-p,#first-p-footer').removeClass('p-add');
    //$('#first-p,#first-p-footer').css({"background-color":"white"});

    $('.tohide-button').hide();

    $('row').css({"background":"transparent"});

      /*$("#first-p").hover(function(){
          $(this).addClass("p-add")
          css("background-color","yellow");
          .removeClass('bg-light');
          $('.tohide-text-first-p').show();
      }, function(){
          $(this).removeClass("p-add")
          .addClass('bg-light');
          $('.tohide-text-first-p').hide();
      });*/
 
      //Contol the scroll event
      $(window).scroll(function(){
        if ($(this).scrollTop() >= 900) {
          $('.tohide-button').show();
        }
        else 
        {
          $('.tohide-button').hide();

        }
      });
  

    $(".first-p").mouseover(function(){
      $(this).addClass('p-add').addClass('bg-primary').addClass('text-start');
      
      $(".first-p i").addClass('text-light').addClass('my-auto');
      $(".first-p a ").removeClass('text-dark').css({'color':'white'}).addClass('fw-bolder');
  
      $('.tohide-text-first-p').show();
      })
      .mouseout(function(){
        $(this).removeClass('p-add').removeClass('bg-primary');

        $(".first-p i").removeClass('text-light').removeClass('my-auto');
        $(".first-p a ").addClass('text-dark').css({'color':'white'}).removeClass('fw-bolder'); 

        $('.tohide-text-first-p').hide();
        });



        $(".second-p").mouseover(function(){
          $(this).addClass('p-add').addClass('bg-primary').addClass('text-start');
          
          $(".second-p i").addClass('text-light').addClass('my-auto');
          $(".second-p a ").removeClass('text-dark').css({'color':'white'}).addClass('fw-bolder');
      
          $('.tohide-text-second-p').show();
          })
          .mouseout(function(){
            $(this).removeClass('p-add').removeClass('bg-primary');
    
            $(".second-p i").removeClass('text-light').removeClass('my-auto');
            $(".second-p a ").addClass('text-dark').css({'color':'white'}).removeClass('fw-bolder'); 
    
            $('.tohide-text-second-p').hide();
            });
    

        $(".other-p").mouseover(function(){
          $(this).addClass('p-add').addClass('bg-primary').addClass('text-start');
          
          $(".other-p i").addClass('text-light').addClass('my-auto');
          $(".other-p a ").removeClass('text-dark').css({'color':'white'}).addClass('fw-bolder');
      
          $('.tohide-text-other-p').show();
          })
          .mouseout(function(){
            $(this).removeClass('p-add').removeClass('bg-primary');
    
            $(".other-p i").removeClass('text-light').removeClass('my-auto');
            $(".other-p a ").addClass('text-dark').css({'color':'white'}).removeClass('fw-bolder'); 
    
            $('.tohide-text-other-p').hide();
            });

          
        
  });