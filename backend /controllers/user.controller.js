import { User } from '../models/user.model.js';

async function handleUserSignup(req, res) {
    const { name, email, password }  = req.body

await User.create({
        name,
        email,
        password
    });
    res.redirect("home");
}


export { handleUserSignup };