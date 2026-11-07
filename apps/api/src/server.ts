import "dotenv/config";

import app from "./app.js";
import { connectDB } from "@tuberoast/database";

const PORT = process.env.PORT || 3000;

async function startServer(){
    try{    
        const mongoURI = process.env.MONGODB_URI

        if(!mongoURI){
            throw new Error("MongoDB_URI not defined")
        }

        await connectDB(mongoURI);

        app.listen(PORT, () => {
            console.log(`TubeRoast API running on ${PORT}`)
        })
    } catch(error){
        console.error("Failed to srart API: ", error);
        process.exit(1)
    }
}


startServer()