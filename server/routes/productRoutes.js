   // server/routes/productRoutes.js
   router.post('/sample', async (req, res) => {
     const sampleProduct = new Product({
       name: "Sample Product",
       price: 29.99,
       description: "This is a sample product.",
       images: ["sample-image-url.jpg"], // Replace with an actual image URL if needed
       featured: true,
       sellerName: "Sample Seller",
       reviewCount: 10
     });

     try {
       const savedProduct = await sampleProduct.save();
       res.status(201).json({ success: true, data: savedProduct });
     } catch (err) {
       res.status(400).json({ success: false, error: err.message });
     }
   });
   