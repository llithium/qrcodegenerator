window.onload = function () {
  let input = document.getElementById("qrCodeInput");
  // input.focus();
  input.setSelectionRange(0, input.value.length);
};

let textGenerateButton = document.getElementById("textGenerateButton");
let qrCodeInput = document.getElementById("qrCodeInput");

qrCodeInput.addEventListener("input", function () {
  textGenerateButton.disabled = this.value === "";
});

let wifiGenerateButton = document.getElementById("wifiGenerateButton");
let wifiNetworkName = document.getElementById("wifiNetworkName");
let wifiPassowrd = document.getElementById("wifiPassowrd");

wifiNetworkName.addEventListener("input", function () {
  wifiGenerateButton.disabled = this.value === "";
});

let textButton = document.getElementById("textButton");
let wifiButton = document.getElementById("wifiButton");
let textForm = document.getElementById("textForm");
let wifiForm = document.getElementById("wifiForm");

document
  .getElementById("qrCodeType")
  .addEventListener("click", function (event) {
    switch (event.target.id) {
      case "wifiButton":
        textForm.classList.add("hidden");
        wifiForm.classList.remove("hidden");
        break;
      case "textButton":
        textForm.classList.remove("hidden");
        wifiForm.classList.add("hidden");
        break;

      default:
        break;
    }
    console.log(event.target.id);
  });
