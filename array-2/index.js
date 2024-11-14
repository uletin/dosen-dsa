//Soal Products
// Buatlah sebuah variable Products yang memiliki value array ['topi', 'baju', 'celana']
// Jika panjang products lebih dari 10, maka mendapatkan paket sikat gigi

let products = ["topi", "baju", "celana"];
products.push("handphone");
products.push("topi");
products.push("jacket");
products.push("kacamata");
products.push("rinso");
products.push("snack");
products.push("snack");
products.push("sabun");
products.push("cemilan");
products.push("pengharum");

for (i = 0; i < products.length; i++) {
  console.log(products[i]);
}
if (i >= 10) {
  products.push("sikat gigi");
}
console.log(products);
