import sequelize from "./connect.js";
import { DataTypes, Model } from "sequelize";

class ProductionProcesses extends Model {}

ProductionProcesses.init(
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
    fk_production_line_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    machine_code: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    part_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    source_url: {
      type: DataTypes.TEXT,
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
    modelName: "ProductionProcesses",
    createdAt: false,
    updatedAt: false,
  }
);

export default ProductionProcesses;
