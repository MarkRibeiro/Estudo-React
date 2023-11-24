import { MongoClient } from "mongodb";

export type User = {
    id: number;
    name: string;
    password: string;
    achievements: [];
}

export const createNewUser = async (
    username: string,
    password: string
) => {
    const mongoClient = new MongoClient("mongodb+srv://admin:iAXHwgMZYq8YorYV@ssqjp.cjs6rgj.mongodb.net/mari_tcc?retryWrites=true&w=majority");

    try {
        await mongoClient.connect(); // Connect to MongoDB

        const data = await mongoClient.db().collection("users").findOne({ "name": username });
        if (data != null) {
            // User already exists, handle accordingly
            console.log("User already exists");
        } else {
            // User does not exist, create a new user
            let achievements = [];
            for (let index = 0; index < 26; index++) {
                achievements.push(false);
            }
            await mongoClient.db().collection("users").insertOne({ "name": username, "password": password, "achievements": achievements });
            console.log("User created successfully");
        }
    } finally {
        await mongoClient.close(); // Close the MongoDB connection
    }
};
