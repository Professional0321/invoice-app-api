import express from 'express';
import { getAllAccounts } from '../controllers/account.controller';
import { authenticateToken } from '../middleware/auth.middleware';

const router = express.Router();

router.get('/all', authenticateToken, getAllAccounts);

export default router;
