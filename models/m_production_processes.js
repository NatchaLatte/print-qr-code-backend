import ProductionProcesses from "./production-processes.js";
import dayjs from "dayjs";

export const model_productionProcesses = {
  /**
   * Get production processes.
   * @param {number} fkProductionLineId
   * @returns {Promise<ProductionProcesses[]>}
   * @throws {Error}
   */
  getProductionProcesses: async (fkProductionLineId) => {
    try {
      return await ProductionProcesses.findAll({
        attributes: ["ref_id", "machine_code", "part_name", "source_url"],
        where: {
          fk_production_line_id: fkProductionLineId,
        }
      });
    } catch (error) {
      throw new Error(error.message || "Failed to fetch production processes");
    }
  },
  /**
   * Create production processes.
   * @param {number} fkProductionLineId
   * @param {string} machineCode
   * @param {string} partName
   * @param {string} sourceUrl
   * @throws {Error}
   */
  createProductionProcesses: async (fkProductionLineId, machineCode, partName, sourceUrl) => {
    try {
      await ProductionProcesses.create({
        fk_production_line_id: fkProductionLineId,
        machine_code: machineCode,
        part_name: partName,
        source_url: sourceUrl,
      });
    } catch (error) {
      throw new Error(error.message || "Failed to create production processes");
    }
  },
  /**
   * Update production processes.
   * @param {string} productionProcessesRefId
   * @param {string} machineCode
   * @param {string} partName
   * @param {string} sourceUrl
   * @throws {Error}
   */
  updateProductionProcesses: async (productionProcessesRefId, machineCode, partName, sourceUrl) => {
    try {
      await ProductionProcesses.update(
        {
          machine_code: machineCode,
          part_name: partName,
          source_url: sourceUrl,
          update_at: dayjs().format("YYYY-MM-DD HH:mm:ss"),
        },
        {
          where: {
            ref_id: productionProcessesRefId,
          },
        }
      );
    } catch (error) {
      throw new Error(error.message || "Failed to delete production processes");
    }
  },
  /**
   * Delete production processes.
   * @param {string} productionProcessesRefId
   * @throws {Error}
   */
  deleteProductionProcesses: async (productionProcessesRefId) => {
    try {
      await ProductionProcesses.destroy({
        where: {
          ref_id: productionProcessesRefId,
        },
      });
    } catch (error) {
      throw new Error(error.message || "Failed to delete production processes");
    }
  },
};
