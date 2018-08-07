const mongoose = require('mongoose');

const Research_Paper = mongoose.Schema({
    total_research_paper: String,
    research_content: String,
    top_research: String,
    department: String
}, {
    timestamps: true
});

module.exports = mongoose.model('Research_paper', Research_Paper);