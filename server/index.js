const express = require('express');
require('dotenv').config()
const UserRouter = require('./routes/user.route.js')
const DoctorRouter = require('./routes/doctor.route.js')
const CategoriesRouter = require('./routes/categories.route.js')
const OrdersRouter = require('./routes/orders.route.js')
const DayRouter = require('./routes/day.router.js')
const PharmacyRouter = require('./routes/pharmacy.route.js')
const ProductRouter = require('./routes/products.route.js')
const AppointementRouter = require('./routes/appointement.route.js')

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
app.use('/api/orders', OrdersRouter)
app.use('/api/day', DayRouter)
app.use('/api/pharmacy',PharmacyRouter)
app.use('/api/product',ProductRouter)
app.use('/api/aivability',AppointementRouter)

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
