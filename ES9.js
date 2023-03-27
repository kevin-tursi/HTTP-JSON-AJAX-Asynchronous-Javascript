// Object spread operator

const animals = {
    tiger: 23,
    lion: 5,
    monkey: 2,
    bird: 40
}

// const { tiger, lion, ...rest } = animals;

const array = [1, 2, 3, 4, 5]

function sum(a, b, c, d, e) {
    return a + b + c + d + e; // returns 15
}

// Now we can do ...

sum(...array) // returns 15 

function objectSpread(p1, p2, p3) {
    console.log(p1)
    console.log(p2)
    console.log(p3)
}

const { tiger, lion, ...rest } = animals;

objectSpread(tiger, lion, rest);




// finally()

const urls = [
    'http://swapi.dev/api/people/1',
    'http://swapi.dev/api/people/2',
    'http://swapi.dev/api/people/3',
    'http://swapi.dev/api/people/4'
]

Promise.all(urls.map(url => {
    return fetch(url).then(response => response.json())
})).then(results => {
    console.log('1', results[0])
    console.log('2', results[1])
    console.log('3', results[2])
    console.log('4', results[3])
}).catch(error => console.log('error', error))
    .finally(() => console.log('extra')); // great for when you want to send something at the end regardless of success or failure





// for await of 


//for of loop reminder

const loopThroughUrls = urls => {
    for (url of urls) {
        console.log(url);
    }
}

const urls2 = [
    'https://jsonplaceholder.typicode.com/users',
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/albums'
]

const getData2 = async function () {
    const arrayOfPromises = urls2.map(url => fetch(url)); // creating an array of fetch promises for each one of these requests
    for await (let request of arrayOfPromises) {
        const data = await request.json();
        console.log(data);
    }
}