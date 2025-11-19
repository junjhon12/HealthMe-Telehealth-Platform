const express = require('express');
const router = express.Router();
const insuranceController = require('../controllers/insuranceController');
const authMiddleware = require('../middleware/authMiddleware');

// POST /api/insurance - Add new policy
router.post('/', authMiddleware, insuranceController.addInsurance);

// GET /api/insurance - Get all policies for logged-in user
router.get('/', authMiddleware, insuranceController.getInsurance);

module.exports = router;