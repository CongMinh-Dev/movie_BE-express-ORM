import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class Phim extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    maPhim: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    tenPhim: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    hinhAnh: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    hot: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    dangChieu: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    sapChieu: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Phim',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "maPhim" },
        ]
      },
    ]
  });
  }
}
