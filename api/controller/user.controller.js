import bcrypt from 'bcrypt';
import User from '../models/user.js';
import jwt from 'jsonwebtoken';
import userService from '../services/user.service.js';


const register = async (req, res) => {
        console.log("Registering user", req.body);

        if( !req.body || !req.body.username || !req.body.password || !req.body.email) {
            return res.status(400).json({ message: 'Username, email and password are required' });
        }

        const { username, email, password } = req.body;
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        
        try{
                const savedUser = await User.create({
                        username,
                        email,
                        password: hashedPassword
                });
                //const newUser = await userService.registerUser({ username, email, password });
                console.log("Saved user", savedUser);
                res.status(200).json({ message: 'User registered successfully'});
        } catch (error) {
                console.error("Error saving user", error);
                return res.status(500).json({ message: `Error saving user: ${error}` });
        }

};

const login = async (req, res) => {
        console.log("Logging in user", req.body);

        if( !req.body || !req.body.username  || !req.body.email || !req.body.password) {
            return res.status(400).json({ message: 'Username, email and password are required' });
        }

        const { username, email, password } = req.body;

        try{
                const user = await User.findOne({ username }).select('+password');
                if (!user) {
                        console.error("User not found", username);
                        return res.status(404).json({ message: 'User not found' });
                }
                if (user.email !== email) {
                        console.error("Email does not match", email);
                        return res.status(401).json({ message: 'Invalid credentials' });
                }
                const isMatch = await bcrypt.compare(password, user.password);
                if (!isMatch) {
                        return res.status(401).json({ message: 'Invalid credentials' });
                }
                console.log("User logged in", user.username);
                const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
                res.status(200).json({ message: 'Login successful', token});
        } catch (error) {
                console.error("Error logging in user", error);
                return res.status(500).json({ message: `Error logging in user: ${error}` });
        }
};

export default { register, login };