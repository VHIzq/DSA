const minus = () => {
  let a = 5;
  let b = 1;
  let result = 0;

  while (a > b) {
    b++;
    result++;
  }
  console.log("Resta: ", result);
};

const multiply = (a, b) => {
  let total = 0;
  while (b > 0) {
    b--;
    total += a;
  }
  console.log("Result: ", total);
};

const cubic = (base, exp) => {
  let acc = 1;
  while (exp > 0) {
    acc *= base;
    exp--;
  }
  console.log(acc);
};

const divide = (divisor, dividiendo) => {
  let acc = 0;
  let coc = 0;

  if (dividiendo < divisor) {
    console.log("Divisor debe ser menor que el dividendo");
    return;
  }

  while (acc < dividiendo) {
    acc += divisor;
    coc++;
  }
  console.log("Division: ", coc);
};

const factorial = (base) => {
  let acc = 1;
  while (base > 0) {
    acc *= base;
    base--;
  }
  console.log(`Factorial: ${acc}`);
};

const isPrimeNum = (num) => {
  let isPrime = true;
  //* Optimizations
  for (let index = 2; index <= num / 2 && isPrime; index++) {
    return num % index === 0 ? !isPrime : isPrime;
  }

  if (isPrime) {
    console.log("Is prime");
  } else {
    console.log("Is not prime");
  } 
};

console.log(isPrimeNum(100));
