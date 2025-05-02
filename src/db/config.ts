import mongoose from "mongoose";

export const initMongoDBConnection = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL!);
    if (conn) console.log('Connected to Mongo Atlas')
    return conn;
  } catch (error) {
    console.log("Error connecting to MongoDB Atlas Cluster:", error)
  }
};