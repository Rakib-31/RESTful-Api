module.exports = (app) => {
    const universities = require('../controllers/research.controller.js');
    // const researches = require('../controllers/note.controller.js');

    // Create a new departments
    app.post('/universities/researches', universities.create);
    app.post('/universities/researches/topResearches', universities.createTopResearch);

    // Retrieve all departments
    app.get('/universities/researches', universities.findAll);
    app.get('/universities/researches/topResearches', universities.findAllTopResearch);

    // Retrieve a single departments with departmentName
    app.get('/universities/researches/:departmentName', universities.findOne);
    app.get('/universities/researches/topResearches/:researchId', universities.findOneTopResearch);

    // Update a departments with departmentName
    app.put('/universities/researches/:departmentName', universities.update);
    app.put('/universities/researches/topResearches/:researchId', universities.updateTopResearch);

    // Delete a departments with departmentName
    app.delete('/universities/researches/:departmentName', universities.delete);
    app.delete('/universities/researches/topResearches/:researchId', universities.deleteTopResearch);
}