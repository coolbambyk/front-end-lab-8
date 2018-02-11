window.onload = function() {
	var a = prompt('How much Euro?');
	var b = prompt('How much Usd?');
	var Euro = 33.2324;
	var USD = 27.1240
	var YourEuro = a*Euro.toFixed(3);
	var YourUSD = b*USD.toFixed(3);
	var USDToEuro = Euro/USD;
	console.log(a + ' euros are equal ' + YourEuro + ' UAH, ' + b +  ' euros are equal ' + YourUSD + ' UAH, ' + 'one euro is equal ' + USDToEuro.toFixed(3) + ' dollars');
}