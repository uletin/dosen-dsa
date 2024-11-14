const input = 15;

for (let i = 1; i <= input; i++) {
  const mod3 = i % 3 === 0;
  const mod5 = i % 5 === 0;

  if (mod3 & mod5) {
    console.log("Fizz Buzz");
  } else if (mod3) {
    console.log("Fizz");
  } else if (mod5) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}
