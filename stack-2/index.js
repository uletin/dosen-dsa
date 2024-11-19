// import input readline
const readline = require("readline");
const input = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

//membuat variable items, valuenya array kosong []
const items = [];

const addItem = (itemName) => {
  items.push(itemName);
};

const getItem = () => {
  items.pop();
};

const inputQuestion = () => {
  console.log("Barang Di Dalam Truck ", items);

  input.question(
    "Pilih Fitur : \n 1. Tambah Barang \n 2. Ambil Barang \n 3. Keluar Aplikasi \n Pilih Nomor Berapa : ",
    (answer) => {
      if (answer === "1") {
        input.question("Masukkan Nama Barang : ", (item) => {
          addItem(item);
          inputQuestion();
        });
      } else if (answer === "2") {
        console.log(`Karyawan Mengambil Barang ${items[items.length - 1]}`);
        getItem();
        inputQuestion();
      }
    }
  );
};

inputQuestion();
