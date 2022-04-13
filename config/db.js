const mongoose = require("mongoose");
const config = require("config");
const db = config.get("mongoURI");

// Using then/catch
// const connectDB = () => {
//   mongoose
//     .connect(db)
//     .then(() => console.log("MongoDB Connected"))
//     .catch((err) => {
//       console.error(err.message);
//       process.exit(1);
//     });
// };

// Using async/await
const connectDB = async () => {
  try {
    await mongoose.connect(db);
    console.log("MongoDB Connected...");
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
