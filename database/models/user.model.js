import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  
  clerkId:{
    type:String,
    required:true,
  },

  username:{
    type:String,
    required:true,
  },

  image:{
    type:String,
    required:true,
  },

  email:{
    type:String,
    required:true
  }

})


const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;