import express from 'express'

import rapRouter from './rapRouter.js';

const rootRouter = express.Router()


rootRouter.use("/api/QuanLyRap", rapRouter)


export default rootRouter;


