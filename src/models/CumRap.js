import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class CumRap extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    maCumRap: {
      type: DataTypes.STRING(50),
      allowNull: false,
      primaryKey: true
    },
    tenCumRap: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    diaChi: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    hinhAnh: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    maHeThongRap: {
      type: DataTypes.STRING(50),
      allowNull: true,
      references: {
        model: 'HeThongRap',
        key: 'maHeThongRap'
      }
    }
  }, {
    sequelize,
    tableName: 'CumRap',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "maCumRap" },
        ]
      },
      {
        name: "maHeThongRap",
        using: "BTREE",
        fields: [
          { name: "maHeThongRap" },
        ]
      },
    ]
  });
  }
}
