import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class LichChieu extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    maLichChieu: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    maRap: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    tenRap: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    ngayChieuGioChieu: {
      type: DataTypes.DATE,
      allowNull: true
    },
    giaVe: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    maPhim: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Phim',
        key: 'maPhim'
      }
    },
    maCumRap: {
      type: DataTypes.STRING(50),
      allowNull: true,
      references: {
        model: 'CumRap',
        key: 'maCumRap'
      }
    }
  }, {
    sequelize,
    tableName: 'LichChieu',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "maLichChieu" },
        ]
      },
      {
        name: "maPhim",
        using: "BTREE",
        fields: [
          { name: "maPhim" },
        ]
      },
      {
        name: "maCumRap",
        using: "BTREE",
        fields: [
          { name: "maCumRap" },
        ]
      },
    ]
  });
  }
}
