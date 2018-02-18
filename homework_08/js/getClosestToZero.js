function getClosestToZero () {
	let x = Math.abs(arr[0]);
	for(let i = 0, len = arr.length; i < len; i++) {
    	if(Math.abs(arr[i]) < number) {
      x = arr[i];
    	}
	}
	return x;
}