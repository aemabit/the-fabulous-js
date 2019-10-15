let  readlineSync  =  require('readline-sync');

// COLORS
let chalk = require('chalk')

// CHARACTERS

const character = [
    {name: 'Wizard', life: 100, dmg: 50, recover: 30, maxPower: 250},
    {name: 'Knight', life: 150, dmg: 30, recover: 50, maxPower: 150},
    {name: 'Archer', life: 120, dmg: 55, recover: 10, maxPower: 200}
]

const wizard = character[0];
const knight = character[1];
const archer = character[2];

// SELECTORS

let characterToSelect;



// BEGIN THE JOURNEY

console.log(chalk.bold.bgRed('    WELCOME: CONSOLE TO BATTLEQUEST    '));
console.log('Here you go to get a spectacular journey!');
console.log('But first select your character TO BEGIN THE JOURNEY ');
console.log(`-----------------------------------------------------`)
console.log(chalk.cyan(`${character[0].name.toLocaleUpperCase()} LIFE: ${character[0].life} DAMAGE: ${character[0].dmg}`))
console.log(chalk.yellow(`${character[1].name.toLocaleUpperCase()} LIFE: ${character[1].life} DAMAGE: ${character[1].dmg}`))
console.log(chalk.magenta(`${character[2].name.toLocaleUpperCase()} LIFE: ${character[2].life} DAMAGE: ${character[2].dmg}`))
console.log(`-----------------------------------------------------`)
console.log(`Is case sensitive, please put the name in UPPERCASE`)
let selectionCharacter = readlineSync.question('Options: WIZARD, KNIGHT, ARCHER .... ');
console.log(`-----------------------------------------------------`)
// SELECTOR CHARACTERS

const finishSelection = ()=>{
    
    if(selectionCharacter === 'WIZARD'){
        console.log(`Good job you select a ${selectionCharacter} they have a lot damage but have low life`)
        console.log(`-----------------------------------------------------`)
    return characterToSelect = wizard;
    }else if(selectionCharacter === 'KNIGHT'){
        console.log(`Good job you select a ${selectionCharacter} they have a lot of life, to endure extensive battles`)
        console.log(`-----------------------------------------------------`) 
        return characterToSelect = knight;
    }else if(selectionCharacter === 'ARCHER'){
        console.log(`Good job you select a ${selectionCharacter} they have the best precision, for that the best damage in the game`)
        console.log(`-----------------------------------------------------`)
        return characterToSelect = archer;
    }else{
        console.log('Please try again to begin the Journey')
        process.exit()
    }

}

finishSelection(selectionCharacter);

// VALIDATION CHARACTER

// const isWka = ()=> {
// 
//     if( isArcher === 'ARCHER'){
//         isArcher = archer
//         return isArcher;
//     }else if( isKnight === 'KNIGHT'){
//         isKnight = knight
//         return isKnight;
//     }else if( isWizard === 'WIZARD'){
//         isWizard = wizard
//         return isWizard
//     }else{
//         console('what are you?')
//     }
//                 
// }
// 
// isWka(isKnight, isWizard, isArcher);


// CHAPTER ONE:

console.log('Well in this game only have AN OPORTUNITY to win')
console.log('You need take the best way to finish this ADVENTURE')
console.log(`-----------------------------------------------------`)
console.log(chalk.bold.bgRed('THE CHAPTER ONE: THE FOREST'));
console.log(`-----------------------------------------------------`)
console.log('You need pass for this forest and you have three ways')
console.log('If you have a bad selection you can finish this journey so fast!')
console.log('On each road you will have to fight with a TERRIBLE beast in this forest, be careful!')

const terribleBeast = [
    {name: 'Giant Jabali', life: 50, dmg: 50},
    {name: 'Big Foot', life: 100, dmg: 80},
    {name: 'Hydra', life: 200, dmg: 100}
]

const chapterOneRoad = ['Savage Forest', 'Tail Forest', 'Dark Forest']

let chapterOne = readlineSync.keyInSelect(chapterOneRoad, 'Which of these ways will you take?');

console.log('Ok, you take this way the: ' + chapterOneRoad[chapterOne] );

// THE FIRST FIGHT 

let theBeastToFight;

