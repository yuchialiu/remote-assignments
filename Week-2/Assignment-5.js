function binarySearchPosition(numbers, target) {
    // your code here
    let start = 0;
    let end = numbers.length-1;

    while ( start <= end ) {
        let middle = Math.floor( (start+end) / 2 );
        if ( numbers[middle] === target ) {
            return middle;
        } else if ( numbers[middle] > target ) {
            end = middle -1;
        } else {
            start = middle +1;
        }
    }
    return -1;
}
console.log(binarySearchPosition([1, 2, 5, 6, 7], 1)); // should print 0
console.log(binarySearchPosition([1, 2, 5, 6, 7], 6)); // should print 3