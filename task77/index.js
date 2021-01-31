function minCoinChange(coins, amount) {
    //first let'S sort the coins in ascending order
    coins.sort((a, b) => {return (a-b)});
    let outputArray = [];
   
    //loop starting from the end of the array (big numbers will be checked first)
    for(let i=coins.length-1; i>=0; i--){
      if( (coins[i] <= amount) && (amount-coins[i]>=0)) {
        amount = amount - coins[i];
        outputArray.push(coins[i]);
        //reseting the loop
        i=coins.length;
      } 
      //break point!
      if(amount <= 0) break;
    }
   return outputArray;
}
