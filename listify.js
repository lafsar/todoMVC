$(document).ready(function() {
  $('.new-item').keydown(function(event) {
    var submit = event.which;
    if (submit == 13)
    {
      var text = $('#new-filter-string').val();
      $('#new-filter-string').val('');
      if(text)
      {
        $('.filter-string-list')
	      .append("<div class='addingitem'><div class='smallbox'>" +
	      "<input type='checkbox' class='toggle-new'>" +
	      "</div><div class='txt'>" + text + "</div></div>");
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
   
      $('#todo-count').html('<strong>'+ len +'</strong> items left');
      }
    }
    

    
  });
  
  $(document).on('mouseenter', '.addingitem',  function(){
      //console.log($(this).val());
         $(this).prepend('<span class="delete">&#215</span>');
         console.log($(this).text());
   }).on('mouseleave', '.addingitem', function() {
        $('span').remove('.delete');
  });    

});


//on hover, add text item &#215; to addingitem
//if click on &#215;, then remove addingitem and all children

//make a var template that contains an object of html tags
//use .find() to find the tag , add text, then .end() to escape from label
//so that .append() will append the correct element
/*var app = {
addTask:
togglestatus:
toggleAll:
beginedittask:
endEdittask:
deleteTask:
filterTasks: {'all, active, completed'};
clearCompleted:
updateCount
};*/
//clone hidden elements in html
//chaine .append('<Span>').text()
