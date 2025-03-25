import express from 'express'
import { Read } from './Controller.js';

const router = express.Router()

router.get('/read',Read);

export default router