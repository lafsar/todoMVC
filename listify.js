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
	      "<div class='txts'></div><input type='text' class='edit-item'>" +
	      "</div><div class='txt'>" + text + "</div></div>");
	      updatecount();
	     
        $('.toggle').change(function(ev) {
          var target = $(ev.target);
           if ($(target).prop('checked'))
           {
            $('.addingitem')
            .addClass('completed');
            $('.toggle-new')
            .prop('checked', true);
            updatecount();
           }
           else
           {
            $('.addingitem')
            .removeClass('completed');
            $('.toggle-new')
            .prop('checked', false);
            updatecount(); 
           }
            
        });  
        $('.toggle-new').change(function(ev) {
          var target = $(ev.target);
         if ($(target).prop('checked'))
          {
            $(this)
            .parents('.addingitem')
            .addClass('completed');
            updatecount();
          }
          else {
            $(this)
            .parents('.addingitem')
            .removeClass('completed');
            updatecount();
          }
        
        });

      }
    }
  });
$(document).on('mouseenter', '.addingitem',  function(){
       
 $(this).prepend('<span class="delete">&#215</span>');
         }).on('mouseleave', '.addingitem', function() {
        $('span').remove('.delete');
         });
  
        $(document).on('click', '.delete', function(){
           $(this).parents('.addingitem').remove();
          updatecount();
        
         });

 function updatecount () {
  var remaining = $('.addingitem').not('.completed');
  $('.remaining').text(remaining.length + ' items left');
  var completebutton = $('.completed').length;
   $('#clear-completed').text("Complete (" + completebutton + ")"); 
}
  
 

    $('.show-all').click(function showall () {
    $('.filter-string-list').removeClass('show-active show-complete');
   
  });
   $('.show-active').click(function showactive () {
    $('.filter-string-list').removeClass('show-complete');
    $('.filter-string-list').addClass('show-active');
  });
   $('.show-complete').click(function showcomplete () {
    $('.filter-string-list').removeClass('show-active');
    $('.filter-string-list').addClass('show-complete');
  });
  $('#clear-completed').click(function clearcomplete() {
    $('.addingitem').remove('.completed');
    updatecount();
  });

  function beginEdit (ev) {
    var todo = $(ev.target).parents('.addingitem');
    // adding a class to display
    todo.addClass('edit');
    // set value of input to the current label
    todo.find('input.edit-item')
      .val($(ev.target).text())
      // focus the input
      .focus();
    return false;
  }
  function endEdit () {
    // get value of the input
    var todo = $('.addingitem.edit');
    var value = todo.find('input.edit-item').val();
    // update the label to the new value
    todo.find('.txt').text(value);
    // hide the input
    todo.removeClass('edit');    

    
  }
  function editKeypress (ev) {
    // end edit if enter key pressed
    if(ev.which === 13) {
    endEdit();
    }
  }
  
  $('.filter-string-list').on('dblclick', '.addingitem .txt', beginEdit);
  $('.filter-string-list').on('blur', '.addingitem input.edit-item', endEdit);
  $('.filter-string-list').on('keypress', '.addingitem input.edit-item', editKeypress);

  
});


//on hover, add text item &#215; to addingitem
//if click on &#215;, then remove parents

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
