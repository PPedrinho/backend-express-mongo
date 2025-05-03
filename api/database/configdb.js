import mongoose from "mongoose";

const connectDB = async () => {
  try {
    mongoose.set("strictQuery", true);
    await mongoose.connect(process.env.MONGO_URI_LOCAL, {
        dbName: process.env.mongo_db_Name,
    });
    console.log('MongoDB conectado com sucesso!');
  } catch (error) {
    console.error('Erro ao conectar com o MongoDB', error);
    process.exit(1);
  }
}

export default { connectDB };
