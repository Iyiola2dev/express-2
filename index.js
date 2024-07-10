import express from "express";
import data from "./data/data.json" assert {type: "json"};
import movieRoute from "./Routes/movieRoute.js";


const app = express();
const PORT = 3002;
// this is a middle ware that allows everything to convert to a json file
app.use(express.json());

// this for the movie routes
app.use("/movie", movieRoute)




//
app.get("/", (req, res)=>{
    res.send("Hello World");
});

 // this is to send a post request to the sever
app.post("/fruits", (req, res)=>{
    console.log(req.body);
// this to push the new data to data.json file
    const body = req.body;
    data.push(body)
    console.log(data);
    res.send("data saved successfully")
});

//  this allow the port to listen
app.listen( PORT, ()=>{
   console.log("welcome my gee");
})

