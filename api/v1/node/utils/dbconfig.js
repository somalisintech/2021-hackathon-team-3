import mongoose from "mongoose"
// Currently locally running database => This will be the URI of the Docker container later
const server = "127.0.0.1:27017"
const database = "shimbiir_sheeko"

export const connectDB = async () => {
    try {
        // to access the database
       // "mongodb://localhost:47017" <-- outside of docker
       // "mongodb://mongo:27017" <--- inside docker container

        //ENV VARIABLE  called MONGOURL
        // if env is empty
        // set mongoURL to "mongodb://localhost:47017"   <-- outside docker container
        // if it's not empty, pass along b/c it means docker has set it
        // no username/password required
        await mongoose.connect(`mongodb://${server}/${database}`);

        console.log('MongoDB connected!!');
    } catch (err) {
        console.log('Failed to connect to MongoDB', err);
    }
};
