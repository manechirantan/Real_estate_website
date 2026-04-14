import express from "express";
import Admin from "../models/admin.js";

const router = express.Router();

// login
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res
      .status(400)
      .json({ message: "Email and password are required." });
  }
  try {
    const admin = await Admin.findOne({ email: email.toLowerCase() });
    if (!admin || admin.password !== password) {
      return res.status(401).json({ message: "Invalid credentials." });
    }
    req.session.isAdmin = true;
    return res.status(200).json({ message: "Login successful." });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Server error." });
  }
});

//logout
router.post("/logout", (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      return res.status(500).json({ message: "Could not log out." });
    }
    res.clearCookie("connect.sid");
    return res.status(200).json({ message: "Logged out successfully." });
  });
});

//frontend check if session is alive
router.get("/me", (req, res) => {
  if (req.session && req.session.isAdmin) {
    return res.status(200).json({ loggedIn: true });
  }
  return res.status(200).json({ loggedIn: false });
});

export default router;
