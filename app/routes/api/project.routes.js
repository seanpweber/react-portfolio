const router = require('express').Router();
const Project = require('../../models/Project');

// GET one project
router.get('/:id', async (req, res) => {
  try {
    const projectData = await Project.findByPk(req.params.id);
    if (!projectData) {
      res.status(404).json({ message: 'No project with this id!' });
      return;
    }
    res.status(200).json(projectData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get all projects
router.get('/', async (req, res) => {
    const projectData = await Project.findAll().catch((err) => {
      res.json(err);
    });
    res.json(projectData);
  });
  

// POST create a new project
router.post('/:id', async (req, res) => {
  try {
    const projectData = await Project.create(req.body);
    res.status(200).json(projectData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// PUT update a project
router.put('/:id', async (req, res) => {
  try {
    const projectData = await Project.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    if (!projectData[0]) {
      res.status(404).json({ message: 'No project with this id!' });
      return;
    }
    res.status(200).json(projectData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// DELETE a project
router.delete('/:id', async (req, res) => {
    try {
      const projectData = await Project.destroy({
        where: {
          id: req.params.id,
        },
      });
      if (!projectData) {
        res.status(404).json({ message: 'No project with this id!' });
        return;
      }
      res.status(200).json(projectData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

module.exports = router;