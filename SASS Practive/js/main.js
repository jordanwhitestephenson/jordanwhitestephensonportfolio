$(document).ready(function() {
    $('.logo').hide().fadeIn(5500);
    $(document).ready(function() {

        $("#about").click(function() {
            $('html, body').animate({
                scrollTop: $("#goHere").offset().top
            }, 2000);
        });
    });

    $('.modal').modal({
    dismissible:false,
    startingTop: '4%', // Starting top style attribute
    endingTop: '4%', // Ending top style attribute
      });



    $('#modal2').on('click', function() {

      $('#flashRhinoSite').on('click', function() {
          window.location("https://www.w3schools.com");
          $('#modal2').modal('hide');
      });
    });


});
