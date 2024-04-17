window.onload = function () {
  let input = document.getElementById("qrCodeInput");
  input.setSelectionRange(0, input.value.length);
};

let textGenerateButton = document.getElementById("textGenerateButton");
let qrCodeInput = document.getElementById("qrCodeInput");

qrCodeInput.addEventListener("input", function () {
  textGenerateButton.disabled = this.value === "";
});

// Enable/Disbale Wifi generate button
let wifiGenerateButton = document.getElementById("wifiGenerateButton");
let wifiNetworkName = document.getElementById("wifiNetworkName");
let wifiPassword = document.getElementById("wifiPassword");

wifiNetworkName.addEventListener("input", checkInput);
wifiPassword.addEventListener("input", checkInput);

function checkInput() {
  if (wifiNetworkName.value !== "" && wifiPassword.value !== "") {
    wifiGenerateButton.disabled = false;
  } else {
    wifiGenerateButton.disabled = true;
  }
}

let textButton = document.getElementById("textButton");
let wifiButton = document.getElementById("wifiButton");
let textForm = document.getElementById("textForm");
let wifiForm = document.getElementById("wifiForm");

document
  .getElementById("qrCodeType")
  .addEventListener("click", function (event) {
    switch (event.target.id) {
      case "wifiButton":
      case "wifiButtonIcon":
        textForm.classList.add("hidden");
        wifiForm.classList.remove("hidden");
        break;
      case "textButton":
      case "textButtonIcon":
        textForm.classList.remove("hidden");
        wifiForm.classList.add("hidden");
        break;

      default:
        break;
    }
  });

// Download Button
const imageURL = document.getElementById("qrImage").getAttribute("src");

const textDownloadButton = document.getElementById("textDownloadButton");
const wifiDownloadButton = document.getElementById("wifiDownloadButton");

textDownloadButton.disabled = imageURL === "";
wifiDownloadButton.disabled = imageURL === "";

textDownloadButton.addEventListener("click", function () {
  downloadQRCode();
});

wifiDownloadButton.addEventListener("click", function () {
  downloadQRCode();
});

async function downloadQRCode() {
  if (imageURL.length > 0) {
    try {
      const a = document.createElement("a");
      const response = await fetch(imageURL);
      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
      a.href = url;
      a.download = "qr-code.png";
      a.click();
      a.remove();
      URL.revokeObjectURL(url);
    } catch (err) {
      console.log(err);
    }
  } else {
  }
}
