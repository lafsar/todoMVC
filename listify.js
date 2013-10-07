$(document).ready(function() {
  
  $('.new-item').keydown(function(event){
    var submit = event.which;
    if (submit == 13) {
    var text = $('#new-filter-string').val();
      if(text) {
	    $('.filter-string-list')
	    .append("<div class='smallboxnew'><input id='new-toggle' type = 'checkbox'></div><div class='addingitem'>" + text + "</div>");
      }
    }
  });
  $('.filter-string-list').click(function(ev) {
    $(ev.target).remove();
  });

});
