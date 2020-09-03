const express = require("express");
const router = require("./router");
const cors = require("cors");
const db = require("./models");

const app = express();

const PORT = 3003;

app.use(cors()); //remember to change cors to allow only client
app.use(express.json());
app.use(router);

(async () => {
  try {
    await db.sequelize.sync();
    app.listen(PORT);
    console.log(`🚀 🚀 🚀 Server listening at http://localhost:${PORT}`); // eslint-disable-line no-console
  } catch (e) {
    console.error("Error connecting to the db 😢", e); // eslint-disable-line no-console
  }
})();
