import express from "express";
import session from "express-session";
import cors from "cors";
import connectdb from "./config/database.js";
import authRoutes from "./routes/adminAuth.js";
import contentRoutes from "./routes/index.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();

connectdb();

const allowedOrigins = [
  "http://localhost:5173",
  "https://real-estate-website-5-fd7w.onrender.com",
  process.env.FRONTEND_URL,
].filter(Boolean);

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
  })
);

app.use(express.json());

app.use(
  session({
    secret: process.env.SESSION_SECRET || "megaplex_secret_key",
    resave: false,
    saveUninitialized: false,
    cookie: {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
      maxAge: 1000 * 60 * 60 * 8,
    },
  })
);

app.use("/auth", authRoutes);
app.use("/content", contentRoutes);

app.get("/", (req, res) => {
  res.send("Backend is running");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});