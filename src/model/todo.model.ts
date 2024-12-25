import mongoose, { Schema } from "mongoose";

const todoScheme = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ['new','pending', 'completed'],
        default: 'new'
    },
    assignId:{
        type: String,
    },
    dueDate: {
        type: Date
    }
},{timestamps:true})

export default mongoose.model("ToDo",todoScheme)