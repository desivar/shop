   // server/index.js
   const express = require('express');
   const mongoose = require('mongoose');
   const dotenv = require('dotenv');
   const productRoutes = require('./routes/productRoutes'); // Import your product routes

   dotenv.config(); // Load environment variables

   const app = express();
   app.use(express.json()); // Middleware to parse JSON requests

   // Use the product routes
   app.use('/api/products', productRoutes);

   const PORT = process.env.PORT || 5500;

   // Connect to MongoDB
   mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
     .then(() => {
       console.log('MongoDB Connected');
       app.listen(PORT, () => {
         console.log(`Server is running on port ${PORT}`);
       });
     })
     .catch(err => console.error('MongoDB Connection Error:', err));
   