const firstFight = () => {

    if(chapterOneRoad[chapterOne] === chapterOneRoad[0]){
        console.log(`OMG! what is that?.... Oh! is a ${terribleBeast[0].name} have ${terribleBeast[0].life} points of life.`)
        console.log(`-----------------------------------------------------`)
        console.log(chalk.bold.red.bgWhite(`---------------------GO TO FIGHT---------------------`))
    
        return theBeastToFight = terribleBeast[0];     
    }else if(chapterOneRoad[chapterOne] === chapterOneRoad[1]){
        console.log(`OMG! what is that?.... Oh! is a ${terribleBeast[1].name} have ${terribleBeast[1].life} points of life.`)
        console.log(`-----------------------------------------------------`)
        console.log(chalk.bold.cyan.bgWhite(`---------------------GO TO FIGHT---------------------`))
        
        return theBeastToFight = terribleBeast[1]
    }else if(chapterOneRoad[chapterOne] === chapterOneRoad[2]){
        console.log(`OMG! what is that?.... Oh! is a ${terribleBeast[2].name} have ${terribleBeast[2].life} points of life.`)
        console.log(`-----------------------------------------------------`)
        console.log(chalk.bold.black.bgWhite(`---------------------GO TO FIGHT---------------------`))
       
        return theBeastToFight = terribleBeast[2]
    }else{
        console.log('What are you here?')
        process.exit()
    }
}

firstFight(chapterOne)

setTimeout((firstFight) => {
    
}, 3000);

// console.log(theBeastToFight)

// FIGHT RESULTS 

const valueBattle = () => {

characterToSelect.life = characterToSelect.life - theBeastToFight.dmg
theBeastToFight.life = theBeastToFight.life - characterToSelect.dmg

    if(characterToSelect.life > 0 && theBeastToFight.life <= 0){
        console.log(`IMPRESSIVE!! you win the battle but the ${theBeastToFight.name} it hurt you! only left ${characterToSelect.life} points of life `)
        return characterToSelect
    }else if(theBeastToFight.life > 0 && characterToSelect.life <= 0){
        console.log(`OUCH!! you lose the battle the ${theBeastToFight.name} defeat you!... Try again but now you know the road!`)
        process.exit()
    }else if(characterToSelect.life > 0 && theBeastToFight.life > 0){
        console.log(`YOU ARE BRAVE, but still fight with the ${theBeastToFight.name}`)
        return valueBattle()
    }else if(characterToSelect.life <= 0 && theBeastToFight.life <= 0){
        console.log(`THE MOST EPIC BATTLE NEVER SEE!!... But both are DEAD... Try again but now you know the road!`)
        process.exit()
    }else{
        console.log(`NASA! we have a problem here!`)
    }

}

valueBattle(characterToSelect, theBeastToFight)

// // console.log(characterToSelect)

// CHAPTER TWO
console.log(`-----------------------------------------------------`)
console.log('WELL DONE! You pass to the next chapter and you get a NEW POWER!.... THE RECOVER!')
console.log('This power you can use only once time at the final battle. MMMM! for example now!')
console.log(`-----------------------------------------------------`)
let recoverActive;

if (readlineSync.keyInYN('Do you want to use your recovery power now? Pulse Y for yes or N for no')) {
  console.log(`Well done you need recover before that fight with the ${theBeastToFight.name}`);
  recoverActive = characterToSelect.recover;
} else {
  console.log('Its a risk to continue like this ... you dont know what you will find in this CHAPTER');
  recoverActive = 0;
}

// console.log(recoverActive)

const recoverCharacter = () => {
    
    characterToSelect.life = characterToSelect.life + recoverActive
    return characterToSelect
}

recoverCharacter(recoverActive)

// CHAPTER TWO
console.log(`-----------------------------------------------------`)
console.log(chalk.bold.bgRed('CHAPTER TWO: THE MOUNTAIN'))
console.log(`-----------------------------------------------------`)
console.log(`You need pass for this mountain but is so hot inside... WATCH OUT!`)
console.log('Inside the mountain have four ways... or I think so! you need select ONE!')

const mountainCreature = [
    {name: 'Army of Goblins', life: 90, dmg: 24},
    {name: 'Fire Elemental', life: 30, dmg: 80},
    {name: 'Cerberus', life: 200, dmg: 80},
    {name: 'Demon', life: 400, dmg: 300}
]

