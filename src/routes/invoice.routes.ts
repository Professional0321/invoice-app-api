import express from 'express';
import { getInvoices } from '../controllers/invoice.controller';
import { authenticateToken } from '../middleware/auth.middleware';

const router = express.Router();

router.get('/all', authenticateToken, getInvoices);

export default router;
