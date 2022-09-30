const decrease = (x, y) => {
  if (x * y < 1_048_576) return { x, y };
  return decrease(x - 10, (x - 10) / ( x / y));
}

console.log(decrease(1200, 5900));
console.log(decrease(4500, 1360));
