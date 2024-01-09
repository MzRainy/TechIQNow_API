const router = require('express').Router();
const userRoutes = require('./user');
const thoughtRoutes = require('./thought');
const { model } = require('mongoose');

router.use('/users', userRoutes);
router.use('./thoughts', thoughtRoutes);

model.exports = router;
