import StickerSize from "./sticker-size.js";
import dayjs from "dayjs";

export const model_stickerSize = {
  /**
   * Get sticker size.
   * @returns {Promise<StickerSize[]>}
   * @throws {Error}
   */
  getStickerSize: async () => {
    try {
      return await StickerSize.findAll({
        attributes: ["ref_id", "width", "height"],
      });
    } catch (error) {
      throw new Error(error.message || "Failed to fetch sticker sizes");
    }
  },
  /**
   * Create sticker size.
   * @param {number} width
   * @param {number} height
   * @throws {Error}
   */
  createStickerSize: async (width, height) => {
    try {
      await StickerSize.create({
        width: width,
        height: height,
      });
    } catch (error) {
      throw new Error(error.message || "Failed to create sticker sizes");
    }
  },
  /**
   * Update sticker size.
   * @param {string} stickerSizeRefId
   * @param {number} width
   * @param {number} height
   * @throws {Error}
   */
  updateStickerSize: async (stickerSizeRefId, width, height) => {
    try {
      await StickerSize.update(
        {
          width: width,
          height: height,
          update_at: dayjs().format("YYYY-MM-DD HH:mm:ss"),
        },
        {
          where: {
            ref_id: stickerSizeRefId,
          },
        }
      );
    } catch (error) {
      throw new Error(error.message || "Failed to delete sticker sizes");
    }
  },
  /**
   * Delete sticker size.
   * @param {string} stickerSizeRefId
   * @throws {Error}
   */
  deleteStickerSize: async (stickerSizeRefId) => {
    try {
      await StickerSize.destroy({
        where: {
          ref_id: stickerSizeRefId,
        },
      });
    } catch (error) {
      throw new Error(error.message || "Failed to delete sticker sizes");
    }
  },
};
