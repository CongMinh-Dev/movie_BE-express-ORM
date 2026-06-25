import _sequelize from "sequelize";
const DataTypes = _sequelize.DataTypes;
import _CumRap from  "./CumRap.js";
import _HeThongRap from  "./HeThongRap.js";
import _LichChieu from  "./LichChieu.js";
import _Phim from  "./Phim.js";

export default function initModels(sequelize) {
  const CumRap = _CumRap.init(sequelize, DataTypes);
  const HeThongRap = _HeThongRap.init(sequelize, DataTypes);
  const LichChieu = _LichChieu.init(sequelize, DataTypes);
  const Phim = _Phim.init(sequelize, DataTypes);

  LichChieu.belongsTo(CumRap, { as: "maCumRap_CumRap", foreignKey: "maCumRap"});
  CumRap.hasMany(LichChieu, { as: "LichChieus", foreignKey: "maCumRap"});
  CumRap.belongsTo(HeThongRap, { as: "maHeThongRap_HeThongRap", foreignKey: "maHeThongRap"});
  HeThongRap.hasMany(CumRap, { as: "CumRaps", foreignKey: "maHeThongRap"});
  LichChieu.belongsTo(Phim, { as: "maPhim_Phim", foreignKey: "maPhim"});
  Phim.hasMany(LichChieu, { as: "LichChieus", foreignKey: "maPhim"});

  return {
    CumRap,
    HeThongRap,
    LichChieu,
    Phim,
  };
}
