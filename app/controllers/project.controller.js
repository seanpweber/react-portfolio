const Project = require("../models/Project.js");

// Create and Save a new Project
exports.create = (req, res) => {
    // Validate request
    if (!req.body) {
        res.status(400).send({
        message: "Content can not be empty!"
        });
    }

    // Create a Project
    const project = new Project({
        image: req.body.image,
        title: req.body.title,
        description: req.body.description,
        url: req.body.url
    });

    // Save Project in the database
    Project.create(project, (err, data) => {
        if (err)
            res.status(500).send({
                message:
                err.message || "Some error occurred while creating the Project."
            });
        else res.send(data);
    });
};

// Retrieve all Projects from the database.
exports.findAll = (req, res) => {
    Project.getAll((err, data) => {
        if (err)
            res.status(500).send({
                message:
                err.message || "Some error occurred while retrieving projects."
            });
        else res.send(data);
    });
};

// Find a single Project with a projectId
exports.findOne = (req, res) => {
    Project.findById(req.params.id, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                message: `Not found Project with id ${req.params.id}.`
                });
            } else {
                res.status(500).send({
                message: "Error retrieving Project with id " + req.params.id
                });
            }
        } else res.send(data);
    });
};

// Update a Project identified by the projectId in the request
exports.update = (req, res) => {
    // Validate Request
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }
    
    Project.updateById(
        req.params.id,
        new Project(req.body),
        (err, data) => {
          if (err) {
                if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found Project with id ${req.params.id}.`
                });
                } else {
                res.status(500).send({
                    message: "Error updating Project with id " + req.params.id
                });
                }
            } else res.send(data);
        }
    );
};

// Delete a Project with the specified projectId in the request
exports.delete = (req, res) => {
    Project.remove(req.params.id, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                message: `Not found Project with id ${req.params.id}.`
                });
            } else {
                res.status(500).send({
                message: "Could not delete Project with id " + req.params.id
                });
            }
        } else res.send({ message: `Project was deleted successfully!` });
    });
};

// Delete all Project from the database.
exports.deleteAll = (req, res) => {
    Project.removeAll((err, data) => {
        if (err)
            res.status(500).send({
                message:
                err.message || "Some error occurred while removing all customers."
            });
        else res.send({ message: `All Project were deleted successfully!` });
    });
};