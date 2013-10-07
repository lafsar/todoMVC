$(document).ready(function() {
  
  $('.new-item').keydown(function(event){
    var submit = event.which;
    if (submit == 13) {
    var text = $('#new-filter-string').val();
      if(text) {
	    $('.filter-string-list').append("<div class='addingitem'><div class='smallbox'></div>" + text + "</div>");
      }
    }
  });
  $('.filter-string-list').click(function(ev) {
    $(ev.target).remove();
  });

});
