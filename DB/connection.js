<<<<<<< HEAD:DB/connection.js
import mongoose from "mongoose"

const connectDB = async()=> {
    return await mongoose.connect(`mongodb+srv://gmalak541:pSCxIZpuYqKnCB6N@greenwave.rsffrse.mongodb.net/GreenWave?retryWrites=true&w=majority&appName=GreenWave`)
    .then(res=>{
        console.log(`DB Connected Successfully.........`);
    }).catch(
        err=>{
            console.log(`Failed Connection: ${err}`);
        }
    );
}

=======
import mongoose from "mongoose"

const connectDB = async()=> {
    return await mongoose.connect(`mongodb+srv://gmalak541:pSCxIZpuYqKnCB6N@greenwave.rsffrse.mongodb.net/GreenWave?retryWrites=true&w=majority&appName=GreenWave`)
    .then(res=>{
        console.log(`DB Connected Successfully.........`);
    }).catch(
        err=>{
            console.log(`Failed Connection: ${err}`);
        }
    );
}

>>>>>>> cb57dd93db784ee05bab7bdcb983cbf62735e45f:BackEnd/DB/connection.js
export default connectDB