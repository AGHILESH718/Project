import express from 'express'
import { Insert, Read, Update } from './Controller.js';

const router = express.Router()

router.get('/read',Read);

router.post ('/insert',Insert);

router.put('/update/:Email',Update);

export default router