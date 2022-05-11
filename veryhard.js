// VERY HARD: You are given coins of different denominations and a total amount of money amount. 
// Write a function to compute the fewest number of coins that you need to make up that amount. If that 
// amount of money cannot be made up by any combination of the coins, return -1.
let coins = [1,2,5];
amount = 11

 

//so close to understanding just not there yet ...
function coinRemains (coins, amount){
    if (amount == 0) {
        return amount;
    }
    
    if (coins.length == 1) {    
        if (amount % coins[0] == 0) {
            return amount / coins[0];
        } else {
            return -1;
        }
    }
    
        coins.sort
     numberOfWays = 0; 
    
    for ( i = coins.length - 1; i >= 0; i--) {
        if (coins[i] <= amount) {
            numberOfWays += (amount / coins[i]); 
            amount -= (coins[i] * (amount / coins[i]));
        }
    }
     
    return numberOfWays == 0 ? -1 : numberOfWays;
}
console.log (coinRemains())


