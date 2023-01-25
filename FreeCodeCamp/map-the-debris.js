function orbitalPeriod(arr) {
  const GM = 398600.4418;
  const earthRadius = 6367.4447;

  return arr.map(({ name, avgAlt }) => {
    const earth = earthRadius + avgAlt;
    const orbitalPeriod = Math.round(2 * Math.PI * Math.sqrt(Math.pow(earth, 3)/GM)); //the formula according to Kepler's Third Law 
    return {name, orbitalPeriod};
  });
}

orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);

orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);