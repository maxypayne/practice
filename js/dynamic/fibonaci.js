let count = 0;
// const dib = (n, which) => {
//   count += 1;
//   console.log({[which]: n, count})
//   if (n <= 1) return;
//   dib(n - 1, 'first');
//   dib(n - 1, 'second');
// }
//
//
// dib(5);

// dib(4);
//    dib(3);
//      dib(2);
//        dib(1);
//        dib(1);
//      dib(2);
//        dib(1);
//        dib(1);
//    dib(3);
//      dib(2);
//        dib(1);
//        dib(1);
//      dib(2);
//        dib(1);
//        dib(1);
// dib(4);
//    dib(3);
//      dib(2);
//        dib(1);
//        dib(1);
//      dib(2);
//        dib(1);
//        dib(1);
//    dib(3);
//      dib(2);
//        dib(1);
//        dib(1);
//      dib(2);
//        dib(1);
//        dib(1);


const fib = (n) => {
  if (n <= 2) return 1;
  return fib(n - 1) + fib(n - 2);
}

// fib(7);

// const fibMemo = (n, memo = {}) => {
//   console.log({n});
//   if (memo[n]) return memo[n];
//   if (n <= 2) return 1;
//   memo[n] = fibMemo(n - 1, memo) + fibMemo(n - 2, memo);
//   return memo[n];
// }
let memo = {};
const fibMemo2 = (n) => {
  count += 1;
  if (memo[n]) return memo[n];
  console.log({ n, count });
  if (n <= 2) return 1;
  memo[n] = fibMemo2(n - 1) + fibMemo2(n - 2);
  return memo[n];
}

fibMemo2(7);
console.log(memo)
/*
fib(7)
  fib(6)
    fib(5)
      fib(4)
        fib(3)
          fib(2)
          fib(1)
        fib(2)
      fib(3)
        fib(2)
        fib(1)
    fib(4)
      fib(3)
        fib(2)
        fib(1)
      fib(2)
  fib(5)
    fib(4)
      fib(3)
        fib(2)
        fib(1)
      fib(2)
    fib(3)
      fib(2)
      fib(1)
 */
