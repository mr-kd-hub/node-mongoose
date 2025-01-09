import { Router } from "express";
import * as todoService from "../service/todo.service";

const router = Router()

router.post("/upsert",todoService.upsertToDo)
router.post("/list",todoService.fetchTodo)
export default router