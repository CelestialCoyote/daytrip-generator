'use strict';


// Arrays for random choices.
const DESTINATION_LOCATIONS = [
    'London',
    'Amsterdam',
    'Madrid',
    'Stockholm',
    'Paris',
    'Prague',
    'Rome'
];

const DINING_OPTIONS = [
    'a Steakhouse',
    'Italian Cuisine',
    'French Cuisine',
    'Chinese Cuisine',
    'Mexican Cuisine',
    'a Biergarten',
    'Fast Food',
    'a Pub'
];

const TRANSPORTATION_OPTIONS = [
    'Walking Tour',
    'Rental Car',
    'Airplane',
    'Bus',
    'Boat'
];

const ENTERTAINMENT_CHOICES = [
    'the Cinema',
    'the Opera',
    'a Nightclub',
    'the Ballet',
    'Gambling',
    'a Sporting Event'
];

// Array to hold user choices. Default values.
let userChoices = [
    'destination',
    'restaurant',
    'transportation',
    'entertainment'
];


// Functions.

// Random generator function.
function getRandomInt(maxNumber) {
    return Math.floor(Math.random() * maxNumber);
}

// Get randomly chosen value from Day Trip choice arrays.
function getChoice(anArray) {
    //let choice = getRandomInt(anArray.length);
    return getRandomInt(anArray.length);
    //console.log(`Randomly selected option: ${anArray[choice]}`);
}

// Allow user to see random choice and accept or choose again.
function selectOptions(option, anArray) {
    let isSatisfied = false;
    let selection = '';

    while(isSatisfied === false) {
        selection = anArray[getChoice(anArray)];
        let userChoice = prompt(
            `Your randomly selected ${option} is: ${selection}.  Select again? (Y or N)`).toUpperCase();
        if(userChoice === 'N') {
            isSatisfied = true;
        }
    }
    return selection;
}

// Get choices from user by user.
function getUserChoices() {
    userChoices[0] = selectOptions('destination', DESTINATION_LOCATIONS);
    userChoices[1] = selectOptions('dining option', DINING_OPTIONS);
    userChoices[2] = selectOptions('mode of transportaion', TRANSPORTATION_OPTIONS);
    userChoices[3] = selectOptions('entertainment choice', ENTERTAINMENT_CHOICES);

    alert('All options now selected.');
}

function displayChoices() {
    console.log('Here is the completed Day Trip itineraty you have chosen.');
    console.log(`Your chosen destination is: ${userChoices[0]}`);
    console.log(`Your chosen dining option is: ${userChoices[1]}`);
    console.log(`Your chosen mode of transportation is: ${userChoices[2]}`);
    console.log(`Your chosen form of entertainment is: ${userChoices[3]}`);
    console.log('Enjoy your Day Trip.');
}

getUserChoices();
displayChoices();