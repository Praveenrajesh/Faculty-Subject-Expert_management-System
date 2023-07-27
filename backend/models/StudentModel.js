import mongoose from "mongoose";
 
const Student = mongoose.Schema({
    fid:{
        type: String,
        required: true
    },
    fname:{
        type: String,
        required: true
    },
    ay:{
        type: String,
        required: true
    },
    bat:{
        type: String,
        required: true
    },
    semno:{
        type: String,
        required: true
    },
    sname:{
        type: String,
        required: true
    },
    scode:{
        type: String,
        required: true
    },
    pass:{
        type: String,
        required: true
    },
    cls:{
        type: String,
        required: true
    },
    sect:{
        type: String,
        required: true
    },
    nos:{
        type: String,
        required: true
    }
    

});
 
export default mongoose.model('Subject', Student);