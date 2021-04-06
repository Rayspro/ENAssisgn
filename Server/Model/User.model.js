const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const User=new Schema({
    uname:{
        type:String,
        required:true
    },
    lname:{
        type:String
    },
    fname:{
        type:String
    },
    email:{
        type:String,
        required:true
    },
    admin:{
        /**
         * Basic user->Normal Access[denote->false]
         * Power user->Admin Acccess[denote->true]
         */
        type:Boolean,
        required:true,
        default:false
    },
    hobbie:{
        type:String
    },
    password:{
        type:String,
        required:true
    },
    token:{
        type:String
    },
},
{
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at"
    }
}
);

module.exports=mongoose.model('user',User);