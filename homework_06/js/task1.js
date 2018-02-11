window.onload = function() {
	var a = prompt('Enter first side');
	var b = prompt('Enter second side');
	var c = prompt('Enter third side');
	var A = parseInt(a);
	var B = parseInt(b);
	var C = parseInt(c);
	var squareA = A*A;
	var squareB = B*B;
	var squareC = C*C;
	var Firstside = A+B;
	var Secondside = A+C;
	var Thirdside = B+C;
	var p=(A+B+C)/2;
	var square = Math.sqrt(p*(p-A)*(p-B)*(p-C));
	Check();

	function Check() {
		if (a > 0 && b > 0 && c > 0) {
			console.log(square.toFixed(2));
			Triangletype();
		} else {
			console.log('Wrong data');
		}
	}


	function Triangletype() {
		if (A == B && A == C) {
			console.log('Your triangle is Equilateral');
		}	
		else if (A == B && A != C || A == C && A != B || B == C && A != B) {
			console.log('Your triangle is Isosceles');
		}	
		else if (Math.pow(A, 2) + Math.pow(B, 2) === Math.pow(C, 2) || Math.pow(B, 2) + Math.pow(C, 2) === Math.pow(A, 2) || Math.pow(A, 2) + Math.pow(C, 2) === Math.pow(B, 2)) {
		console.log('Your triangle is Right');
		}
		else if (A != B != C) {
			console.log('Your triangle is Scalene');
		}
}
}