import mongoose from "mongoose";

const connectMongoDB = async () => {  //bunu route.js lerde cagiriyos
    try {
        await mongoose.connect(process.env.MONGODB_URI)
        console.log('connecttedd')
    }
    catch (error) {
        console.log(error)
    }
}
export default connectMongoDB;