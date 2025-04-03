import express from 'express'
import { Insert, Read } from './Controller.js';

const router = express.Router()

router.get('/read',Read);

router.post ('/insert',Insert)

export default router