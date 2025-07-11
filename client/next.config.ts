// frontend/next.config.js
   module.exports = {
     reactStrictMode: true,
     cssModules: true,
     cssLoaderOptions: {
       importLoaders: 1,
       localIdentName: '[local]__[hash:base64:5]',
     },
   };