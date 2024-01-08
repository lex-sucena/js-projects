const clickBtn = document.getElementById("clickBtn");
const clrCode = document.getElementById("clrCode");
clickBtn.addEventListener("click", changeBgClr);
function changeBgClr() {
  document.body.style.backgroundColor = `#${generateRandomClr()}`;
  clrCode.textContent = `#${generateRandomClr()}`;
}
function generateRandomClr() {
  let randomColor = Math.floor(Math.random() * 16777215).toString(16);
  return randomColor;
}
