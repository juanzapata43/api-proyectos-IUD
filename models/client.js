import mongoose from 'mongoose';
const { Schema } = mongoose;

const ClientSchema = Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    creationDate: { type: Date, default: Date.now },
    updateDate: { type: Date }
  });