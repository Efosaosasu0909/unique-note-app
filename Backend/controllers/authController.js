import User from "../model/userModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import Notes from "../model/noteModel.js";

export const authControllers = {
  register: async (req, res) => {
    try {
      const { firstName, lastName, email, password } = req.body;

      if (!firstName) {
        return res.status(400).json({ msg: "Please enter your firstname" });
      } else if (firstName.length <= 2) {
        return res.status(400).json({ msg: "first name is too short" });
      } else if (firstName.length >= 15) {
        return res.status(400).json({ msg: "first name is too long" });
      }

      if (!lastName) {
        return res.status(400).json({ msg: "Please enter your last name" });
      } else if (lastName.length <= 2) {
        return res.status(400).json({ msg: "last name is too short" });
      } else if (lastName.length >= 15) {
        return res.status(400).json({ msg: "last name is too long" });
      }

      if (!email) {
        return res.status(400).json({ msg: "Please enter your email address" });
      } else if (!validateEmail(email)) {
        return res
          .status(400)
          .json({ msg: "Invalid email. Format is incorrect" });
      }

      if (!password) {
        return res.status(400).json({ msg: "Please enter your password" });
      } else if (password.length < 6) {
        return res.status(400).json({ msg: "password is too short" });
      }

      const user = await User.findOne({ email });
      if (user) {
        return res.status(400).json({ msg: "This email already exists" });
      }
      const hashPassword = await bcrypt.hash(password, 12);

      const newUser = await User({
        firstName,
        lastName,
        email,
        password: hashPassword,
      });
      await newUser.save();

      newUser.password = undefined;

      return res
        .status(201)
        .json({ msg: "Registered successfully!!!", user: newUser });
    } catch (err) {
      return res.status(500).json({ msg: err });
    }
  },

  login: async (req, res) => {
    try {
      const { email, password } = req.body;

      if (!email) {
        return res.status(400).json({ msg: "Please enter your email address" });
      } else if (!validateEmail(email)) {
        return res
          .status(400)
          .json({ msg: "Invalid email. Format is incorrect" });
      }

      if (!password) {
        return res.status(400).json({ msg: "Please enter your password" });
      } else if (password.length < 6) {
        return res.status(400).json({ msg: "password is too short" });
      }

      const user = await User.findOne({ email });
      if (!user) {
        return res.status(400).json({ msg: "This email does not exist" });
      }
      const confirmPassword = await bcrypt.compare(password, user.password);

      if (!confirmPassword) {
        return res.status(400).json({ msg: "Invalid password" });
      }

      const token = await jwt.sign({ _id: user._id }, process.env.JWT_SECRET);

      return res
        .status(200)
        .json({ msg: "Login successfully!!!", token, user });

      //   await newUser.save();
      //   return res
      //     .status(201)
      //     .json({ msg: "Login successfully!!!", user: newUser });
    } catch (err) {
      return res.status(500).json({ msg: err });
    }
  },
  getAllUsers: async (req, res) => {
    try {
      const users = await User.find().select("-password");
      return res.status(200).json({ msg: "All users!!!", users });
    } catch (err) {
      return res.status(500).json({ msg: err });
    }
  },
  getOneUser: async (req, res) => {
    try {
      const { userId } = req.params;
      const user = await User.findOne({ _id: userId }).select("-password");
      const notes = await Notes.find({ postedBy: userId }).populate(
        "postedBy",
        "-password"
      );
      return res.status(200).json({ msg: "Single User", user, notes });
    } catch (err) {
      return res.status(500).json({ msg: err });
    }
  },
  deleteUser: async (req, res) => {
    try {
      const { id } = req.params;
      const user = await User.findByIdAndDelete(id);

      return res.status(200).json({ msg: "Deleted successfully!!!", user });
    } catch (err) {
      return res.status(500).json({ msg: err });
    }
  },
};

// Validates email address of course.
function validateEmail(email) {
  var filter =
    /^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/;
  return String(email).search(filter) != -1;
}
