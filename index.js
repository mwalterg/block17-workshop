const coffeeMenu = require("./coffee_data.js");
const drinkNames = coffeeMenu.map(drink => drink.name);
console.log(drinkNames);

const inexpensiveDrinks = coffeeMenu.filter(drink => drink.price <= 5);
console.log(inexpensiveDrinks);


const evenDrinks = coffeeMenu.filter(drink => drink.price % 2 === 0);
console.log(evenDrinks);

const totalCost = coffeeMenu.reduce((accumulator, drink) => accumulator + drink.price, 0);
console.log(totalCost);

const seasonalDrinks = coffeeMenu.filter(drink => drink.seasonal);
console.log(seasonalDrinks);

const seasonalWithBeans = seasonalDrinks.map(drink => drink.name + " with imported beans")
console.log(seasonalWithBeans);

