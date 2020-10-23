
const isPrime = num => {

 if (num <= 2) return false;

 for (let i = 2; i < num ; i++) {
   if (num % i == 0) return false;
 }
 return true;
}


const sumPrimeNums = (arr) => {
  let sum = 0

  arr.forEach(el => {
    if (isPrime(el)) {
      sum += el;
    }
  })

  return sum;
}

module.exports = { sumPrimeNums, isPrime }

