import express from "express";
import { model_productionProcesses } from "../models/m_production_processes.js";
import { model_productionLine } from "../models/m_production_line.js";
const router = express.Router();

router.post("/getProductionProcesses", async (req, res) => {
  try {
    const { productionLineRefId } = req.body;
    const fkProductionLineId = await model_productionLine.getIdByRefIdProductionLine(productionLineRefId);
    if(!fkProductionLineId){
      return res.status(400).json({ message: "Unsuccess", httpCode: 400 });
    }
    const results = await model_productionProcesses.getProductionProcesses(fkProductionLineId.id);
    return res.status(200).json({ message: "Success", httpCode: 200, results });
  } catch (error) {
    return res.status(400).json({ message: "Unsuccess", httpCode: 400 });
  }
});

router.post("/createProductionProcesses", async (req, res) => {
  try {
    const { productionLineRefId, machineCode, partName, sourceUrl } = req.body;
    const fkProductionLineId = await model_productionLine.getIdByRefIdProductionLine(productionLineRefId);
    if(!fkProductionLineId){
      return res.status(400).json({ message: "Unsuccess", httpCode: 400 });
    }
    await model_productionProcesses.createProductionProcesses(fkProductionLineId.id, machineCode, partName, sourceUrl);
    return res.status(200).json({ message: "Success", httpCode: 200 });
  } catch (error) {
    return res.status(400).json({ message: "Unsuccess", httpCode: 400 });
  }
});

router.post("/updateProductionProcesses", async (req, res) => {
  try {
    const { productionProcessesRefId, machineCode, partName, sourceUrl } = req.body;
    await model_productionProcesses.updateProductionProcesses(productionProcessesRefId, machineCode, partName, sourceUrl);
    return res.status(200).json({ message: "Success", httpCode: 200 });
  } catch (error) {
    return res.status(400).json({ message: "Unsuccess", httpCode: 400 });
  }
});

router.post("/deleteProductionProcesses", async (req, res) => {
  try {
    const { productionProcessesRefId } = req.body;
    await model_productionProcesses.deleteProductionProcesses(productionProcessesRefId);
    return res.status(200).json({ message: "Success", httpCode: 200 });
  } catch (error) {
    return res.status(400).json({ message: "Unsuccess", httpCode: 400 });
  }
});

export default router;
