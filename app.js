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

// Get randomly chosen value from Day Trip choice arrays.
function getChoice(anArray) {
    let random = Math.floor(Math.random() * anArray.length);

    return random;
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

//getUserChoices();
//displayChoices();


// Code for HTML functionality.

function getInitialChoices() {
    let firstDestination = DESTINATION_LOCATIONS[getChoice(DESTINATION_LOCATIONS)];
    let firstDining = DINING_OPTIONS[getChoice(DINING_OPTIONS)];
    let firstTransportation = TRANSPORTATION_OPTIONS[getChoice(TRANSPORTATION_OPTIONS)];
    let firstEntertainment = ENTERTAINMENT_CHOICES[getChoice(ENTERTAINMENT_CHOICES)];

    document.getElementById('destinationSelection').textContent = firstDestination;
    document.getElementById('diningSelection').textContent = firstDining;
    document.getElementById('transportationSelection').textContent = firstTransportation;
    document.getElementById('entertainmentSelection').textContent = firstEntertainment;
}

let buttons = document.getElementsByClassName('optionButton');

for(let i = 0; i < buttons.length; i++) {
    buttons[i].onclick = function() {
        console.log(this.id);
    };
}

getInitialChoices();