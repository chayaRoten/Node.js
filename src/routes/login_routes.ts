import express from 'express';
import * as loginControllet from '../controllers/loginController';
const router = express.Router();

router.post('/login', loginControllet.loginUser)
router.post('/sighUp', loginControllet.registerUser)

export default router;
