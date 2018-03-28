
var numberDecoder = function(number, base) {
  var numberArray = number.split("").reverse();
  var numberSum = 0;
  for (var index = 0; index < numberArray.length; index ++) {
      numberSum += parseInt(numberArray[index]) * Math.pow(base, index);
  }
  return numberSum;
}

//jQuery user interface logic here
$(document).ready(function () {
  var base;
  $("form#baseform").submit(function(event) {
    base = parseInt($("#base").val());
    var pattern = base - 1;
    $("#inputdiv").empty();
    $("#inputdiv").append("<input id='input' type='text' pattern='[0-" + pattern + "]*' required>");
    $("#number").show();
    event.preventDefault();
  });

  $("form#number").submit(function(event){
    var input = $("#input").val();
    var output = numberDecoder(input,base);
    $("#result").text(output);
    $("#result").show();
    event.preventDefault();
  });
});
