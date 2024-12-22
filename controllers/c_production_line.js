import express from "express";
import { model_productionLine } from "../models/m_production_line.js";
const router = express.Router();

router.get("/getProductionLine", async (_req, res) => {
  try {
    const results = await model_productionLine.getProductionLine();
    res.status(200).json({ message: "Success", httpCode: 200, results });
  } catch (error) {
    res.status(400).json({ message: "Unsuccess", httpCode: 400 });
  }
});

router.post("/createProductionLine", async (req, res) => {
  try {
    const { name } = req.body;
    await model_productionLine.createProductionLine(name);
    res.status(200).json({ message: "Success", httpCode: 200 });
  } catch (error) {
    res.status(400).json({ message: "Unsuccess", httpCode: 400 });
  }
});

router.post("/updateProductionLine", async (req, res) => {
  try {
    const { productionLineRefId, name } = req.body;
    await model_productionLine.updateProductionLine(productionLineRefId, name);
    res.status(200).json({ message: "Success", httpCode: 200 });
  } catch (error) {
    res.status(400).json({ message: "Unsuccess", httpCode: 400 });
  }
});

router.post("/deleteProductionLine", async (req, res) => {
  try {
    const { productionLineRefId } = req.body;
    await model_productionLine.deleteProductionLine(productionLineRefId);
    res.status(200).json({ message: "Success", httpCode: 200 });
  } catch (error) {
    res.status(400).json({ message: "Unsuccess", httpCode: 400 });
  }
});

export default router;
