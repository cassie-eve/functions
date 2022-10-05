const findWaldo = function(names, found) {
  names.forEach((item, i) => {
    let name = names[i];
    if (name === "Waldo") {
      found([i]);
    }
  }
)};

const actionWhenFound = function(index) {
  console.log(`Found Waldo at index ${index}!`);
};

findWaldo(["Alice", "Bob", "Billy", "Waldo", "Winston"], actionWhenFound);