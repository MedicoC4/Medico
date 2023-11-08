const express = require('express');
require('dotenv').config()
const UserRouter = require('./routes/user.route.js')
const DoctorRouter = require('./routes/user.route.js')
const CategoriesRouter = require('./routes/categories.route.js')
const ProductsRouter = require('./routes/product.route.js')
const cors = require('cors')
const app = express();
const port = 1128; 
app.use(express.json());
require("./database/index.js")
const swaggerUi = require('swagger-ui-express');


app.use('/swagger', swaggerUi.serve, swaggerUi.setup(null, { swaggerOptions: { url: '/swagger.json' } }));

app.use(express.json());
app.use(cors())

app.use('/api/user', UserRouter)
app.use('/api/doctor', DoctorRouter)
app.use('/api/Categories', CategoriesRouter)
app.use('/api/Product', ProductsRouter)
// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
