//Expressjs là một framework được xây dựng trên nền tảng của Nodejs. Nó cung cấp các tính năng mạnh mẽ để phát triển web hoặc mobile. Expressjs hỗ trợ các method HTTP và midleware tạo ra API vô cùng mạnh mẽ và dễ sử dụng.
const express = require('express');
const mongoose = require('mongoose');
const {MONGO_URI} = require('./config');
// routes
const productsRoutes = require('./routes/api/products');
const categoryRoutes = require('./routes/api/category');

const app = express();
app.use(express.json());
//connect to mongodb 
mongoose.connect(MONGO_URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})
    .then(() => console.log('Mongodb connected'))
    .catch(err => console.log(err));

//user routes 
app.use('/api/products',productsRoutes)
app.use('/api/categories',categoryRoutes)
const PORT = process.env.PORT || 5000;

app.listen(PORT,() => console.log(`Server run at port ${PORT}`)); 
