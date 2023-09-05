import mongoose from "mongoose";

// Connect to MongoDB
const connecToDb = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('MongoDB connected successfully');
    } catch (error) {
        console.log('Error while connecting to MongoDB', error);
    }
}

export default connecToDb;