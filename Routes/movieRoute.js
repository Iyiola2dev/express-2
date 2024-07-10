import express from "express";
import db from "../db/conn.js";
import { ObjectId } from "mongodb";

const movieRoutes = express.Router();

movieRoutes.get("/movies", async (req, res) => {
  const collection = await db.collection("movies");
  const result = await collection.find({}).limit(20).toArray();
  res.status(200).send(result);
});
movieRoutes.get("/theaters", async (req, res) => {
  const collection = await db.collection("theaters");
  const result = await collection.find({}).limit(20).toArray();
  res.status(200).send(result);
});
movieRoutes.get("/users", async (req, res) => {
  const collection = await db.collection("users");
  const result = await collection.find({}).limit(20).toArray();
  res.status(200).send(result);
});

movieRoutes.get("/movies/:id", async (req, res) => {
  let response = new ObjectId(req.params.id);
  const collection = await db.collection("movies");
  const result = await collection.findOne({ _id: response });

  if (!result) {
    res.status(404).json({ error: "Movie not found" });
  } else if (!collection) {
    res.status(500).json({ error: "Internal Server Error" });
  } else if (result) {
    res.status(200).json(result);
  }
});

// // let response = req.params.id.findOne({_id: "573a1390f29313caabcd5293"})
// movieRoutes.get("/movies/:id", async(req, res)=>{
//         // if(response.length == 0){
//         //     return "404 not found"
//         // }

// })

export default movieRoutes;
