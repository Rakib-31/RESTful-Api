const Research_paper = require('../models/research.model.js');
const TopResearch = require('../models/research.model2.js');


// Create and Save a new  Research
exports.create = (req, res) => {
    // Validate request
    if (!req.body.research_content) {
        return res.status(400).send({
            message: "Research content can not be empty"
        });
    }

    // Create a Research
    const research_paper = new Research_paper({
        total_research_paper: req.body.total_research_paper,
        total_researcher: req.body.total_researcher,
        research_content: req.body.research_content,
        top_research: req.body.top_research,
        department: req.body.department
    });

    // Save Research in the database
    research_paper.save()
        .then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the Research."
            });
        });
};

//Top Research create
exports.createTopResearch = (req, res) => {
    // Validate request
    if (!req.body.research_topic) {
        return res.status(400).send({
            message: "Research Topic can not be empty"
        });
    }

    // Create a Top Research
    const top_research = new TopResearch({
        researcher_name: req.body.researcher_name,
        department: req.body.department,
        type: req.body.type,
        research_topic: req.body.research_topic,
        date: req.body.date
    });

    // Save Top Research in the database
    top_research.save()
        .then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the Top Research."
            });
        });
};


// Retrieve and return all Research from the database.
exports.findAll = (req, res) => {
    Research_paper.find()
        .then(universities => {
            res.send(universities);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving Research."
            });
        });
};


// Retrieve and return all Top Research from the database.

exports.findAllTopResearch = (req, res) => {
    TopResearch.find()
        .then(universities => {
            res.send(universities);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving Research."
            });
        });
};

// Find a single Research with a researchId
exports.findOne = (req, res) => {
    Research_paper.findById(req.params.researchId)
        .then(research_paper => {
            if (!research_paper) {
                return res.status(404).send({
                    message: "research not found with researchId " + req.params.researchId
                });
            }
            res.send(research_paper);
        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "research not found with researchId " + req.params.researchId
                });
            }
            return res.status(500).send({
                message: "Error retrieving research with researchId " + req.params.researchId
            });
        });
};


// Find a single Top Research with a researchId
exports.findOneTopResearch = (req, res) => {
    TopResearch.findById(req.params.researchId)
        .then(top_research => {
            if (!top_research) {
                return res.status(404).send({
                    message: "Top Research not found with researchId " + req.params.researchId
                });
            }
            res.send(top_research);
        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "Top Research not found with researchId " + req.params.researchId
                });
            }
            return res.status(500).send({
                message: "Error retrieving Top Research with researchId " + req.params.researchId
            });
        });
};

// Update a Research identified by the departmentName in the request
exports.update = (req, res) => {
    // Validate Request
    if (!req.body.research_content) {
        return res.status(400).send({
            message: "Research content can not be empty"
        });
    }

    // Find Research and update it with the request body
    Research_paper.findByIdAndUpdate(req.params.researchId, {
            total_research_paper: req.body.total_research_paper,
            total_researcher: req.body.total_researcher,
            research_content: req.body.research_content,
            top_research: req.body.top_research,
            department: req.body.department
        }, { new: true })
        .then(research_paper => {
            if (!research_paper) {
                return res.status(404).send({
                    message: " research not found with researchId " + req.params.researchId
                });
            }
            res.send(research_paper);
        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "research not found with researchId " + req.params.researchId
                });
            }
            return res.status(500).send({
                message: "Error updating Research with researchId " + req.params.researchId
            });
        });
};


// Update a Top Research identified by the researchId in the request
exports.updateTopResearch = (req, res) => {
    // Validate Request
    if (!req.body.research_topic) {
        return res.status(400).send({
            message: "Top Research content can not be empty"
        });
    }

    // Find Department and update it with the request body
    TopResearch.findByIdAndUpdate(req.params.researchId, {
            researcher_name: req.body.researcher_name,
            department: req.body.department,
            type: req.body.type,
            research_topic: req.body.research_topic,
            date: req.body.date
        }, { new: true })
        .then(top_research => {
            if (!top_research) {
                return res.status(404).send({
                    message: " Top research not found with researchId " + req.params.researchId
                });
            }
            res.send(top_research);
        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: " top research not found with researchId " + req.params.researchId
                });
            }
            return res.status(500).send({
                message: "Error updating top research with researchId " + req.params.researchId
            });
        });
};


// Delete a research with the specified researchId in the request
exports.delete = (req, res) => {
    Research_paper.findByIdAndRemove(req.params.researchId)
        .then(research_paper => {
            if (!research_paper) {
                return res.status(404).send({
                    message: "research not found with id " + req.params.researchId
                });
            }
            res.send({ message: "research deleted successfully!" });
        }).catch(err => {
            if (err.kind === 'ObjectId' || err.name === 'NotFound') {
                return res.status(404).send({
                    message: "research not found with researchId " + req.params.researchId
                });
            }
            return res.status(500).send({
                message: "Could not delete research with researchId " + req.params.researchId
            });
        });
};


// Delete a Top Research with the specified researchId in the request
exports.deleteTopResearch = (req, res) => {
    TopResearch.findByIdAndRemove(req.params.researchId)
        .then(top_research => {
            if (!top_research) {
                return res.status(404).send({
                    message: "Top research not found with id " + req.params.researchId
                });
            }
            res.send({ message: "Top research deleted successfully!" });
        }).catch(err => {
            if (err.kind === 'ObjectId' || err.name === 'NotFound') {
                return res.status(404).send({
                    message: " Top research not found with researchId " + req.params.researchId
                });
            }
            return res.status(500).send({
                message: "Could not delete Top research with researchId " + req.params.researchId
            });
        });
};