import sequelize from "./connect.js";
import { DataTypes, Model } from "sequelize";

class StickerSize extends Model {}

StickerSize.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    ref_id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
    },
    width: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    height: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    update_at: {
      type: DataTypes.DATE,
    },
    create_at: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    sequelize,
    modelName: "StickerSize",
    createdAt: false,
    updatedAt: false,
  }
);

export default StickerSize;
