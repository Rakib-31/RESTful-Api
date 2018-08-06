
module.exports = function(app) {
    var todoList = require('../controller/controller');
  
    // todoList Routes
    app.route('/members')
      .get(todoList.list_all_tasks)
      .post(todoList.create_a_task);

    app.route('/members/:memberId')
      .get(todoList.read_a_task)
      .put(todoList.update_a_task)
      .delete(todoList.delete_a_task);
  
    // todoList Routes of sangeeta
    app.route('/profiles/sangeetas')
      .get(todoList.list_all_sangeeta)
      .post(todoList.create_a_sangeeta);

      app.route('/profiles/sangeetas/:id')
      .get(todoList.read_a_sangeeta)
      .put(todoList.update_a_sangeeta)
      .delete(todoList.delete_a_sangeeta);

    // todoList Routes of utpal
    app.route('/profiles/utpals')
    .get(todoList.list_all_utpal)
    .post(todoList.create_a_utpal);

    app.route('/profiles/utpals/:id')
    .get(todoList.read_a_utpal)
    .put(todoList.update_a_utpal)
    .delete(todoList.delete_a_utpal);

    // todoList Routes of shamim
    app.route('/profiles/shamims')
    .get(todoList.list_all_shamim)
    .post(todoList.create_a_shamim);

    app.route('/profiles/shamims/:id')
    .get(todoList.read_a_shamim)
    .put(todoList.update_a_shamim)
    .delete(todoList.delete_a_shamim);
  };
  