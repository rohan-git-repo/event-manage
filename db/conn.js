const mongoose=require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/event_management')
.then(()=>console.log('Database connected'))
.catch(()=>console.log('database not connected'))

const eventSchema=new mongoose.Schema({
    id:Number,
    heading:String,
    date:String,
    location:String,
    description:String,
    img:String

})

const Events = mongoose.model('Events', eventSchema);

module.exports = Events;

