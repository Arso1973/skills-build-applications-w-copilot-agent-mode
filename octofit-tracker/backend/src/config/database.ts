import mongoose from 'mongoose';

export const connectDatabase = async () => {
  const connectionString = process.env.MONGODB_URI || 'mongodb://localhost:27017/octofit_db';
  const db = mongoose.connection;

  db.on('error', console.error.bind(console, 'connection error:'));

  await mongoose.connect(connectionString);
  console.log('Connected to octofit_db');

  return db;
};

export default mongoose.connection;
