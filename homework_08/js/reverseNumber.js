function reverseNumber(x) {
	var Reversednumber = Math.abs(x).toString().split("").reverse().join("");
	var Numbersign = Math.sign(x);
	var result = Numbersign * Reversednumber;
return result;
}