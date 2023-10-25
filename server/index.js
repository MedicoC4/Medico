const express = require('express');
require('dotenv').config()
const cors = require('cors')
const app = express();
const port = 1128; // You can choose any available port
app.use(express.json());
require("./database/index.js")



app.use(express.json());
app.use(cors())


// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
