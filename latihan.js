const fruit = [
  "fruit",
  "banana",
  "mango",
  "apple",
  "fruit",
  "banana",
  "mango",
  "apple",
  "fruit",
  "banana",
  "mango",
  "apple",
];

for (let i = 0; i < fruit.length; i++) {
  console.log(fruit[i]);
}

if (fruit.length >= 10) {
  fruit.push("Paket Sikat Gigi");
}

console.log(fruit);
