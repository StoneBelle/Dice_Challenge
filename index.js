
//Generates a random number 
var randomNumber1 = Math.random()

randomNumber1 = randomNumber1 * 6;  // 
randomNumber1 = Math.floor(randomNumber1);
randomNumber1 ++ ;

var dice_p1 = "images/dice" + randomNumber1 + ".png";


alert(dice_p1);
document.querySelector('img1').setAttribute("src", dice_p1);


