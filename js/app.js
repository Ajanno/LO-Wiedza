$(document).foundation();

$( document ).ready(function() {
    
    $('.drop-down').on('click', function(event) {
    	event.preventDefault();
    	$('.drop').toggle('slow');
    });

});