const router = require('express').Router();

const projectRoutes = require('./project.routes.js');

router.use('/api/projects', projectRoutes);

module.exports = router;