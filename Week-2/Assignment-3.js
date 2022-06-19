function count(input) {
    // your code here
    let obj  = {};
    for ( let i in input ) {
        let key = input[i];
        if (key in obj == false) {
            obj[key] = 0 ;
        }
        obj[key] = obj[key]  + 1;
    } 
    return obj;
}

let input1 = ["a", "b", "c", "a", "c", "a", "x"];
console.log(count(input1));

// should print {a:3, b:1, c:2, x:1}
function groupByKey(input) {
    // your code here
    let obj = {};
    for ( i=0; i<input.length; i++) {
        let element = input[i] ;
        if ( obj[element.key] == false ) { 
            element.key = 0;
        } 
        obj[element.key] = obj[element.key] + element.value;
    }

    return obj;
}

let input2 = [
    { key: "a", value: 3 },
    { key: "b", value: 1 },
    { key: "c", value: 2 },
    { key: "a", value: 3 },
    { key: "c", value: 5 },
];
console.log(groupByKey(input2));
// should print {a:6, b:1, c:7}