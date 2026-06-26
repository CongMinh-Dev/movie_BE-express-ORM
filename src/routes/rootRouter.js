import express from 'express'

import rapRouter from './rapRouter.js';
import phimRouter from './phimRouter.js';

const rootRouter = express.Router()


rootRouter.use("/api/QuanLyRap", rapRouter)
rootRouter.use("/api/QuanLyPhim", phimRouter)




export default rootRouter;


