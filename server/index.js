const express = require('express');
const app = express();
const userRoutes = require('./routes/userRouter')
const cors = require('cors');

const PORT = process.env.PORT || 3000;


//Middlewares
app.use(express.json());
app.use(cors());

//Routes
app.use('/', userRoutes)

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})