import { Router } from "express";
import * as userService from "../service/user.service";

const router = Router()

router.post("/sign-up",userService.registerUser)
router.post("/sign-in",userService.login)

export default router
