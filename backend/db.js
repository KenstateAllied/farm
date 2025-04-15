const mongoose = require("mongoose");
require("dotenv").config({path: ".config.env"});

const connection = async () => {
  try {
    //const network = await mongoose.connect(process.env.MONGODB_URL, {
      //const network = await mongoose.connect('mongodb+srv://tegonetworks:mutsam1949@cluster0.inalvjw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
        const network = await mongoose.connect('mongodb+srv://tegonetworks:mutsam1949@cluster0.inalvjw.mongodb.net/farming', {

      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("Database connected successfully...");
  } catch (error) {
    console.log({ error: error.message });
  }
};

module.exports = connection;
