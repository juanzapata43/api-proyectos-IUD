import mongoose from 'mongoose';

require('dotenv').config();
const MONGO_URI = process.env.MONGO_URI;

const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  } catch (error) {
    console.error('Conexión con BD erronea:', error.message);
    process.exit(1); 
  }
};

module.exports = connectDB;
