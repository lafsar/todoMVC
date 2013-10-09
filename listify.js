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
	      var len = $('.addingitem').length;
        $('.toggle').change(function(ev) {
          var target = $(ev.target);
          if ($(target).prop('checked'))
          {
            $('.addingitem')
            .css('text-decoration', 'line-through');
            $('.toggle-new')
            .prop('checked', true);
            var newd = 0;
          $('#todo-count').html('<strong>'+ newd +'</strong> items left');
          }
          else
          {
            $('.addingitem')
            .css('text-decoration', 'none');
            $('.toggle-new')
            .prop('checked', false);
            $('#todo-count').html('<strong>'+ len +'</strong> items left');
          }
        });
        $('.toggle-new').change(function(ev) {
          var target = $(ev.target);
          if ($(target).prop('checked'))
          {
            $(this)
            .parents('.addingitem')
            .css('text-decoration', 'line-through');
            len--;
            $('#todo-count').html('<strong>' + len +'</strong> items left');
          } 
          else
          {
            $(this)
            .parents('.addingitem')
            .css('text-decoration', 'none');
            len++;
            $('#todo-count').html('<strong>'+ len +'</strong> items left');
          }
        });
      }
      $('#todo-count').html('<strong>'+ len +'</strong> items left');
    }
  });
});

