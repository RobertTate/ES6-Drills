// Template Literals and Default Parameters Value //

// function favMovie(movie = 'The Room', name = 'world') {
//     console.log(`My name is ${name}, and my favorite move is ${movie}`)
// }

// favMovie('V For Vendetta', 'Bobby');
// favMovie();

// Arrow Functions //

let favMovie = (movie = 'The Room', name = 'world') => console.log(`My name is ${name}, and my favorite move is ${movie}`)

favMovie();


let getFirstName = (name) => {
    return name
}

let bobby = getFirstName('Bobby Tate')
console.log(bobby);

let getSecondName = name => name

let robert = getSecondName('Robert Tate')
console.log(robert);

let getStats = (a, b) => ({
    squaredResult: Math.pow(a, b),
    product: a * b
})

let statSet = getStats(2, 4);

console.log(`${statSet.squaredResult} and ${statSet.product}`)

// Spread Syntax //

let friends = (name, location, favFood) => {
    console.log(name, location, favFood);
}

let arr = ["Paul", "Birmingham", "Kimchi"];

friends(...arr);

let Bobby = 'Bobby'


function parameter(b) {
    let spread = [...b];
    for (i=0; i < b.length; i++) {
        console.log(spread[i]);
    }
};

parameter("Hello World!");
