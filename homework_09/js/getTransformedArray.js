function getTransformedArray(arr, func) {
	var newArr = [];
	forEach(arr, function(el){
		newArr.push(func(el));
	})
	return newArr;
}
function increment(x) { 
return x+1;
}
console.log(getTransformedArray([1, 7, 20], increment)); 