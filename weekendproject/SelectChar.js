// const firstWave = [
//     {name: 'Beholders', life: 100, dmg: 50, description: 'Its a floating meat ball with a large mouth, with deadly magical powers'},
//     {name: 'Giant Wurm', life: 150, dmg: 80, description: 'Its a giant worm with a fire inside. If its your turn, you may not be able to tell.'},
//     {name: 'Lightning Elemental', life: 280, dmg: 10, description: 'Its so fast you cant see that Elemental but you have the power to kill him!'}
// ]
// 
// 
// 
// 
// const secondWave = [
//     {name: 'Stone Elemental', life: 200, dmg: 5, description: 'Its a so BIG rock but is slowly'},
//     {name: 'Bird of Paradaise', life: 500, dmg: 500, description: 'Is a stranger Bird... '},
//     {name: 'Bearer Of The Heavens', life: 1000, dmg: 10, description: 'It is a giant of solidified lava, he can touch the sky... '}
// ]
// 
// 
// 
// 
// const lastWave = [
//     {name: 'Impervious Great Wurm', life: 800, dmg: 150, description: 'Its the MOST BIGGER WURM never see!, have an armor in all your body!'},
//     {name: 'Ancient Dragon', life: 650, dmg: 200, description: 'Its the MOST FURIOUS DRAGON, he only knows how to spit fire ... '},
//     {name: 'Balrog', life: 1500, dmg: 300, description: 'Its a the MOST POWERFULL DEMON, have the ability to handle fire and other evil powers'},
//     {name: 'Conquering Manticore', life: 1000, dmg: 100, description: 'Its the MOST EXOTIC CREATURE never see!, but its a long journey to die here... '}
// ]
// 
// // let cont = 0;
// // 
// //     let countTo = setInterval(function(){
// //         console.log('Waiting the FIRST ENEMY.... ')
// //         cont++;
// //         if(cont == 3){
// //             clearInterval(countTo);
// //         }
// //     }, 1000); 
// 
// let randLastWave = lastWave[Math.floor(Math.random() * lastWave.length)];
// console.log(randLastWave)
// 
// let here;
// let map =[
//     '.....rrdr.', //0 This is the MAP LEGEND
//     '....r5ckr.', //1 This is the MAP LEGEND
//     '...r3cc4r.', //2 This is the MAP LEGEND
//     '....rCrr..', //3 This is the MAP LEGEND
//     'wwwwgggwww', //4 This is the MAP LEGEND
//     'w^l1gtg20w', //5 This is the MAP LEGEND
//     'wh<wgggwsw', //6 This is the MAP LEGEND
//     'wabwmmmwww', //7 This is the MAP LEGEND
//     ]
// 
// const locationCheker = () =>{
// 
//     let mapSplit = map[5].split('')
//     here = mapSplit[5]
//     return here
// 
// }
// 
// locationCheker(here)
// console.log(here)

//  console.log(Boolean(true))
//  console.log(Boolean(false))
//  console.log(Boolean("my string"))
//  console.log(Boolean(null))
//  console.log(Boolean(NaN))
//  console.log(Boolean([]))
//  console.log(Boolean({}))

// const character = [
//     {name: 'Wizard', life: 100, dmg: 50, recover: 30, maxPower: 250},
//     {name: 'Knight', life: 150, dmg: 30, recover: 50, maxPower: 150},
//     {name: 'Archer', life: 120, dmg: 55, recover: 10, maxPower: 200}
// ]
// 
// wizard = "wizard"
// knight = "knight"
// archer = "archer"
// 
// characterToSelect = knight
// 
// console.log(`WELL!! You've done it and this does not end here!!` )
// 
// const upgradeChar = () => {
//     if(characterToSelect === wizard){
//         character.push({name: 'Warlock', life: 145, dmg: 80, recover: 120, maxPower: 400})
// 
//     }else if(characterToSelect === knight){
//         character.push({name: 'Berseker', life: 155, dmg: 120, recover: 60, maxPower: 400})
//     }else if(characterToSelect === archer){
//         character.push({name: 'Royal', life: 160, dmg: 100, recover: 80, maxPower: 420})
//     }else{
//         console.log('Are you sure WIN the game?')
//     }
// }
// 
// upgradeChar(characterToSelect)
// console.log(character)
