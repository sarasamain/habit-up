const express = require('express');
const router = require('./router');
const cors = require('cors');

const app = express();

const PORT = 3003;

app.use(cors()); //remember to change cors to allow only client
app.use(express.json());
app.use(router);

app.listen(PORT, () => {
  console.log(`🚀 🚀 🚀 Server listening at http://localhost:${PORT}`)
});

