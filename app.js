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

app.post("/generate", async (req, res) => {
  if (req.body.qrCodeURL.length > 0) {
    try {
      console.log(req.body);
      const qrCodeURL = req.body.qrCodeURL;

      const response = await axios.get(apiURL + `/${qrCodeURL}/&size=350x350`);
      const result = response.config.url;
      console.log(response.config.url);
      res.render("index.ejs", {
        qrCode: result,
        qrCodeContent: qrCodeURL,
      });
    } catch (error) {
      console.error("Failed to make request:", error.message);
      res.render("index.ejs", {
        error: error.message,
      });
    }
  } else {
    res.redirect("/");
  }
});

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
