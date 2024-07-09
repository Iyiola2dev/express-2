import { MongoClient, ServerApiVersion } from "mongodb";


// The (process) is use to connect the env file
const connectionString = process.env.ATLAS_URI || "mongodb+srv://iyiolad21:Lexicon_@iyidev.rl23gqv.mongodb.net/?retryWrites=true&w=majority&appName=iyiDev";


// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(connectionString, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

let conn;
try {
  conn = await client.connect();
  console.log("mongo connected")
} catch (e) {
  console.error(e);
}

let db = conn.db("sample_mflix");

export default db;