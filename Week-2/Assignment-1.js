
function max(numbers) {
// your code here, for-loop method preferred
    let maxOne = 0;
    for ( let i = 0; i < numbers.length; i++ ) {
        if ( numbers[i] > numbers[maxOne] ) {
            maxOne = i;
        }
    }
        return numbers[maxOne];
}


function findPosition(numbers, target) {
// your code here, for-loop method preferred
	let position = -1;
    for ( let i = 0; i < numbers.length; i++ ) {
        if ( numbers[i] === target ) {
			position = i;
			break;
		}  
    }
    return position;
}


console.log(max([1, 2, 4, 5])); // should print 5
console.log(max([5, 2, 7, 1, 6])); // should print 7
console.log(findPosition([5, 2, 7, 1, 6], 5)); // should print 0
console.log(findPosition([5, 2, 7, 1, 6], 7)); // should print 2
console.log(findPosition([5, 2, 7, 7, 7, 1, 6], 7)); // should print 2 (the first position)
console.log(findPosition([5, 2, 7, 1, 6], 8)); // should print -1