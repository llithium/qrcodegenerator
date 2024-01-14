let button = document.getElementById("generateButton");
let input = document.getElementById("qrCodeInput");
input.addEventListener("input", function () {
  button.disabled = this.value === "";
});
