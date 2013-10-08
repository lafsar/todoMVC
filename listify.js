$(document).ready(function() {
  $('.new-item').keydown(function(event){
    var submit = event.which;
    if (submit == 13) {
    var text = $('#new-filter-string').val();
      if(text) {
	    $('.filter-string-list').append("<div class='addingitem'><div class='smallbox'><input type='checkbox' id='toggle-new'></div>" + text + "</div>");
      }
    }
  });
  
 $('#toggle-new').change(function(ev) {
   console.log('hello');
   var target = $(ev.target);
   console.log(target.is(':checked'));
    if (target.prop('checked'))
    {
      
    }

 //   $(ev.target).css('text-decoration', 'line-through');
  });
  

});
