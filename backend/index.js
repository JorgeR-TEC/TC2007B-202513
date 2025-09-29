const express=require("express");
const MongoClient=require("mongodb").MongoClient;


const app=express();
const PORT=3000;
let db;

app.get("/reportes", async (req,res)=>{
	let data=await db.collection("ejemplo402").find({}).project({_id:0}).toArray();
	res.json(data)
});

async function connectToDB(){
	let client=new MongoClient("mongodb://127.0.0.1:27017/tc2007b");
	await client.connect();
	db=client.db();
	console.log("conectado a la base de datos");
}

app.listen(PORT, ()=>{
	connectToDB();
	console.log("aplicacion corriendo en puerto 3000");
});
