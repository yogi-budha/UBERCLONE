import express from "express"
import { body } from "express-validator"
import { registerUser } from "../controllers/user.controller.js"

const userRouter = express.Router()

userRouter.post("/register",[
    body('email').isEmail().withMessage('Not a valid e-mail address'),
    body("fullName.firstName").isLength({min:3}).withMessage("firstName Must be at least 3 character long"),
    body('password').isLength({min:6}).withMessage("password must be at 6 character long" )

],registerUser)

export default userRouter