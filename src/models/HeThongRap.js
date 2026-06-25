import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class HeThongRap extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    maHeThongRap: {
      type: DataTypes.STRING(50),
      allowNull: false,
      primaryKey: true
    },
    tenHeThongRap: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    biDanh: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: "biDanh"
    },
    logo: {
      type: DataTypes.STRING(500),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'HeThongRap',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "maHeThongRap" },
        ]
      },
      {
        name: "biDanh",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "biDanh" },
        ]
      },
    ]
  });
  }
}
