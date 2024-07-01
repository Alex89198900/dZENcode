
import mongoose from 'mongoose';
export const connectDB = async ()=> {
    await mongoose.connect("mongodb+srv://alexdark02091989:lpvmK4gcf9UGoZcG@cluster0.lcf4pfj.mongodb.net/ZEN?retryWrites=true&w=majority&appName=Cluster0",
    
    );
    console.log('MongoDb Connected');   
}
