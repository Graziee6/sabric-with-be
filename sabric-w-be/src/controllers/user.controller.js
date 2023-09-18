import jwt from "jsonwebtoken";
import * as bcrypt from "bcrypt";
import User from "../models/user.model.js";

export const addUser = async (req, res) => {
  try {
    const { err } = req.body;
    console.log(req.body);
    if (err) {
      console.error(err);
      return res.status(400).send({ message: "Invalid data" });
    }

    const { username, email, password } = req.body;

    const duplicate = await User.findOne({ username, email });

    if (duplicate) {
      return res.status(400).send({ message: "User already exists" });
    }
    const hashedPassword = await bcrypt.hash(password, 10); // 10 is the number of salt rounds

    // Create a new user in the database
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });
    await newUser.save();
    return res.status(201).send({ message: "User saved successfully!" });
  } catch (error) {
    console.error(error);
  }
};

export const login = async (req, res) => {
  try {
    //1.Validate body
    const { err } = req.body;
    if (err) {
      return res.status(400).send({ message: "Bad request" });
    }

    const { username, email, password } = req.body;

    //2.Check db for such a user
    const user = await User.findOne({ username, email });

    if (!user) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // Generate a JWT token
    const jwtSecret = process.env.JWT_SECRET;
    const token = jwt.sign(
      { id: user._id, username: user.username },
      jwtSecret,
      {
        expiresIn: "1h",
      }
    );
    return res
      .status(200)
      .send({ data: token, message: "Logged in successfully", user });
  } catch (error) {
    console.error(error);
  }
};

export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    return res
      .json(users)
      .status(200)
      .send({ message: "Successfully retrieved" });
  } catch (error) {
    console.error(error);
  }
};

export const updateUser = async (req, res) => {
  try {
    let { email, password } = req.body;
    req.body.password = await bcrypt.hash(password, 10); // 10 is the number of salt rounds
    const user = await User.findOneAndUpdate({ email }, req.body, {
      new: true,
    });
    if (user) {
      console.log(user);
      return res
        .status(200)
        .send({ data: user, message: "Successfully updated" });
    } else {
      res.status(404).send({ message: "User with such email is not found" });
    }
  } catch (error) {
    console.error(error);
  }
};
