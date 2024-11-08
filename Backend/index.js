const express=require("express");
const app=express();
const mongoose=require('mongoose');
const cors=require('cors');

app.use(cors());

mongoose
  .connect('mongodb://127.0.0.1:27017/Crop_DB', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
.then(()=>
  console.log('MongoDb connected')
)
.catch((err)=>console.log("Mongo Error",err));

const userSchema=new mongoose.Schema({
    Crop_name:{
      type:String,
      required:true,
    },
     State:{
      type:String,
    },
    Climate:{
        type:String,
    },
    Sunlight:{
        type:String,
    },
    Soil:{
        type:String,
    },
    Watering:{
        type:String,
    },
    Fertilizer:{
        type:String,
    },
    Pollination:{
        type:String,
    },
    Pest:{
        type:String,
    }
    ,Harvesting:{
        type:String,
    }


})
const User=mongoose.model("user",userSchema);
//middleware
// app.use(express.urlencoded({extended:false}));
app.use(express.json());

//Routes

app.get('/crop', async (req, res) => {
  const cropName = req.query.Crop_name;  // Get the crop name from the query parameter
  
  if (!cropName) {
    return res.status(400).json({ message: 'Crop name is required' });
  }

  try {
    // Replace this with your database search logic
    const crop = await User.findOne({ Crop_name: cropName });
     console.log(crop);
    if (!crop) {
      return res.status(404).json({ message: 'Crop not found' });
    }

    res.json(crop);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving crop', error });
  }
});


app.get("/get/:id",async(req,res)=>{
    
    const user=await User.findById(req.params.id);

    if(!user){
      return res.status(400).json({status: "not existant"});
    }
    return res.send(user); 
  });

  
app.post("/post/users",async(req,res)=>{
    const data=req.body;
    // if(!data || !data.Job_title || !data.email || !data.last_name || !data.first_name){
    //   console.log(data);
    //    return res.status(400).json({status:"All filesto be filled!"});
    // }
    // users.push({...data, id:users.length+1});
    // fs.writeFile("MOCK_DATA.json",JSON.stringify(users),(err,content)=>{
    //     return res.json({status:"Successfull",id: users.length});
    // })
   
    const result=await User.create({
       Crop_name:data.Crop_name,
       State:data.State,
       Climate:data.Climate,
       Sunlight:data.Sunlight,
       Soil:data.Soil,
       Watering:data.Watering,
       Fertilizer:data.Fertilizer,
       Pollination:data.Pollination,
       Pest:data.Pest,
       Harvesting:data.Harvesting

    })
    console.log(data);
    res.status(201).json({status:"Successfull"});
});

app.delete("/delete/:id",async(req,res)=>{
  const user=await User.findByIdAndDelete(req.params.id);
  res.status(200).json({status:"sucessfull"})
})
app.listen(8000,()=>{
    console.log('Server Started');
})