function to_roman(num) {
  var result = "";
  var decimal = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  var roman = ["M", "CM","D","CD","C", "XC", "L", "XL", "X","IX","V","IV","I"];
  
  for(var i = 0; i <= decimal.length; i++) {
    if (num === 0) {
      return result;
    } else if (num%decimal[i] < num) {
      result += roman[i];
      return result + to_roman(num-decimal[i]);
    }
  }
}

to_roman(12);