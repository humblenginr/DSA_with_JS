// Write a function, makeChange, that returns an integer that represents the least number of coins that add up to an amount where the amount is always divisible by 5.
function makeChange(input){
  let no_of_coins = 0;
  let rem = input;
    [25,10,5].some(i => {
      if(rem % i === 0){
        no_of_coins += Math.floor(rem/i);
        return no_of_coins;
        }
      else{
        no_of_coins += Math.floor(rem/i);
        rem = rem%i;
      }
    })
    return no_of_coins;
}

console.log(makeChange(15))

// coin values: 5, 10, 25



// input amount: 40 , output # of coins: 3 (25, 10, 5)

// input amount: 35, output # of coins: 2 (25, 10) 
