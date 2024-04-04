import express from 'express';
import * as errorsController from '../controllers/errorsController';
const router = express.Router();

router.get('*', errorsController.othetAddress)

export default router;
