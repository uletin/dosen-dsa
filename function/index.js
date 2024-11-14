const countScore = (score) => {
  if (score >= 85) {
    console.log("Mendapatkan Nilai A");
  } else if (score >= 70) {
    console.log("Mendapatkan Nilai B");
  } else if (score >= 60) {
    console.log("Mendapatkan Nilai C");
  } else if (score >= 40) {
    console.log("Mendapatkan Nilai D");
  } else {
    console.log("Mendapatkan Nilai E");
  }
};

countScore(30);
