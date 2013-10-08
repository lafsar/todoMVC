$(document).ready(function() {
  $('.new-item').keydown(function(event) {
    var submit = event.which;
    if (submit == 13)
    {
    var text = $('#new-filter-string').val();
      if(text)
      {
	    $('.filter-string-list')
	    .append("<div class='addingitem'><div class='smallbox'><input type='checkbox' class='toggle-new'></div>" + text + "</div>");
       $('.toggle').change(function(ev) {
         var target = $(ev.target);
         if ($(target).prop('checked'))
         {
         $('.addingitem')
         .css('text-decoration', 'line-through');
         $('.toggle-new')
         .prop('checked', true);
         }
         else
         {
         $('.addingitem')
         .css('text-decoration', 'none');
         $('.toggle-new')
         .prop('checked', false);
         }
       });
       $('.toggle-new').change(function(ev) {
        var target = $(ev.target);
        if ($(target).prop('checked'))
        {
          $(this)
          .parents('.addingitem')
          .css('text-decoration', 'line-through');
        } else
          $(this)
          .parents('.addingitem')
          .css('text-decoration', 'none');
       });
      }
    }
  });
});
