$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    let countTo = parseInt($("input#countTo").val());
    let countBy = parseInt($("input#countBy").val());

    if (countTo < 1 || countBy < 1 || isNaN(countTo) === true || isNaN(countBy) === true || countBy > countTo) {
      alert("Please enter a valid number in each field")
    } else {
      let array = [];
      for (let index = countBy; index <= countTo; index += countBy) {
        array.push(index);
      }
      $("#results").text(array.join());
    }
  });
});