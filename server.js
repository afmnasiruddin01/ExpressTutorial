import express from 'express';
import logger from './middleware/logger.js';
import path from 'path';
import posts from './routes/posts.js';
import errorHandler from './middleware/error.js';
import notFoundHandler from './middleware/notFound.js'
// Server created
const app = express();
const PORT = process.env.PORT || 3000;

// Body parser middleware
app.use(express.json()) // this will enable to submit raw json
app.use(express.urlencoded({extended: false})); // this will enable to submit to urlencoded json

app.use(logger); // logger middleware

app.use('/api/posts',posts);


app.use(notFoundHandler); // NotFound middleware
app.use(errorHandler); // Error middleware

// listening the server
app.listen(PORT, (req, res)=>{
    console.log(`Server is running on port ${PORT}`)
})
