//document ready
$(document).ready(function(){
console.log("hi im jquery");

$('#form').submit(function(event){
    event.preventDefault();
    $.post('/calculate', $(this).serialize(), function(data){
          console.log("Returned Data: " + data);
          $("#sum").val(data);
    });
  });
});
