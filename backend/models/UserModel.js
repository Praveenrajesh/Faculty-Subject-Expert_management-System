import mongoose from "mongoose";
 
const User = mongoose.Schema({
    fid:{
        type: String,
        required: true
    },
    fname:{
        type: String,
        required: true
    },
    faddress:{
        type: String,
        required: true
    },
    fqual:{
        type: String,
        required: true
    },
    fphone:{
        type: String,
        required: true
    },
    fsub:{
        type: String,
        required: true
    }

});
 
export default mongoose.model('Users', User);