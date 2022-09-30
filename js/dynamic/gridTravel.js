let memo = {};
const gridTravel = (m, n) => {
  if (memo[m]) return memo[m];
  if (memo[n]) return memo[n];
  if (m === 1 && n === 1) return 1;
  if (!m || !n) return 0;
  memo = { ...memo, [m]: gridTravel(m - 1, n), [n]: gridTravel(m, n - 1) };
  // memo[m] = gridTravel(m - 1, n);
  // memo[n] = gridTravel(m, n - 1);
  return memo[m] + memo[n];
}

gridTravel(14, 5);


const gridTravelUpdated = (m, n) => {
  const key = `${m},${n}`;
  if (memo[key]) return memo[key];
  if (m === 1 && n === 1) return 1;
  if (!m || !n) return 0;
  memo[key] = gridTravelUpdated(m - 1, n) + gridTravelUpdated(m, n - 1);
  return memo[key];
}

console.log(gridTravelUpdated(4, 9));
console.log({ memo });
/*__________
  |  |  |  |
  __________
*/
