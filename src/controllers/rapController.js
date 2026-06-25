import initModels from "../models/init-models.js";
import sequelize from "../models/connect.js";
import { Op } from 'sequelize';
import { response } from "../config/response.js";
import compress_images from "compress-images"

const model = initModels(sequelize)

const layThongTinLichChieuHeThongRap = async (req, res) => {
    try {
        let { maHeThongRap } = req.query;

        // Nếu người dùng không truyền maHeThongRap thì báo lỗi
        if (!maHeThongRap) {
            return response(res, "", "Vui lòng cung cấp maHeThongRap", 400);
        }

        let data = await model.HeThongRap.findAll({
            where: { maHeThongRap: maHeThongRap },
            include: [{
                model: model.CumRap,
                as: 'CumRaps',
                include: [{
                    model: model.LichChieu,
                    as: 'LichChieus',
                    include: [{
                        model: model.Phim,
                        as: 'maPhim_Phim' // Kiểm tra tên alias chính xác trong init-models.js của bạn
                    }]
                }]
            }]
        });

        // Dùng hàm response có sẵn của bạn để trả về
        response(res, data, "Lấy thông tin lịch chiếu thành công", 200);

    } catch (error) {
        console.log(error);
        response(res, "", "Lỗi server", 500);
    }
}

export {
    layThongTinLichChieuHeThongRap,

}