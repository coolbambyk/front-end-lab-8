var charactersMap = {a: "o", c: "d", t: "g"}
function cypherPhrase(obj, str) {
	var newStr = getTransformedArray(str.split(""), function(char){
		if (obj[char]) {
			char = obj[char];
		}
		return char;
	});
	return newStr.join("");
}
console.log(cypherPhrase(charactersMap, "kitty cat"));