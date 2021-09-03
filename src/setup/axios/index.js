var a = [1, [2], [[3]], [[[4]]]];

// flaten the array
// don't use flat() function 

a.reduce((acc, val) => acc.concat(val))
console.log(a);