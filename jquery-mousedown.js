$( "#whichkey" ).on( "mousedown", function( event ) {
  $( "#log" ).html( event.type + ": " +  event.which );
});