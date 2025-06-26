import User from "../models/User.js";

const register = async (req, res) => {
  try {
    const newUser = await new User(req.body);
    await newUser.save();
    return res.status(201).send("Registered successfully");
  } catch (err) {
    return res.status(400).send("Error registering user");
  }
};
export { register };
