const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();

app.use(cors({ optionsSuccessStatus: 200 }));
app.use(express.static(path.join(__dirname, 'public')));
app.get('/', function(req, res) {
  res.send('Hello World');
});

app.get('/api/', function(req, res) {
  let date = new Date();
  res.json({
    unix: date.getTime(),
    utc: date.toUTCString()
  });
});
app.get('/api/:date', function(req, res) {
  let dateString = req.params.date;
  let date;

  if (/^\d+$/.test(dateString)) {
    date = new Date(parseInt(dateString));
  } else {
    date = new Date(dateString);
  }

  if (isNaN(date.getTime())) {
    res.json({ error: 'Invalid Date' });
  } else {
    res.json({
      unix: date.getTime(),
      utc: date.toUTCString()
    });
  }
});

const port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log(`Node.js listening on port ${port} ...`);
  console.log(`Open http://localhost:${port} in your browser.`);
});