import sequelize from "./connect.js";
import { DataTypes, Model } from "sequelize";
import ProductionProcesses from "./production-processes.js";

class ProductionLine extends Model {}

ProductionLine.init(
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
    name: {
      type: DataTypes.STRING,
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
    modelName: "ProductionLine",
    createdAt: false,
    updatedAt: false,
  }
);

ProductionLine.hasMany(ProductionProcesses, { foreignKey: 'fk_production_line_id'})

export default ProductionLine;
