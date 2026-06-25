import express from 'express'
import { layThongTinLichChieuHeThongRap } from '../controllers/rapController.js'



const rapRouter = express.Router()


rapRouter.get("/LayThongTinLichChieuHeThongRap", layThongTinLichChieuHeThongRap)






export default rapRouter