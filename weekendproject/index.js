let  readlineSync  =  require('readline-sync');

// CHARACTERS

const character = [
    {name: 'wizard', life: '100', dmg:'50', recover:'30', maxPower: '200'},
    {name: 'knight', life: '150', dmg:'30', recover:'50', maxPower: '100'},
    {name: 'archer', life: '120', dmg:'55', recover:'5', maxPower: '160'}
]

const wizard = character[0];
const knight = character[1];
const archer = character[2];

// SELECTORS

let isWizard;
let isKnight;
let isArcher;

// BEGIN THE JOURNEY

console.log('Welcome to this fabulous game...');
console.log('Here you go to get a spectacular journey!');
console.log('But first select your character TO BEGIN THE JOURNEY ');

let selectionCharacter = readlineSync.question('Options: WIZARD, KNIGHT, ARCHER .... ');

// SELECTOR CHARACTERS

const finishSelection = ()=>{
    

    if(selectionCharacter === 'WIZARD'){
        console.log(`Good job you select a ${selectionCharacter} they are powerfull and have a lot damage but have low life`)
    return isWizard = selectionCharacter;
    }else if(selectionCharacter === 'KNIGHT'){
        console.log(`Good job you select a ${selectionCharacter} they have a lot life and have the best recover in the game`)   
        return isKnight = selectionCharacter;
    }else if(selectionCharacter === 'ARCHER'){
        console.log(`Good job you select a ${selectionCharacter} they have the best presicion, for that the best damage in the game`)
        return isArcher = selectionCharacter;
    }else{
        console.log('Please try again to begin the Journey')
        let selectionCharacter = readlineSync.question('Options: WIZARD, KNIGHT, ARCHER .... ');
        return selectionCharacter
    }
    
}

finishSelection(selectionCharacter);

// VALIDATION CHARACTER

const isWka = ()=> {

    if( isArcher === 'ARCHER'){
        isArcher = archer
        return isArcher;
    }else if( isKnight === 'KNIGHT'){
        isKnight = knight
        return isKnight;
    }else if( isWizard === 'WIZARD'){
        isWizard = wizard
        return isWizard
    }else{
        console('what are you?')
    }
                
}

isWka(isKnight, isWizard, isArcher);

console.log(isWizard);

