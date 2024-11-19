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
  // Hapus diawal
  items.shift();
};

const inputQuestion = () => {
  console.log("Pasien Di Ruang Tunggu ", items);

  input.question(
    "Pilih Fitur : \n 1. Tambah Pasien \n 2. Panggil Pasien \n 3. Keluar Aplikasi \n Pilih Nomor Berapa : ",
    (answer) => {
      if (answer === "1") {
        input.question("Masukkan Nama Pasien : ", (item) => {
          addItem(item);
          inputQuestion();
        });
      } else if (answer === "2") {
        console.log(
          `Pasien dengan nama ${items[0]}, segera ke customer service`
        );
        getItem();
        inputQuestion();
      }
    }
  );
};

inputQuestion();
