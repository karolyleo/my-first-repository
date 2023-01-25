function sumPrimes(num) {
  let primes = []; let result = 0
 for(let i=1;i<=num;i++){
   primes.push(i);
 }
 let primesFilter = primes.filter(onlyPrime)
 primesFilter.forEach(key => result+=key)
 return result-1
}

sumPrimes(977);

function onlyPrime(num) {
  for (let i = 2; i < num; i++) {
      if (num % i == 0) {
        return 0;
      }
    }
  return Number(num);
}