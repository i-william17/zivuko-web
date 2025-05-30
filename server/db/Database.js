const mongoose = require("mongoose");

const connectDatabase = async () => {
  try {
    await mongoose.connect(process.env.DB_URL, {
      serverSelectionTimeoutMS: 20000,
    });
    console.log("Database Connected");
  } catch (error) {
    console.error("Database connection failed:", error);
    process.exit(1); // Optionally, exit the process if the database connection fails
  }
};
  
module.exports = connectDatabase;
