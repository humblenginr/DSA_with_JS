// Unique Sort Algorithm
const uniqueSort = (arr) => {
	const uniqueArray = [arr[0]];
	const obj = {};
	obj[arr[0]] = true
	//O(n)
  for (i = 0; i < arr.length; i++){
		if(!obj[arr[i]]){
			obj[arr[i]] = true;
			uniqueArray.push(arr[i])
		}
	}
	//O(n log(n))
	return uniqueArray.sort((a,b) => a-b)
}

console.log(uniqueSort([3,9,32,32,22,1,2,2,2,3,1,5]))
