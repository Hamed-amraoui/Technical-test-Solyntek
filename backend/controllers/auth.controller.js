import User from "../models/User.js";
import jwt from "jsonwebtoken";
import { comparePassword, hashPassword } from '../utils/index.js';
import dotenv from "dotenv";

dotenv.config();

//Register new account
export const Register = async (req, res) => {
    try {
        const { name, email, phone, password } = req.body;
        //validation
        if (!name) return res.status(400).send("Name is required");
        if (!password || password.length < 6)
            return res
                .status(400)
                .send("Password is required and should be min 6 characters long");
        let userExist = await User.findOne({ email }).exec();
        if (userExist) return res.status(400).send("Email is taken");
        //hash password
        const hashedPassword = await hashPassword(password);
        const user = new User({
            name,
            email,
            phone,
            password: hashedPassword,
        });
        await user.save();
        console.log("saved user", user);
        return res.json({ ok: true });
    } catch (err) {
        console.log(err);
        return res.status(400).send("Error. Try again.");
    }   
};

//Login to account
export const Login = async (req, res) => {
    try{
        const { email, password } = req.body;
        //check if our db has user with that email
        const user = await User.findOne({ email }).exec();
        if (!user) {
            return res.status(400).send("User Not Found");
        }
        // check password
        const match = await comparePassword(password, user.password);
        if (!match) {
           return res.status(400).send("Wrong password");
        }
            // generate token and send to client
        const token = jwt.sign(
            { _id: user._id },
            process.env.JWT_SECRET,
            { expiresIn: "7d", }
            );

        user.password = undefined;
        res.json({token: token});
        //res.json(user);
         
    } catch (error) {
         return res.status(400).send("Error. Try again.");
    }
};

//Logout from account
export const Logout = async (req, res) => {
    try {
        res.clearCookie('token');
        return res.json({ message: "Signout success" });
    } catch (error) {
        console.log(error);
    }
};



