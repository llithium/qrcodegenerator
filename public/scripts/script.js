window.onload = function () {
  var input = document.getElementById("qrCodeInput");
  // input.focus();
  input.setSelectionRange(0, input.value.length);
};

let button = document.getElementById("generateButton");
let input = document.getElementById("qrCodeInput");
input.addEventListener("input", function () {
  button.disabled = this.value === "";
});
