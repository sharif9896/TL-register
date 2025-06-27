import User from "../models/User.js";

const register = async (req, res) => {
  const { name, email, phone, college, role } = req.body;
  console.log(name, email, phone, college, role);
  try {
    const data = {
      name,
      email,
      phone,
      college,
      role,
    };
    const newUser = await new User(data);
    await newUser.save();
    return res.status(201).send("Registered successfully");
  } catch (err) {
    return res.status(400).send("Error registering user");
  }
};
export { register };
