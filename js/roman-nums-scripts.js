var romanNum = function(number) {

  var Level3 = "I";
  var Mid3 = "V";
  var Level2 = "X";
  var Mid2 = "L";
  var Level1 = "C";
  var Mid1 = "D";
  var Level0 = "M";

  var romanString = "";
  var count = 0;

  var stringToInt = "";

  var numbers = number.toString().split("");

  if (numbers.length < 4) {
    while (numbers.length < 4) {
      numbers.unshift(0);
    }
  }

  numbers = numbers.map(function(number, index, array) {
    return parseInt(number);
  });

  numbers.forEach(function(number, idx) { //starting with thousands
// debugger;

    var level = "";
    var midLevel = "";
    var nextLevel = "";

    if (idx === 0) {
      level = Level0;
      midLevel = "";
      nextLevel = "";
    } else if (idx === 1) {
      level = Level1;
      midLevel = Mid1;
      nextLevel = Level0;
    } else if (idx === 2) {
      level = Level2;
      midLevel = Mid2;
      nextLevel = Level1;
    } else if (idx === 3) {
      level = Level3;
      midLevel = Mid3;
      nextLevel = Level2;
    }

    if (number < 4) {
      while (count < number) {
        romanString = romanString.concat(level);
        count ++;
      }
    } else if (number === 4) {
      romanString = romanString.concat(level).concat(midLevel);
    } else if (number === 5) {
      romanString = romanString.concat(midLevel);
    } else if (number > 5 && number < 9) {
      romanString = romanString.concat(midLevel);
      while (count < (number - 5)) {
        romanString = romanString.concat(level);
        count ++;
      }
    } else if (number === 9) {
      romanString = romanString.concat(level).concat(nextLevel);
    } else {

    }
    count = 0;
  });
  return romanString;
};


$(document).ready(function() {
  $("form#roman-num").submit(function(event) {
    var number = parseInt($("input#number").val());
    var result = romanNum(number);

  $(".results").text(result);
  $("#result").show();

  event.preventDefault();
  });

});
