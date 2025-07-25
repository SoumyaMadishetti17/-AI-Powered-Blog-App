import mongoose from "mongoose";

const connectDB = async () => {
    try {
        mongoose.connection.on('connected', () => { console.log('Connected to MongoDB database') });
        await mongoose.connect(`${process.env.MONGODB_URI}/devblogs`)
    }catch (error){
    console.log(error.message)
    }
}

export default connectDB;