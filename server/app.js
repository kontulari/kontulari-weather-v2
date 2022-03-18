import cors from "cors";
import express from "express";
import fetch from "node-fetch";

const app = express();

app.use(cors());

app.get("/", async (req, res) => {
  const baseURL = "https://www.metaweather.com/api/location";
  const { location } = req.query;
  if (!location) {
    res.send({
      error: 'Insira uma localização como parâmetro de busca. As localizações suportadas podem ser encontradas em: https://www.metaweather.com/map/'
    })
  }
  try {
    let response = await fetch(`${baseURL}/search/?query=${location}`, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    const woeid = data.length ? data[0].woeid : null;
    if (!woeid) {
      return res.send({
        error: `${location} não foi encontrada. As localizações suportadas podem ser encontradas em: https://www.metaweather.com/map/`
      });
    }
    response = await fetch(`${baseURL}/${woeid}`, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    const body = await response.json();
    console.log(body);
    return res.send(body);
  } catch (error) {
    console.error(error);
  };
});

app.listen(8080, (req, res) => {
  console.log("API is running at port 8080");
});
