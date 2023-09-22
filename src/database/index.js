import mongoose from "mongoose";

const configOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};

const connectToDB = async () => {
    const connectionUrl = (process.env.MONGODB_URI);
    console.log("Valeur de MONGODB_URI :", process.env.MONGODB_URI);
    console.log("Tentative de connexion à la base de données...");

    try {
        await mongoose.connect(connectionUrl, configOptions);
        console.log("Connexion à la base de données réussie !");

    } catch (error) {
        console.error("Erreur lors de la connexion à la base de données :", error.message);
    }
};

export default connectToDB;