const chapterTwoRoad = ['Bloody Quagmire', 'Fire Cave', 'Hot Slide', 'Burning Stairs']

let chapterTwo = readlineSync.keyInSelect(chapterTwoRoad, 'Which of these ways will you take?');

console.log('(SUSPENSE)...... That we will find here in The ' + chapterTwoRoad[chapterTwo] );
console.log(`-----------------------------------------------------`)
// THE SECOND FIGHT

let mountCreatureToFight;

const secondFight = () => {

    if(chapterTwoRoad[chapterTwo] === chapterTwoRoad[0]){
        console.log(`I think it's the best option, see the exit very close ... `)
        console.log(`Oh no! they are too many is an ${mountainCreature[0].name} have ${mountainCreature[0].life} points of life.`)
        console.log(`-----------------------------------------------------`)
        console.log(chalk.bold.red.bgWhite(`---------------------GO TO FIGHT---------------------`))
        return mountCreatureToFight = mountainCreature[0];     

    }else if(chapterTwoRoad[chapterTwo] === chapterTwoRoad[1]){
        console.log(`The cave is over but everything smells like burning here ... MMM! A bonfire? `)
        console.log(`NO!!! is a ${mountainCreature[1].name} have ${mountainCreature[1].life} points of life.`)
        console.log(`-----------------------------------------------------`)
        console.log(chalk.bold.black.bgWhite(`---------------------GO TO FIGHT---------------------`))
        return mountCreatureToFight = mountainCreature[1]

    }else if(chapterTwoRoad[chapterTwo] === chapterTwoRoad[2]){
        console.log(`Seriously I think this is the worst way to choose I feel like I'm going to hell`)
        console.log(`I knew, I'm in hell and that is a ${mountainCreature[2].name} have ${mountainCreature[2].life} points of life.`)
        console.log(`-----------------------------------------------------`)
        console.log(chalk.bold.cyan.bgWhite(`---------------------GO TO FIGHT---------------------`))
        return mountCreatureToFight = mountainCreature[2]

    }else if(chapterTwoRoad[chapterTwo] === chapterTwoRoad[3]){
        console.log(`Who chooses to go down some hot stairs? \nWhat's up man? \nWhat are you thinking?`)
        console.log(`Oh men! WE NEED TO RUN!!! RUN...\nis a ${mountainCreature[3].name} have ${mountainCreature[3].life} points of life .`)
        console.log(`-----------------------------------------------------`)
        console.log(chalk.bold.red.bgWhite(`---------------------GO TO FIGHT---------------------`))
        return mountCreatureToFight = mountainCreature[3]

    }else{
        console.log('What are you here?')
        process.exit()
    }
}

secondFight(chapterTwo)

// console.log(mountCreatureToFight)

// FIGHT RESULTS TWO

const valueBattleTwo = () => {

characterToSelect.life = characterToSelect.life - mountCreatureToFight.dmg
mountCreatureToFight.life = mountCreatureToFight.life - characterToSelect.dmg

    if(characterToSelect.life > 0 && mountCreatureToFight.life <= 0){
        console.log(`SO IMPRESSIVE!! You win an epic battle but the ${mountCreatureToFight.name} it hurt you a lot!! only left ${characterToSelect.life} points of life `)
        return characterToSelect
    }else if(mountCreatureToFight.life > 0 && characterToSelect.life <= 0){
        console.log(`@#$!... We can do more, let's do it again \n${mountCreatureToFight.name} defeat you!... Try again but now you know the road!`)
        process.exit()
    }else if(characterToSelect.life > 0 && mountCreatureToFight.life > 0){
        console.log(`Don't give up you can win the fight! VS ${mountCreatureToFight.name}`)
        return valueBattleTwo()
    }else if(characterToSelect.life <= 0 && mountCreatureToFight.life <= 0){
        console.log(`THE MOST EPIC BATTLE NEVER SEE!!... But both are DEAD... Try again but now you know the road!`)
        process.exit()
    }else{
        console.log(`NASA! we have another problem here!`)
    }

}

valueBattleTwo(characterToSelect, mountCreatureToFight)

// console.log(characterToSelect);

