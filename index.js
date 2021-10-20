/* We're not looking for something too fancy, but you should be able to input your age and 
the distance you're travelling and get your ticket price.

Instructions
- Ask the user for their age and how far they are travelling (in km)
- The price per travelled km will be £0.21
- Junior passengers (under 18) get a 20% discount
- Senior passengers (over 65) get a 40% discount */

const age = prompt("how old are you?");
const distance = prompt("how far are you travelling (in km)?");

const priceKm = 0.21
const juniorDisc = 0.20
const seniorDisc = 0.40

const calc = (distance * priceKm);
console.log(calc)


if (age < 18) { 
    const discountedPriceJunior = (calc - (calc * .20) );
} 
else if (age > 65) {
    const discountedPriceSenior = (calc - (calc * .40));
}

else {

}

console.log(discountedPriceJunior)

/*
const firstWord = prompt("what is your first word?");
const secondWord = prompt("what is your second word?");

console.log(firstWord);
console.log(secondWord);

if (firstWord.length > secondWord.length) {
    console.log("first word is longer");
} else {
    console.log("second word is longer");
} */
