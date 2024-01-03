import express  from "express";
import { requireSignin } from "../middlewares/index.js";
import { manageUsers, deleteUser } from "../controllers/user.controller.js";


const router = express.Router();

router.get('/users', manageUsers);
router.delete('/users/:userId', deleteUser);



export default router;