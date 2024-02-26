import express from "express";
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';
import routes from './router/productrouter.js';
import imagerouter from'./router/imagerouter.js';

const app = express();

// Load environment variables from the .env file
dotenv.config();

// Define the port number
const PORT = process.env.PORT || 3000;

// Middleware configuration
app.use(express.json());
app.use(bodyParser.json());

// CORS configuration
app.use(cors({
  origin: "http://localhost:4200",
  methods: ['GET', 'POST', 'PATCH', 'DELETE', 'PUT'],
  allowedHeaders: 'Content-Type, Authorization, Origin, X-Requested-With, Accept'
}));

// Define a route handler for the root path
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Use routes for the "/api" path
app.use('/api', routes);
app.use('/', imagerouter);

// Connect to MongoDB database using Mongoose
const connectMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log('MongoDB Connected');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

// Start the server on the specified port
app.listen(PORT, () => {
  connectMongoDB();
  console.log(`Server started on port ${PORT}`);
});
