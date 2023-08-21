// Usage: node showLast.js

const getBeers = require('../data')

function getLastBeer() {
  const data = getBeers()
  return data[data.length - 1]
}

if (getLastBeer()?.name === "All the Leaves are Brown") {
    console.log("Success ✅");
} else {
    console.log("Not quite right");
}
