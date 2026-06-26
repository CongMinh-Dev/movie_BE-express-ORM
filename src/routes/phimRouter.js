import express from 'express'
import { layDanhSachPhim, layDanhSachPhimPhanTrang } from '../controllers/phimController'



const phimRouter = express.Router()


phimRouter.get("/LayDanhSachPhim", layDanhSachPhim)
phimRouter.get("/LayDanhSachPhimPhanTrang", layDanhSachPhimPhanTrang)







export default phimRouter