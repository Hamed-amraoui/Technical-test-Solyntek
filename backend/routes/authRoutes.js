import express  from "express";
import { requireSignin } from "../middlewares/index.js";
import { Register, Login, Logout } from "../controllers/auth.controller.js";


const router = express.Router();

router.post('/register', Register);
router.post('/login', Login);
router.get('/logout',requireSignin ,Logout);


export default router;