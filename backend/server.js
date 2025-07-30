const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());

// TODO: Connect to MongoDB or MySQL

app.get('/', (req, res) => {
  res.send('API running');
});

app.listen(PORT, () => {
  console.log('Backend ready');
});
