var binaryDecoder = function(number) {
  var binaryArray = number.split("").reverse();
  var binarySum = 0;
  for (var index = 0; index < binaryArray.length; index ++) {
      binarySum += parseInt(binaryArray[index]) * Math.pow(2, index);
    }
  }
  return binarySum;

}

var ternaryDecoder = function(number) {
  var ternaryArray = number.split("").reverse();
  var ternarySum = 0;
  for (var index = 0; index < ternaryArray.length; index ++) {
      ternarySum += parseInt(ternaryArray[index]) * Math.pow(3, index);
  }
  return ternarySum;

}





//jQuery user interface logic here
$(document).ready(function () {
  $("form#binary").submit(function(event) {
    var input = $("#input").val();
    var base = $("#base").val();
    var output = ternaryDecoder(input);
    $("#result").text(output);
    $("#result").show();
    event.preventDefault();
  });
});
