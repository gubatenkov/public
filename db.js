import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

class DataBase {
  DB_URL = process.env.DB_URI;

  connect = async () => {
    const conn = await mongoose.connect(this.DB_URL, {
      useNewUrlParser: true,
      // useCreateIndex: true,
      useUnifiedTopology: true,
      // useFindAndModify: false,
    });

    console.log(`Connected to MongoDB: ${conn.connection.host}`);
  };

  disconnect = async () => {
    const conn = await mongoose.disconnect(
      console.log('connection to DB was closed')
    );
  };
}

export const db = new DataBase();
