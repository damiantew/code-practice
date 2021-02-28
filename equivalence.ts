let things = [ "dog", "moose", "dog", "cat", "moose", "cat"];
let sortedThings = things.sort();

// types are breaking in my vscode terminal, but I think these should be:
// let eqFn = (a: string, b: string): any
let eqFn = (a, b) => (
    a === b && `Match: ${a} : ${b}`
);

// types are breaking in my vscode terminal, but I think these should be:
// let partition = (things: string[])
let partition = (things) => {
    return (
        things.map((thing, i) => (
            (i+1) < things.length && eqFn(things[i], things[i+1])
        ))
    )
};

console.log(partition(sortedThings));

// Code graveyard & problem description

// console.log(eqFn());
// let result = `Result is: ${things.filter(thing => thing === things[0])}`;
// console.log(`First is ${things[0]}, then is ${things[1]}`),

/* 
write a function partition that takes:
 - an array
 - an equivalence function eqFn
 
 and groups the elements of the array into groups such that:
 - within each group the equivalence function returns true for every pair of elements
*/