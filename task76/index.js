function coinChange(coins, value){
    // the fill() method fills all the elements of an array from a start index to an end index
    // with a static value. Work up to ES6.
    let ways = Array(value+1).fill(0);
    
    // set the first way to 1 because its 0 and there is 1 way to make 0 with 0 coins
    ways[0] = 1;
   
   
    for(let i=0; i<coins.length; i++) {
      for(let j=0; j<ways.length; j++) {
        if(coins[i] <= j) {
              ways[j] = ways[j-coins[i]] + ways[j];
        }      
      }
    }
    return ways[ways.length-1];
  }

  const result = coinChange([1,5,10,25], 2);
  console.log(result);