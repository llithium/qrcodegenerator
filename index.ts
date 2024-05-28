import express from "express";
import bodyParser from "body-parser";
import axios from "axios";

const app = express();
const port = 3000;

const apiURL = "https://api.qrserver.com/v1/create-qr-code/?data=";

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.get("/generate", (req, res) => {
  res.redirect("/");
});

app.post("/generate", async (req, res) => {
  try {
    const qrCodeURL: string = req.body.qrCodeURL;
    const response = await axios.get(apiURL + `${qrCodeURL}&size=1000x1000`);
    const result = response.config.url;
    res.render("index.ejs", {
      qrCode: result,
      qrCodeContent: qrCodeURL,
    });
  } catch (error: unknown) {
    console.error("Failed to make request:", (error as Error).message);
    res.render("index.ejs", {
      error: (error as Error).message,
    });
  }
});

app.post("/generatewifi", async (req, res) => {
  try {
    const qrCodeURL = `WIFI:S:${req.body.wifiNetworkName};T:${req.body.encryption};P:${req.body.wifiPassowrd};;`;
    const response = await axios.get(apiURL + `${qrCodeURL}&size=1000x1000`);
    const result = response.config.url;
    const returning = true;
    res.render("index.ejs", {
      qrCode: result,
      netWorkName: req.body.wifiNetworkName,
      password: req.body.wifiPassowrd,
      returning: returning,
    });
  } catch (error: unknown) {
    console.error("Failed to make request:", (error as Error).message);
    res.render("index.ejs", {
      error: (error as Error).message,
    });
  }
});

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
