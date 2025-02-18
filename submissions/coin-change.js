/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
   const minCoinsDp = new Array(amount + 1).fill(Infinity);
    minCoinsDp[0] = 0;

   for(let i=1; i<=amount; i++){
    minCoinsDp[i] = Infinity;

    for(let coin of coins){
        if(coin <= i && minCoinsDp[i-coin] !== Infinity){
            minCoinsDp[i] = Math.min(minCoinsDp[i], 1 + minCoinsDp[i - coin])
        }
    }
   } 
   return minCoinsDp[amount] === Infinity ? -1 : minCoinsDp[amount];
};