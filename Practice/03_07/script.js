/**
 * Practice: Building objects
 *
 * - Create JavaScript objects based on objects in your current environment.
 * - Give each object an identifiable name.
 * - Create properties to describe the objects and set their values.
 * - Find an object that has another object inside of it to create a nested object.
 * - Test your objects in the browser console by accessing the entire object and its specific properties.
 */

const Shirt = {
  name: "Everyday Shirt",
  size: ["M", "L", "XL"],
  color: ["grey", "blue", "black"],
  pocketNum: [1, 2, 3],
  length: { [1]: 26, [2]: 28, [3]: 30 },
  vNeck: false,
  openNeck: true,
  toggleNeck: function () {
    this.openNeck = true;
    this.vNeck = false;
  },
  toggleLength: function (newLengths) {
    for (let key in newLengths) {
      if (Object.prototype.hasOwnProperty.call(newLengths, key)) {
        this.length[key] = newLengths[key];
      }
    }
  },
};

// Example usage of the Shirt object
console.log(Shirt);
console.log(`Shirt name: ${Shirt.name}`);
Shirt.toggleNeck(true);
console.log(`vNeck: ${Shirt.vNeck}`);
Shirt.toggleLength({ 4: 31, 5: 32, 6: 33 });
console.log(`New lengths: ${JSON.stringify(Shirt.length)}`);

// Example usage of the Shirt object
console.log(Shirt);
console.log(`Shirt name: ${Shirt.name}`);
Shirt.toggleNeck();
console.log(`vNeck: ${Shirt.vNeck}`);
Shirt.toggleLength({ 4: 31, 5: 32, 6: 33 });
console.log(`New lengths: ${JSON.stringify(Shirt.length)}`);
