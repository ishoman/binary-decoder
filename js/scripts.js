var binaryDecoder = function(number) {
  var binaryArray = number.split("").reverse();
  var binarySum = 0;
  for (var index = 0; index < binaryArray.length; index ++) {
    if (binaryArray[index] === "1") {
      binarySum += Math.pow(2, index);
    }
  }
  return binarySum;

}







//jQuery user interface logic here
$(document).ready(function () {
  $("form#binary").submit(function(event) {
    var input = $("#input").val();
    var output = binaryDecoder(input);
    $("#result").text(output);
    $("#result").show();
    event.preventDefault();
  });
});
