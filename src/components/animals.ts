interface Animal {
    type: string;
    name: string;
    age: number;
    color: string;
}

let cat: Animal = {
    type: 'cat',
    name: 'Milou',
    age: 7,
    color: 'orange'
}

let dog: Animal = {
    type: 'dog',
    name: 'Iris',
    age: 1,
    color: 'white'
}

let gerbil: Animal = {
    type: 'gerbil',
    name: 'Nisse',
    age: 2,
    color: 'black'
}

export const animals: Array<any> = [cat, dog, gerbil];





