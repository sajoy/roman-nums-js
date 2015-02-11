var romanNum = function(number) {

  var romanString = "";
  var count = 0

  if (number < 4) {
    while (count < number) {
      romanString = romanString + "I";
      count ++;
    }
  } else if (number === 4) {
      romanString = romanString + "IV";
  } else if (number === 5) {
    romanString = romanString + "V"
  } else if (number === 10) {
    romanString = romanString + "X"
  } else if (number === 50) {
    romanString = romanString + "L"
  } else if (number === 100) {
    romanString = romanString + "C"
  } else if (number === 500) {
    romanString = romanString + "D"
  } else {
    romanString = romanString + "M"
  }

  return romanString;
};
