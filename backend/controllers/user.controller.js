import User from '../models/User.js';

export const manageUsers = async (req, res) => {
    try {
        const users = await User.find({}, '-password').exec();
        return res.json(users);
    } catch (error) {
        console.log(error);
        return res.status(400).send("Error. Try again.");
    }
}

export const deleteUser = async (req, res) => {
    try {
        const { userId } = req.params;
        await User.findOneAndDelete({ _id: userId }).exec();
        return res.json({ ok: true });
    } catch (error) {
        console.log(error);
        return res.status(400).send("Error. Try again.");
    }
}
