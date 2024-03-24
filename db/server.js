const express=require('express');
const app=express();
const cors=require('cors')
const port=3500;
app.use(cors());
const Events= require('./conn');
app.use(express.json());
app.get('/',(req,res)=>{
    res.send('<h1>WELCOME TO API CREATION </h1><h2></a><a href="./getdata" target="_blank" >Show Events</a></h2>')
})
app.get('/getdata',async (req,res)=>{
    try{
    const get=await Events.find({});
    res.status(201).send(get)
    }
    catch(e){
        console.log(e);
    }
    })

app.post('/add', async (req, res) => {
        const { id, heading, date, location, description, img } = req.body;
      
        try {
          const newEvent = new Events({ id, heading, date, location, description, img });
          await newEvent.save();
      
          res.status(201).json({ message: 'Event added successfully' });
        } catch (error) {
          console.error('Error adding Event:', error);
          res.status(500).json({ message: 'Error adding Event' });
        }
    });

app.delete("/remove/:id", async (req, res) => {
    const id=req.params.name;
    try{
        const del=await Events.findOneAndDelete({id});
        if(!del){
            return res.status(400).json({error:'Event not found'});
        }
        res.status(200).json(del);
    }
    catch(e){
        console.log("error ",e);
    }
    });

app.listen(port,()=>{
        console.log(`Server Running at port number ${port}`);
    })
