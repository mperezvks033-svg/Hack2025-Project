const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

const REAL_FLAG = "UMBC2025CTF{c4ctur3_th3_f149}";

app.use(express.static('public'));
app.use(express.json());

app.post('/check-flag', (req, res) => {
  let data = '';
  req.on('data', chunk => { data += chunk; });
  req.on('end', () => {
    const { userInput } = JSON.parse(data);
    if (userInput === "flag") {
      res.json({ result: REAL_FLAG });
    } else {
      res.json({ result: "Try again!" });
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
