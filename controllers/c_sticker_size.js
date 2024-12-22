import express from "express";
import { model_stickerSize } from "../models/m_sticker_size.js";
const router = express.Router();

router.get("/getStickerSize", async (_req, res) => {
  try {
    const results = await model_stickerSize.getStickerSize();
    res.status(200).json({ message: "Success", httpCode: 200, results });
  } catch (error) {
    res.status(400).json({ message: "Unsuccess", httpCode: 400 });
  }
});

router.post("/createStickerSize", async (req, res) => {
  try {
    const { width, height } = req.body;
    await model_stickerSize.createStickerSize(width, height);
    res.status(200).json({ message: "Success", httpCode: 200 });
  } catch (error) {
    res.status(400).json({ message: "Unsuccess", httpCode: 400 });
  }
});

router.post("/updateStickerSize", async (req, res) => {
  try {
    const { stickerSizeRefId, width, height } = req.body;
    await model_stickerSize.updateStickerSize(stickerSizeRefId, width, height);
    res.status(200).json({ message: "Success", httpCode: 200 });
  } catch (error) {
    res.status(400).json({ message: "Unsuccess", httpCode: 400 });
  }
});

router.post("/deleteStickerSize", async (req, res) => {
  try {
    const { stickerSizeRefId } = req.body;
    await model_stickerSize.deleteStickerSize(stickerSizeRefId);
    res.status(200).json({ message: "Success", httpCode: 200 });
  } catch (error) {
    res.status(400).json({ message: "Unsuccess", httpCode: 400 });
  }
});

export default router;
