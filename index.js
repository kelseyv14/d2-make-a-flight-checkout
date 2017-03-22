$(document).ready(function() {
$('h1').on('click', function() {
        $(this).remove();
    });


//modal 
  $('#showModalButton').on('click', function() {
        $('#modal').removeClass('hidden');
    });

//close modals
 


 $('.overlay-close').on('click', function(e) {
        $('#modal').addClass('hidden');
    });


});