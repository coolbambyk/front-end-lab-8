function getFilteredArray(arr, func) {
	var newArr = [];
	forEach(arr, function(el){
		if (func(el)) {
			newArr.push(el);
		}
	})
	return newArr;
}
function predicateFunction(x) { 
return x>3;
}
console.log(getFilteredArray([1, 7, 20], predicateFunction))