const mongoose = require('mongoose');

const Top_Research_Paper = mongoose.Schema({
    researcher_name: String,
    department: String,
    type: String,
    research_topic: String,
    date: String
}, {
    timestamps: true
});

module.exports = mongoose.model('TopResearch', Top_Research_Paper);