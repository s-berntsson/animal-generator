import { animals } from './components/animals';

let random: number = Math.floor(Math.random() * animals.length)

const animalText = (animal: any) => {
    let message = `I know a ${animal.age}-year-old ${animal.type} named ${animal.name} with ${animal.color} fur.`;
    console.log(message)
}

animalText(animals[random]);