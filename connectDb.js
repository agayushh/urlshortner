import mongoose from "mongoose";

const DATABASE_CONSTANT = "urlShortner";

const connectToDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URL}/${DATABASE_CONSTANT}`
    );
    console.log(
      `mongo database is connected and is running: ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.log(`database not connected due to ${error}`);
    process.exit(1);
  }
};

export { connectToDB };
