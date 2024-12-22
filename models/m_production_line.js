import ProductionLine from "./production-line.js";
import dayjs from "dayjs";

export const model_productionLine = {
  /**
   * Get id by ref_id production line.
   * @param {string} productionLineRefId
   * @returns {Promise<ProductionLine[]>}
   * @throws {Error}
   */
  getIdByRefIdProductionLine: async (productionLineRefId) => {
    try {
      return await ProductionLine.findOne(
        {
          attributes: ["id"],
          where: {
            ref_id: productionLineRefId
          }
        }
      );
    } catch (error) {
      throw new Error(
        error.message || "Failed to fetch id by ref_id production line"
      );
    }
  },
  /**
   * Get production line.
   * @returns {Promise<ProductionLine[]>}
   * @throws {Error}
   */
  getProductionLine: async () => {
    try {
      return await ProductionLine.findAll({
        attributes: ["ref_id", "name"],
      });
    } catch (error) {
      throw new Error(error.message || "Failed to fetch production line");
    }
  },
  /**
   * Create production line.
   * @param {string} name
   * @throws {Error}
   */
  createProductionLine: async (name) => {
    try {
      await ProductionLine.create({
        name: name,
      });
    } catch (error) {
      throw new Error(error.message || "Failed to create production line");
    }
  },
  /**
   * Update production line.
   * @param {string} productionLineRefId
   * @param {string} name
   * @throws {Error}
   */
  updateProductionLine: async (productionLineRefId, name) => {
    try {
      await ProductionLine.update(
        {
          name: name,
          update_at: dayjs().format("YYYY-MM-DD HH:mm:ss"),
        },
        {
          where: {
            ref_id: productionLineRefId,
          },
        }
      );
    } catch (error) {
      throw new Error(error.message || "Failed to delete production line");
    }
  },
  /**
   * Delete production line.
   * @param {string} productionLineRefId
   * @throws {Error}
   */
  deleteProductionLine: async (productionLineRefId) => {
    try {
      await ProductionLine.destroy({
        where: {
          ref_id: productionLineRefId,
        },
      });
    } catch (error) {
      throw new Error(error.message || "Failed to delete production line");
    }
  },
};