// CHAPTER THREE
console.log(`-----------------------------------------------------`)
console.log('Well done! you pass to the next chapter and i know.... your points of life are ${characterToSelect.life}')
console.log(`I can't help you with that, but thanks for your battles, the DMG skill has been UPDATED to MAXPOWER`)
console.log(`JUST NOW! your regular DMG is ${characterToSelect.maxPower} and get the --DON-- of FIRST STRIKE`)
console.log('I think you have an opportuny to complete this journey! but not is EASY')
console.log(`-----------------------------------------------------`)
console.log(chalk.bold.bgRed('CHAPTER THREE: THE UNKNOW'))
console.log(`-----------------------------------------------------`)
console.log(`You survived the battle in the FOREST vs ${theBeastToFight.name}. \nYou survived the battle on the MOUNTAIN vs ${mountCreatureToFight.name}. \nNow you have to fight the UNKNOW and survive`)
console.log(`There is only ONE way and you don't know what you will fight against this time ... YOU HAVE NO CHOICE`)
console.log(`-----------------------------------------------------`)

// READY OR NOT?

if (readlineSync.keyInYN('Are you ready? Pulse Y for yes or N for no')) {
    console.log(`TO THE BATTLE!`);
} else {
    console.log(`There is no other way`)
}
console.log(`-----------------------------------------------------`)
// FIRST WAVE

const firstWave = [
    {name: 'Beholders', life: 100, dmg: 50, description: 'Its a floating meat ball with a large mouth, with deadly magical powers'},
    {name: 'Giant Wurm', life: 150, dmg: 80, description: 'Its a giant worm with a fire inside. If its your turn, you may not be able to tell.'},
    {name: 'Lightning Elemental', life: 280, dmg: 10, description: 'Its so fast you cant see that Elemental but you have the power to kill him!'}
]

let creatureFirstWave;

let randFirstWave = firstWave[Math.floor(Math.random() * firstWave.length)];

const firstWaveBattle = () => {

    if(randFirstWave === firstWave[0]){
        console.log(`${firstWave[0].name}...${firstWave[0].description}`)
        console.log(`-----------------------------------------------------`)
        console.log(chalk.bold.black.bgWhite(`---------------------GO TO FIGHT---------------------`))
        return creatureFirstWave = firstWave[0];     
    }else if(randFirstWave === firstWave[1]){
        console.log(`${firstWave[1].name}...${firstWave[1].description}`)
        console.log(`-----------------------------------------------------`)
        console.log(chalk.bold.green.bgWhite(`---------------------GO TO FIGHT---------------------`))
        return creatureFirstWave = firstWave[1]
    }else if(randFirstWave === firstWave[2]){
        console.log(`${firstWave[2].name}...${firstWave[2].description}`)
        console.log(`-----------------------------------------------------`)
        console.log(chalk.bold.cyan.bgWhite(`---------------------GO TO FIGHT---------------------`))
        return creatureFirstWave = firstWave[2]
    }else{
        console.log('What are you here?')
    }
}

firstWaveBattle(randFirstWave)
// console.log(randFirstWave)
// console.log(creatureFirstWave);

// FIGHT FIRST WAVE 

const valueFirstWave = () => {

    creatureFirstWave.life = creatureFirstWave.life - characterToSelect.maxPower

    if(characterToSelect.life > 0 && creatureFirstWave.life <= 0){
        console.log(`Your NEW POWER DAMAGE has decided the battle vs ${creatureFirstWave.name} celebrate but REMEMBER you only have ${characterToSelect.life} points of life `)
        return characterToSelect
    }else if(creatureFirstWave.life > 0 && characterToSelect.life <= 0){
        console.log(`It's the end \n${creatureFirstWave.name} defeat you!... Try again but now you know the road!`)
        process.exit()
    }else if(characterToSelect.life > 0 && creatureFirstWave.life > 0){
        console.log(`Your damage has not been enough now it's your turn to receive damage from ${creatureFirstWave.name}`)
        characterToSelect.life = characterToSelect.life - creatureFirstWave.dmg
        return valueFirstWave()
    }else if(characterToSelect.life <= 0 && creatureFirstWave.life <= 0){
        console.log(`Has been AWESOME.. But both are DEAD... Try again but now you know the road!`)
        process.exit()
    }else{
        console.log(`NASA! we have another problem here!`)
    }

}

valueFirstWave(characterToSelect, creatureFirstWave)

// SECOND WAVE

// READY OR NOT?
console.log(`-----------------------------------------------------`)
console.log('You have passed THE FIRST WAVE ...')

