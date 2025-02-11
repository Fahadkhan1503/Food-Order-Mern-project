import mongoose from "mongoose";

export const dbConnection = () => {
    mongoose.connect(process.env.MONOGO_URI, {
        dbName: "RESTURANT"
    }).then(() => {
        console.log("Database Connected Successfully CONGRATSSS!!!");
    }).catch((err) => {
        console.log(`Database Connection Failed... SEDLYF!!! ${err}`);
    });
};

