const express=require("express");
const MongoClient=require("mongodb").MongoClient;
var cors=require("cors");
const bodyParser=require("body-parser")

const app=express();
app.use(cors());
const PORT=3000;
let db;
app.use(bodyParser.json());

app.get("/reportes", async (req,res)=>{
	let data=await db.collection("ejemplo402").find({}).project({_id:0}).toArray();
	res.set("Access-Control-Expose-Headers", "X-Total-Count");
	res.set("X-Total-Count", data.length);
	res.json(data);
});

//getOne

app.get("/reportes/:id", async (req,res)=>{
	let data=await db.collection("ejemplo402").find({"id": Number(req.params.id)}).project({_id:0}).toArray();
	res.json(data[0]);
});

//createOne
app.post("/reportes", async (req,res)=>{
	let valores=req.body
	valores["id"]=Number(valores["id"])
	let data=await db.collection("ejemplo402").insertOne(valores);
	res.json(data)
});

//deleteOne
app.delete("/reportes/:id", async(req,res)=>{
	let data=await db.collection("ejemplo402").deleteOne({"id": Number(req.params.id)});
	res.json(data)
})

//updateOne
app.put("/reportes/:id", async(req,res)=>{
	let valores=req.body
	valores["id"]=Number(valores["id"])
	let data =await db.collection("ejemplo402").updateOne({"id":valores["id"]}, {"$set":valores})
	data=await db.collection("ejemplo402").find({"id":valores["id"]}).project({_id:0}).toArray();
	res.json(data[0]);
})

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
