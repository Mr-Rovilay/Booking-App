import express from 'express';
import connectDB from "./db/db.js";
import dotenv  from 'dotenv';
import cors from 'cors';
import authRoute from "./routes/authRoute.js"; 

const PORT = process.env.PORT || 5000;

dotenv.config() 
const app = express();


app.use(express.json()); 
  app.use(express.urlencoded({ extended: true }));
  app.use(cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
    allowedHeaders: ["Content-Type", "Authorization"],
  }));
  


  app.use("/api/auth", authRoute)



  connectDB().then(() => {
    app.listen(PORT, () => {
      console.log(`Server listening on port ${PORT}`);
    });

  }).catch(err => {
    console.error("Failed to connect to the database", err);
  });