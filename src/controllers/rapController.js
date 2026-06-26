import initModels from "../models/init-models.js";
import sequelize from "../models/connect.js";
import { Op } from 'sequelize';
import { response } from "../config/response.js";
import compress_images from "compress-images"

const model = initModels(sequelize)

const layThongTinLichChieuHeThongRap = async (req, res) => {
    try {
        let { maHeThongRap } = req.query;

        if (!maHeThongRap) {
            return response(res, "", "Vui lòng cung cấp maHeThongRap", 400);
        }

        // Thay vì dùng alias cũ, hãy dùng đúng tên alias trong init-models.js
        let data = await model.HeThongRap.findAll({
            where: { maHeThongRap: maHeThongRap },
            include: [{
                model: model.CumRap,
                as: 'CumRaps',
                include: [{
                    model: model.LichChieu,
                    as: 'LichChieus', // Khớp với CumRap.hasMany(LichChieu, { as: "LichChieus" ... })
                    include: [{
                        model: model.Phim,
                        as: 'maPhim_Phim' // Khớp với LichChieu.belongsTo(Phim, { as: "maPhim_Phim" ... })
                    }]
                }]
            }]
        });

        // Xử lý transform (chỉnh sửa tên thuộc tính để khớp với cấu trúc JSON mong muốn)
        const result = data.map(heThong => ({
            maHeThongRap: heThong.maHeThongRap,
            tenHeThongRap: heThong.tenHeThongRap,
            logo: heThong.logo,
            // Đổi 'lstCumRap' thành 'CumRaps' để khớp với dữ liệu lấy từ DB
            lstCumRap: heThong.CumRaps.map(cumRap => {
                const phimMap = new Map();

                cumRap.LichChieus.forEach(lich => {
                    const phim = lich.maPhim_Phim;
                    if (!phimMap.has(phim.maPhim)) {
                        phimMap.set(phim.maPhim, {
                            ...phim.toJSON(),
                            lstLichChieuTheoPhim: []
                        });
                    }
                    phimMap.get(phim.maPhim).lstLichChieuTheoPhim.push({
                        maLichChieu: lich.maLichChieu,
                        maRap: lich.maRap,
                        tenRap: lich.tenRap,
                        ngayChieuGioChieu: lich.ngayChieuGioChieu,
                        giaVe: lich.giaVe
                    });
                });

                return {
                    maCumRap: cumRap.maCumRap,
                    tenCumRap: cumRap.tenCumRap,
                    diaChi: cumRap.diaChi,
                    hinhAnh: cumRap.hinhAnh,
                    danhSachPhim: Array.from(phimMap.values())
                };
            })
        }));

        response(res, result, "Lấy thông tin lịch chiếu thành công", 200);

    } catch (error) {
        console.log(error);
        response(res, "", "Lỗi server", 500);
    }
}

export {
    layThongTinLichChieuHeThongRap,

}