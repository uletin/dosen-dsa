// Stack adalah tumpukan, yang memiliki teknik LIFO -> Last In First Out
const readline = require("readline");

const input = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let texts = [];

const addPasien = (text) => {
  texts.push(text);
};

const removePasien = () => {
  texts.pop();
};

const inputQuestion = () => {
  checkingStack();
  const lastIndex = texts.length - 1;
  input.question(
    "\n Pilih Fitur Yang Disediakan \n 1. Tambah Antrian \n 2. Panggil Pasien \n 3. Keluar Aplikasi \n Pilihanmu nomor berapa :  ",
    (inputValue) => {
      if (inputValue === "3") {
        console.log("Kamu keluar aplikasi");
        input.close();
      } else if (inputValue === "2") {
        console.log(
          "Pasien Dengan Nama",
          texts[0],
          "Silahkan Menuju Ke Customer Service"
        );
        removePasien();
        inputQuestion();
      } else {
        input.question("Tambah Antrian : ", (inputValue) => {
          addPasien(inputValue);
          inputQuestion();
        });
      }
    }
  );
};

const checkingStack = () => {
  if (texts.length === 0) {
    console.log("Sekarang Belum Ada Antrian");
  } else {
    console.log("Antrian", texts);
  }
};

inputQuestion();
