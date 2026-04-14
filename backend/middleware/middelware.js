import session from "express-session";
import MongoStore from "connect-mongo";
import dotenv from "dotenv";
dotenv.config();

const store = MongoStore.create({
  mongoUrl: process.env.MONGO_URI,
  ttl: 60 * 60 * 8,
  autoRemove: "native",
});

const Authenticated = (req, res, next) => {
  // First check normal cookie-based session
  if (req.session && req.session.isAdmin) {
    return next();
  }

  // Fallback: check x-session-id header (for cross-domain requests)
  const sessionId = req.headers["x-session-id"];
  if (!sessionId) {
    return res.status(401).json({ message: "Unauthorized." });
  }

  store.get(sessionId, (err, sessionData) => {
    if (err || !sessionData || !sessionData.isAdmin) {
      return res.status(401).json({ message: "Unauthorized." });
    }
    return next();
  });
};

export default Authenticated;