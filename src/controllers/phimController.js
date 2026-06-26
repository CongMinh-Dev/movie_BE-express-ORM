import initModels from "../models/init-models.js";
import sequelize from "../models/connect.js";
import { Op } from 'sequelize';
import { response } from "../config/response.js";
import compress_images from "compress-images"

const model = initModels(sequelize)

// Hàm 1: Lấy tất cả các phim từ bảng Phim2
const layDanhSachPhim = async (req, res) => {
    try {
        let data = await model.Phim2.findAll();
        response(res, data, "Lấy danh sách phim thành công", 200);
    } catch (error) {
        console.log(error);
        response(res, "", "Lỗi server", 500);
    }
}

// Hàm 2: Lấy phim dạng phân trang (Pagination)
const layDanhSachPhimPhanTrang = async (req, res) => {
    try {
        let { page, pageSize } = req.query;

        // Chuyển đổi sang kiểu số nguyên, mặc định trang 1 và 10 phần tử/trang
        let pageNum = parseInt(page) || 1;
        let limit = parseInt(pageSize) || 10;
        let offset = (pageNum - 1) * limit;

        // Lấy dữ liệu kèm tổng số lượng để frontend hiển thị phân trang
        let { count, rows } = await model.Phim2.findAndCountAll({
            limit: limit,
            offset: offset
        });

        const result = {
            totalItems: count,
            totalPages: Math.ceil(count / limit),
            currentPage: pageNum,
            data: rows
        };

        response(res, result, "Lấy danh sách phim phân trang thành công", 200);
    } catch (error) {
        console.log(error);
        response(res, "", "Lỗi server", 500);
    }
}

export {
    layDanhSachPhim,
    layDanhSachPhimPhanTrang,

}