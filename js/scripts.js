$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    let countTo = parseInt($("input#countTo").val());
    let countBy = parseInt($("input#countBy").val());

    let array = [];
    for (let index = countBy; index <= countTo; index + countBy) {
      array.push(index);
    }
    
  });
});