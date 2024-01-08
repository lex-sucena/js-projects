const decBtn = document.getElementById("decBtn");
const incBtn = document.getElementById("incBtn");
const resetBtn = document.getElementById("resetBtn");
let counter = document.getElementById("counter");
console.log(typeof counter);
decBtn.addEventListener("click", () => {
  counter.innerHTML = `${parseInt(counter.innerHTML) - 1}`;
});
incBtn.addEventListener("click", () => {
  counter.innerHTML = `${parseInt(counter.innerHTML) + 1}`;
});
resetBtn.addEventListener("click", () => {
  counter.innerHTML = `${parseInt(0)}`;
});

