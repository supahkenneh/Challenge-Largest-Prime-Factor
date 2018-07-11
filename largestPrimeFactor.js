exports.largestPrimeFactor = function (n) {
  var primeNumber = 0;

  let primeArr = [];
  let i = 2;

  while (i <= n) {
    if (n % i === 0) {
      n = n / i;    
      primeArr.push(i);
    } else {
      i++
    }
  }
  primeNumber = primeArr.pop();
  return primeNumber;
};

