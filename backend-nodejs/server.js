const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/nazwatwojejbazy', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Połączono z MongoDB'))
.catch(err => console.error('Błąd połączenia z bazą:', err));

app.get('/', (req, res) => {
  res.send('Backend działa!');
});

app.listen(PORT, () => {
  console.log(`Serwer działa na porcie ${PORT}`);
});