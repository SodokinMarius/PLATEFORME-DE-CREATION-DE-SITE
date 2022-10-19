$(document).ready(function(){
    $('.tohide-text-other-p,.tohide-text-first-p,.tohide-text-second-p').hide().removeClass('p-add');
    $('.tohide-text-first-p-footer,.tohide-text-second-p-footer,.tohide-text-other-p-footer').hide();
    
    $('#first-p,#first-p-footer').removeClass('p-add');
    $('#first-p,#first-p-footer').css({"background-color":"white"});

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
        if ($(this).scrollTop() >= 750) {
          $('.tohide-button').show();
        }
        else 
        {
          $('.tohide-button').hide();

        }
      });
  

    $("#first-p").mouseover(function(){
      $(this).addClass('p-add');
      $('.tohide-text-first-p').show();
      })
      .mouseout(function(){
        $(this).removeClass('p-add');
        $('#first-p i').addClass('text-primary').removeClass('text-light');
        $('.tohide-text-first-p').hide();
        });

$("#second-p").mouseover(function(){
    $(this).addClass('p-add');
  
    $('.tohide-text-second-p').show();

    })
    .mouseout(function(){
        $(this).removeClass('p-add');;
        $('.tohide-text-second-p').hide();
        });
    

        $("#other-p").mouseover(function(){
        $(this).addClass('p-add');
        $('.tohide-text-other-p').show();
        })
        .mouseout(function(){
            $(this).removeClass('p-add');;
            $('.tohide-text-other-p').hide();
            });


            //Footer event
            $("#first-p-footer").mouseover(function(){
              $(this).addClass('p-add');
              $('.tohide-text-first-p-footer').show();
              })
              .mouseout(function(){
                  $(this).removeClass('p-add');;
                  $('.tohide-text-first-p-footer').hide();
                  });
          
                  $("#second-p-footer").mouseover(function(){
                    $(this).addClass('p-add');
                    $('.tohide-text-second-p-footer').show();
                    })
                    .mouseout(function(){
                        $(this).removeClass('p-add');;
                        $('.tohide-text-second-p-footer').hide();
                        });
          
              $("#other-p-footer").mouseover(function(){
              $(this).addClass('p-add');
              $('.tohide-text-other-p-footer').show();
              })
            .mouseout(function(){
                $(this).removeClass('p-add');;
                $('.tohide-text-other-p-footer').hide();
                });
        
  });