import mongoose from "mongoose";

mongoose.set("strictQuery", false);

const connectDb = async (): Promise<void> => {
  const uri = process.env.MONGODB_URI;

  if (!uri) {
    console.error("❌ MONGODB_URI not defined in environment variables.");
    process.exit(1);
  }

  try {
    const conn = await mongoose.connect(uri);
    console.log(`✅ Database Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error("❌ Failed to connect to MongoDB:", error);
    process.exit(1);
  }
};

export default connectDb;
