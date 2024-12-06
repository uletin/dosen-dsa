const readline = require("readline");
const input = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const items = [];

const addItem = (item) => {
  items.push(item);
};

const removeItem = () => {
  items.pop();
};

const inputQuestion = () => {
  console.log("Barang Di Dalam Truck", items);

  input.question(
    "Pilih Fitur : \n 1. Tambah Barang \n 2. Ambil Barang \n 3. Keluar Aplikasi \n Pilih Nomor Berapa : ",
    (answer) => {
      if (answer === "1") {
        input.question("Masukkan Nama Barang : ", (item) => {
          addItem(item);
          inputQuestion();
        });
      }
    }
  );
};

inputQuestion();