if (readlineSync.keyInYN('Are you ready for THE SECOND WAVE? Pulse Y for yes or N for no')) {
    console.log(`TO THE BATTLE!`);
} else {
    console.log(`There is no other way`)
}
console.log(`-----------------------------------------------------`)
const secondWave = [
    {name: 'Stone Elemental', life: 200, dmg: 5, description: 'Its a so BIG rock but is slowly'},
    {name: 'Bird of Paradaise', life: 500, maxPower: 500, description: 'Is a stranger Bird... '},
    {name: 'Bearer Of The Heavens', life: 1200, dmg: 10, description: 'It is a giant of solidified lava, he can touch the sky... '},
    {name: 'Argentum Armor', life: 700, maxPower: 80, description: 'Is a stranger artefact... '},
]

let creatureSecondWave;

let randSecondWave = secondWave[Math.floor(Math.random() * secondWave.length)];

const secondWaveBattle = () => {

    if(randSecondWave === secondWave[0]){
        console.log(`${secondWave[0].name}...${secondWave[0].description}`)
        console.log(`-----------------------------------------------------`)
        console.log(chalk.bold.black.bgWhite(`---------------------GO TO FIGHT---------------------`))
        return creatureSecondWave = secondWave[0];  

    }else if(randSecondWave === secondWave[1]){
        console.log(`${secondWave[1].name}...${secondWave[1].description}`)
        if (readlineSync.keyInYN(`The ${secondWave[1].name} It is a gift of nature... NOW! Select Y for more life or N for more power`)) {
            characterToSelect.life = characterToSelect.life + secondWave[1].life
            console.log(`You select more LIFE now yo have ${characterToSelect.life}`);
        } else {
            characterToSelect.maxPower = characterToSelect.maxPower + secondWave[1].maxPower
            console.log(`You select more POWER now your DAMAGE is ${characterToSelect.maxPower}`)
        }
        return characterToSelect

    }else if(randSecondWave === secondWave[2]){
        console.log(`We can't get out of here alive, but I'll fight with all my power until the end`)
        console.log(`${secondWave[2].name}...${secondWave[2].description}`)
        console.log(`-----------------------------------------------------`)
        console.log(chalk.bold.red.bgWhite(`---------------------GO TO FIGHT---------------------`))
        return creatureSecondWave = secondWave[2]

    }else if(randSecondWave === secondWave[3]){
        console.log(`${secondWave[3].name}...${secondWave[3].description}`)
        characterToSelect.life = characterToSelect.life + secondWave[3].life
        characterToSelect.maxPower = characterToSelect.maxPower + secondWave[3].maxPower
        return characterToSelect

    }else{
        console.log('What are you here?')
    }
}

secondWaveBattle(randSecondWave)
console.log(`-----------------------------------------------------`)
//console.log(characterToSelect)
//console.log(creatureSecondWave)
//
// FIGHT SECOND WAVE

const valueSecondWave = () => {

    if(creatureSecondWave === undefined){
        console.log('You have obtained a GIFT I hope it works to complete your adventure ')
        return characterToSelect

    }else if(creatureSecondWave === creatureSecondWave){
        
        creatureSecondWave.life = creatureSecondWave.life - characterToSelect.maxPower

        if(characterToSelect.life > 0 && creatureSecondWave.life <= 0){
            console.log(`Your new POWER DAMAGE has decided the battle vs ${creatureSecondWave.name} celebrate but you only have ${characterToSelect.life} points of life `)
            return characterToSelect
        }else if(creatureSecondWave.life > 0 && characterToSelect.life <= 0){
            console.log(`It's the end \n${creatureSecondWave.name} defeat you!... Try again but now you know the road!`)
            process.exit()
        }else if(characterToSelect.life > 0 && creatureSecondWave.life > 0){
            console.log(`Your damage has not been enough now it's your turn to receive damage from ${creatureSecondWave.name}`)
            characterToSelect.life = characterToSelect.life - creatureSecondWave.dmg
            return valueSecondWave()
        }else if(characterToSelect.life <= 0 && creatureSecondWave.life <= 0){
            console.log(`Has been AWESOME.. But both are DEAD... Try again but now you know the road!`)
            process.exit()
        }else{
            console.log(`NASA! we have another problem here!`)
        }

    }else{
        console.log('Have an error here')
    }

}

