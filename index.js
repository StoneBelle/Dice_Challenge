
//Generates a random number for each player
randomNumber1 = Math.random();
randomNumber1 = randomNumber1 * 6;  
randomNumber1 = Math.floor(randomNumber1);
randomNumber1 ++ ;


randomNumber2 = Math.floor(Math.random() * 6 ) + 1

// Changes image of dice for each player
let p1_dice = "images/dice" + randomNumber1 + ".png";
let p2_dice = "images/dice" + randomNumber2 + ".png";

document.querySelector('.img1').setAttribute("src", p1_dice);
document.querySelector('.img2').setAttribute("src", p2_dice);


// let image1 = document.querySelector("img")[0];
// image1.setAttribute("src", p1_dice);