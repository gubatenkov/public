import app from './app.js';
import dotenv from 'dotenv';
import { db } from './db.js';

// basic configuration
dotenv.config();
const PORT = process.env.PORT ?? 5000;

const start = async () => {
  try {
    // connect to DB
    await db.connect();
    // starting server
    app.listen(PORT, console.log(`Server:${PORT} is running...`));
  } catch (err) {
    console.log(err.message);
    db.disconnect();
  }
};

start();
