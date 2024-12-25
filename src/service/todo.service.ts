import { Request, Response } from "express";
import todoModel from "../model/todo.model";

export const upsertToDo = async(req:any, res:Response):Promise<any> => {
    try{
        const { title, description, status, dueDate, id } = req.body;
        const assignId = req?.assignId || ""
        let todo: any;
        // todoModel.createIndex({ title: "text" });
        if(id){
            todo = await todoModel.findById(id)
        }
        else{
            todo = new todoModel()
        }
        if(title !== undefined){
            todo.title = title
        }
        if(description !== undefined){
            todo.description = description
        }
        if(status !== undefined){
            todo.status = status
        }
        if(dueDate !== undefined){
            todo.dueDate = dueDate
        }
        todo.assignId = assignId
        await todo.save()
        return res.status(200).send(todo)
    }
    catch(err:any){
        return res.status(500).send({
            message: err.message || "Server Error"
        })
    }
}

export const fetchTodo = async(req:any, res:Response):Promise<any> => {
    try{
        const {
            search, assignId, id
        } = req.body
        const query:any = {}
        if(id){
            query._id = id
        }
        if(assignId){
            query.assignId = assignId
        }
        if(search !== undefined){
            query.title = { $regex: search, $options:"i" }
         }
        const list = await todoModel.find(query).sort({
            createdAt: -1
        }).lean()
        return res.status(200).send(list)
    }
    catch(err:any){
        return res.status(500).send({
            message: err.message || "Server Error"
        })
    }
}