const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

//JSON body
app.use(bodyParser.json());

// flag check endpoint
const FLAG = 'UMBC2025CTF{c4ctur3_th3_f149}';

app.post('/check-flag', (req, res) => {
  const { userInput } = req.body;
  if (userInput && userInput.trim() === "flag") {
    res.json({ result: 'UMBC2025CTF{c4ctur3_th3_f149}' });
  };
  if (userInput && userInput.trim() === FLAG) {
    res.json({ result: 'Congratulations! You found the flag!' });
  } else {
    res.json({ result: 'Try again!' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

