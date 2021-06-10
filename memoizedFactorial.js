const calculateFactorial = (n,cache) => {
  if(n===1) return 1
  if(!cache[n-1]) cache[n-1] = calculateFactorial(n-1,cache);
  return n*cache[n-1];
}

const memoFactorial = (n) => {
  const cache={1 : 1};
  return (n) => {
  if (!cache[n]) cache[n] = calculateFactorial(n,cache);
  return cache[n];
  }

}
const returnedFunction = memoFactorial()
console.log(returnedFunction(process.argv[2]))
