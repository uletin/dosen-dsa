const fruit = ["banana", "apple", "watermelon"];

//Cara hitung panjang array
const fruitLength = fruit.length;

// Mendapatkan anggota "apple"
const apple = fruit[1];

for (let i = 0; i < fruitLength; i++) {
  if (fruit[i] === "banana") {
    console.log("Ya, Banana ada");
    fruit.push("Jantung Pisang");
  }
  console.log(fruit[i]);
}

console.log(fruit);
