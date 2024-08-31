"use server"

import User from "@/database/models/user.model"
import connectDB from "@/database"


export const createUser = async({ clerkId, image, username, email })=>{

  try {
    await connectDB();
    const newUser = await User.create({
        clerkId, image, username, email
    })
    await newUser.save();
    return JSON.parse(JSON.stringify(newUser));
  } catch (error) {
    console.log(error)
  }

}

