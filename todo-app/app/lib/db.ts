import { MongoClient, Db, Collection } from "mongodb";
import { connection } from "next/server";

const uri = process.env.MANGO_DB_URI;
if (!uri) {
    throw new Error("MANGO_DB_URI is not set");
}

let client: MongoClient;
let db: Db;

export async function connectToDatabase() {
    if (!client ) {
    client = new MongoClient(uri as string);
    }
    await client.connect();
    db = client.db("mango_db");
    return { client, db };
}

 export async function getTodosCollection(): Promise<Collection> {
    await connection();
    if (!db) {
        const{db: database} = await connectToDatabase();
        return database.collection("todos");
    }
    return db.collection("todos");
}
