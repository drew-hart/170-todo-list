// Check off specific todos by clicking
$('ul').on('click', 'li', function(){
  $(this).toggleClass('completed')
});

// click on X to delete todos
$('ul').on('click', "span", function(event) {
  $(this).parent().fadeOut(500, function(){
      $(this).remove();
  })
  // prevent event from bubbling. No parent handlers will be notified
  event.stopPropagation();
});

