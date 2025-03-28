/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let buyPrice = prices[0];
    let profit = 0;

    for(let i=1; i<prices.length; i++){
        if(prices[i]<buyPrice){
            buyPrice=prices[i]
        }
        else{
            const currentProfit = prices[i]-buyPrice;
            profit=Math.max(currentProfit, profit)
        }
    }

    return profit;
};