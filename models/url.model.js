const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const urlSchema = new Schema({
    token: {
        type:String,
        unique:true,
        required:true,
    },
    longUrl:{
        type:String,
        required:true
    }

},
{timestamps:true});



module.exports = mongoose.model('Url', urlSchema);