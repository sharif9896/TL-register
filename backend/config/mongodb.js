import mongoose from "mongoose";

const mongodb = async () => {
  mongoose.connection.on('connected', () => {
    console.log("DB Connected..");
  });
  await mongoose.connect(`mongodb+srv://sharifrayan952:shar98969492if@cluster0.1xcqdq2.mongodb.net/registerDB`)
};
export default mongodb;
