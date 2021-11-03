function palindromeNumber(num){
  if(num < 0) return false;
  return Number(num.toString().split('').reverse().join('')) === num;
}
const num = 2315123;
const res = palindromeNumber(num);
console.log(res);