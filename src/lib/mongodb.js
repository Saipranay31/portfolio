import mongoose from 'mongoose';

// Replace <db_password> with your actual password here directly
const MONGODB_URI = process.env.uri

if (!MONGODB_URI) {
  throw new Error('Please define the MONGODB_URI connection string.');
}

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function connectToDatabase() {
  if (cached.conn) {
    return cached.conn;
  }
  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI).then((mongoose) => {
      return mongoose;
    });
  }
  cached.conn = await cached.promise;
  return cached.conn;
}

export { connectToDatabase };
