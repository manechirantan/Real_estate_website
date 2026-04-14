import express from "express";
import Content from "../models/content.js";
import Authenticated from "../middleware/middelware.js";

const router = express.Router();

const getContent = async () => {
  let content = await Content.findOne();
  if (!content) content = await Content.create({});
  return content;
};

router.get("/", async (req, res) => {
  try {
    const content = await getContent();
    res.json(content);
  } catch {
    res.status(500).json({ message: "Server error." });
  }
});

router.patch("/hero", Authenticated, async (req, res) => {
  try {
    const content = await getContent();
    Object.assign(content.hero, req.body);
    await content.save();
    res.json({ message: "hero updated", data: content.hero });
  } catch {
    res.status(500).json({ message: "Server error." });
  }
});

router.patch("/project-overview", Authenticated, async (req, res) => {
  try {
    const content = await getContent();
    Object.assign(content.projectOverview, req.body);
    await content.save();
    res.json({ message: "projectOverview updated", data: content.projectOverview });
  } catch {
    res.status(500).json({ message: "Server error." });
  }
});

router.patch("/nearby-connectivity", Authenticated, async (req, res) => {
  try {
    const content = await getContent();
    if (req.body.heading !== undefined) content.nearbyConnectivity.heading = req.body.heading;
    if (req.body.items !== undefined) content.nearbyConnectivity.items = req.body.items;
    await content.save();
    res.json({ message: "nearbyConnectivity updated", data: content.nearbyConnectivity });
  } catch {
    res.status(500).json({ message: "Server error." });
  }
});

router.patch("/amenities", Authenticated, async (req, res) => {
  try {
    const content = await getContent();
    if (req.body.heading !== undefined) content.amenities.heading = req.body.heading;
    if (req.body.subheading !== undefined) content.amenities.subheading = req.body.subheading;
    if (req.body.items !== undefined) content.amenities.items = req.body.items;
    await content.save();
    res.json({ message: "amenities updated", data: content.amenities });
  } catch {
    res.status(500).json({ message: "Server error." });
  }
});

router.patch("/floor-plans", Authenticated, async (req, res) => {
  try {
    const content = await getContent();
    if (req.body.heading !== undefined) content.floorPlans.heading = req.body.heading;
    if (req.body.items !== undefined) content.floorPlans.items = req.body.items;
    await content.save();
    res.json({ message: "floorPlans updated", data: content.floorPlans });
  } catch {
    res.status(500).json({ message: "Server error." });
  }
});

router.patch("/about-developer", Authenticated, async (req, res) => {
  try {
    const content = await getContent();
    Object.assign(content.aboutDeveloper, req.body);
    await content.save();
    res.json({ message: "aboutDeveloper updated", data: content.aboutDeveloper });
  } catch {
    res.status(500).json({ message: "Server error." });
  }
});

router.patch("/construction-updates", Authenticated, async (req, res) => {
  try {
    const content = await getContent();
    if (req.body.heading !== undefined) content.constructionUpdates.heading = req.body.heading;
    if (req.body.items !== undefined) content.constructionUpdates.items = req.body.items;
    await content.save();
    res.json({ message: "constructionUpdates updated", data: content.constructionUpdates });
  } catch {
    res.status(500).json({ message: "Server error." });
  }
});

router.patch("/faq", Authenticated, async (req, res) => {
  try {
    const content = await getContent();
    if (req.body.heading !== undefined) content.faq.heading = req.body.heading;
    if (req.body.items !== undefined) content.faq.items = req.body.items;
    await content.save();
    res.json({ message: "faq updated", data: content.faq });
  } catch {
    res.status(500).json({ message: "Server error." });
  }
});

export default router;