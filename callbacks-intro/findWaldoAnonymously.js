const findWaldo = function(names, found) {
  names.forEach((item, i) => {
    let name = names[i];
    if (name === "Waldo") {
      found([i]);
    }
  }
)};

findWaldo(["Alice", "Bob", "Waldo", "Winston"], function(index) {
  console.log(`Found Waldo at ${index}!`)
});