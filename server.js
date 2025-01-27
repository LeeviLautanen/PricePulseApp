const express = require('express');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;

app.use(bodyParser.json());

app.post('/save-appliance', (req, res) => {
  const data = req.body;
  const filePath = path.join(__dirname, 'appliances.json');

  fs.readFile(filePath, 'utf8', (err, fileData) => {
    if (err) {
      return res.status(500).json({ error: 'Error reading file' });
    }

    let appliances = [];
    if (fileData) {
      appliances = JSON.parse(fileData);
    }

    appliances.push(data);

    fs.writeFile(filePath, JSON.stringify(appliances, null, 2), (err) => {
      if (err) {
        return res.status(500).json({ error: 'Error writing file' });
      }

      res.status(200).json({ message: 'Appliance saved successfully' });
    });
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});