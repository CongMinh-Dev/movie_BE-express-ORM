import express from 'express'
import { layDanhSachPhim, layDanhSachPhimPhanTrang } from '../controllers/phimController.js'



const phimRouter = express.Router()


phimRouter.get("/LayDanhSachPhim", layDanhSachPhim)
phimRouter.get("/LayDanhSachPhimPhanTrang", layDanhSachPhimPhanTrang)







export default phimRouter