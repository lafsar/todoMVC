$(document).ready(function() {
  
  $('.new-item').keydown(function(event){
    var submit = event.which;
    //document.write(submit);
    if (submit == 13) {
   
    var text = $('#new-filter-string').val();
      //if(text) {
        //document.write(text);
	    $('.filter-string-list').append("<div class='addingitem'><div class='smallbox'></div>" + text + "</div>");
   //   }
   
    }
    //return false;
    
  });
  $('.filter-string-list').click('li', function(ev) {
    $(ev.target).remove();
  });

});
