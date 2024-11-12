const User = require('../Models/userSchema')

exports.createUser = async (req, res) => {
    try {
        const data = req.body;
        const { email } = data;
        const existingUser = await User.findOne({ email })
        if (existingUser) {
            return res.status(400).json({ error: "user already exists !!" })
        }

        const user = new User(data)
        await user.save()
        res.status(201).json({ newUser: user, message: "new user added !" })
    } catch (error) {
        console.log(`error in creating user : ${error}`)
    }
}

exports.getAllUsers = async (req, res) => {
    const user = await User.find();
    res.status(200).json(user);
}

exports.getSingleUser = async (req, res) => {
    const id = req.params.id
    const user = await User.findById(id)
    if (!user) {
        return res.status(400).json({ error: "no user found !!" })
    }
    res.status(200).json({ user: user })
}

exports.updateUser = async (req, res) => {
    const id = req.params.id;
    const data = req.body;
    const user = await User.findByIdAndUpdate(id, data);
    res.status(200).json(user)
}

exports.deleteUser = async (req, res) => {
    const id = req.params.id;
    const user = await User.findByIdAndDelete(id)
    res.status(200).json({ message: "user deleted successfully !" })
}