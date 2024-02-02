import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/posts.js';

const app = express();

app.use('/posts', postRoutes);
//montează routerul postRoutes la calea '/posts' în cadrul 
//aplicației Express, astfel încât toate rutele definite în 
//postRoutes vor fi accesibile sub forma '/posts/<ruta-definită-în-postRoutes>'.

const CONNECTION_URL = 'mongodb+srv://user:password123456@cluster0.i5ujjjr.mongodb.net/?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, {})
  .then(() => {
    app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
  })
  .catch((error) => console.error(`Error connecting to MongoDB: ${error.message}`));
