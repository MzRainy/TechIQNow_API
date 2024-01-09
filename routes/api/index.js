const router = require('express').Router();
const userRoutes = require('./user');
const thoughtRoutes = require('./thoughts');
const { model } = require('mongoose');

router.use('/user', userRoutes);
router.use('./thoughts', thoughtRoutes);

model.exports = router;
