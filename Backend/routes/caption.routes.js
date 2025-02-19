import express from 'express'
import { loginCaption, profileCaption, registerCaption } from '../controllers/caption.controller.js';
import { body } from 'express-validator';
import { captionAuth } from '../middleware/auth-caption.middleware.js';
import { logout } from '../controllers/user.controller.js';

const captionRouter = express.Router();

captionRouter.post("/register",[
    body("email").isEmail().withMessage("Invalid email address"),
    body("fullName.firstName").isLength({min:3}).withMessage("firstName must be at least 3 character long"),
    body("password").isLength({min:6}).withMessage("password must be at least 6 character long"),
    body("vehicle.color").isLength({min:2}).withMessage("length of the vehicle color at least 2 character long"),
    body("vehicle.plate").isLength({min:2}).withMessage(" plate must be at least 3 character long"),
    body("vehicle.capacity").isInt({min:1}).withMessage("capacity must be atleast 1"),
    body("vehicle.vehicleType").isIn(["moterCycle","car","auto"]).withMessage("Invalid vehicle type"),
],registerCaption)

captionRouter.post("/login",[
    body("email").isEmail().withMessage("invalid email adderss"),
    body("password").isLength({min:6}).withMessage("password must be at least 6 character long")
],loginCaption)

captionRouter.get("/profile",captionAuth,profileCaption)
captionRouter.post("/logout",captionAuth,logout)


export default captionRouter