valueSecondWave(characterToSelect, creatureSecondWave)
console.log(`-----------------------------------------------------`)
// console.log(characterToSelect)

// THE LAST WAVE

console.log(`You were lucky not to bump into the ${secondWave[2].name} surely is destroying another adventurer like you...`)
console.log(`-----------------------------------------------------`)
console.log('THE LAST WAVE, YOU GO TO FIGHT WITH THE MOST POWERFULL CREATURES IN THE GAME!')

if (readlineSync.keyInYN('Are you ready? Pulse Y for yes or N for no')) {
    console.log(`TO THE BATTLE!`);
} else {
    console.log(`There is no other way`)
}
console.log(`-----------------------------------------------------`)
const lastWave = [
    {name: 'Impervious Great Wurm', life: 900, dmg: 200, description: 'Its the MOST BIGGER WURM never see!, have an armor in all your body!'},
    {name: 'Ancient Dragon', life: 600, dmg: 400, description: 'Its the MOST FURIOUS DRAGON, he only knows how to spit fire ... '},
    {name: 'Balrog', life: 1500, dmg: 500, description: 'Its a the MOST POWERFULL DEMON, have the ability to handle fire and other evil powers'},
    {name: 'Conquering Manticore', life: 800, dmg: 150, description: 'Its the MOST EXOTIC CREATURE never see!, but its a long journey to die here... '}
]

let creatureLastWave;

let randLastWave = lastWave[Math.floor(Math.random() * lastWave.length)];

const lastWaveBattle = () => {

    if(randLastWave === lastWave[0]){
        console.log(`${lastWave[0].name}...${lastWave[0].description}`)
        console.log(`-----------------------------------------------------`)
        console.log(chalk.bold.green.bgWhite(`---------------------GO TO FIGHT---------------------`))
        return creatureLastWave = lastWave[0];

    }else if(randLastWave === lastWave[1]){
        console.log(`${lastWave[1].name}...${lastWave[1].description}`)
        console.log(`-----------------------------------------------------`)
        console.log(chalk.bold.red.bgWhite(`---------------------GO TO FIGHT---------------------`))
        return creatureLastWave = lastWave[1]

    }else if(randLastWave === lastWave[2]){
        console.log(`${lastWave[2].name}...${lastWave[2].description}`)
        console.log(`-----------------------------------------------------`)
        console.log(chalk.bold.black.bgWhite(`---------------------GO TO FIGHT---------------------`))
        return creatureLastWave = lastWave[2]

    }else if(randLastWave === lastWave[3]){
        console.log(`${lastWave[3].name}...${lastWave[3].description}`)
        console.log(`-----------------------------------------------------`)
        console.log(chalk.bold.cyan.bgWhite(`---------------------GO TO FIGHT---------------------`))
        return creatureLastWave = lastWave[3]

    }else{
        console.log('What are you here?')
    }
}

lastWaveBattle(randLastWave)
// FIGHT LAST WAVE

const valueLastWave = () => {
        
    creatureLastWave.life = creatureLastWave.life - characterToSelect.maxPower

    if(characterToSelect.life > 0 && creatureLastWave.life <= 0){
        console.log(`Experience, patience and courage, have paid off war ... \nYou have won your last battle ... for now\n you have defeated ${creatureLastWave.name}`)
        return characterToSelect
    }else if(creatureLastWave.life > 0 && characterToSelect.life <= 0){
        console.log(`I know you gave everything to get here but \n${creatureLastWave.name} defeat you!... Try again but now you know the road!`)
        process.exit()
    }else if(characterToSelect.life > 0 && creatureLastWave.life > 0){
        console.log(`It is the most important battle of your life ... resist the blow of ${creatureLastWave.name}`)
        characterToSelect.life = characterToSelect.life - creatureLastWave.dmg
        return valueLastWave()
    }else if(characterToSelect.life <= 0 && creatureLastWave.life <= 0){
        console.log(`Amazing battle ${characterToSelect.name}\nYou have given everything but your enemy too and both have died in the strait of the mountain\nTry again but now you know the road!`)
        process.exit()
    }else{
        console.log(`NASA! we have another problem here!`)
    }

}
console.log(`-----------------------------------------------------`)
valueLastWave(characterToSelect, creatureLastWave)

// FINAL