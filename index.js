// server/index.js

const express = require("express");
const data = require('./data.json');
const namor = require("namor");


const PORT = process.env.PORT || 3009;

const app = express();

const newPerson = () => {
    const statusChance = Math.random();
    return {
      firstName: namor.generate({ words: 1, numbers: 0 }),
      lastName: namor.generate({ words: 1, numbers: 0 }),
      age: Math.floor(Math.random() * 30),
      visits: Math.floor(Math.random() * 100),
      progress: Math.floor(Math.random() * 100),
      status:
        statusChance > 0.66
          ? "relationship"
          : statusChance > 0.33
          ? "complicated"
          : "single"
    };
  };

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

app.get("/api", (req, res) => {
    let data = [];
    for (let i = 0; i < 40; i++) {
        data.push(newPerson())
    }
  res.json(data);
});
