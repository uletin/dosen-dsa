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
  items.shift();
};

const inputQuestion = () => {
  console.log("Pasien di lobby", items);

  input.question(
    "Pilih Fitur : \n 1. Tambah Pasien \n 2. Panggil Pasien \n 3. Keluar Aplikasi \n Pilih Nomor Berapa : ",
    (answer) => {
      if (answer === "1") {
        input.question("Masukkan Nama Pasien : ", (item) => {
          addItem(item);
          inputQuestion();
        });
      } else if (answer === "2") {
        removeItem();
        inputQuestion();
      }
    }
  );
};

inputQuestion();
