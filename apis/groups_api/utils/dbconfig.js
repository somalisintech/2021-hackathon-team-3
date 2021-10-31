import mongoose from "mongoose"
// Currently locally running database => This will be the URI of the Docker container later
const server = "127.0.0.1:27017"
const database = "shimbiir_sheeko"

export const connectDB = async () => {
    try {
        await mongoose.connect(`mongodb://${server}/${database}`);

        console.log('MongoDB connected!!');
        console.log(process.env.SUPERVAR)
    } catch (err) {
        console.log('Failed to connect to MongoDB', err);
    }
};
