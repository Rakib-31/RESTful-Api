
var mongoose = require('mongoose'),
Members = mongoose.model('members');
Sangeeta = mongoose.model('sangeetas');
Utpal = mongoose.model('utpals');
Faruqe = mongoose.model('faruqes');

exports.list_all_tasks = function(req, res, next) {
  Members.find({}).then(function(member) {
    res.send(member);
  }).catch(next);
};

exports.create_a_task = function(req, res, next) {
  Members.create(req.body).then(function(member){
    res.send(member);
  }).catch(next);
};

exports.read_a_task = function(req, res, next) {
  members.findById(req.params.memberId).then(function(member) {
    res.json(member);
  }).catch(next);
};

exports.update_a_task = function(req, res, next) {
  Members.findOneAndUpdate({_id: req.params.memberId}, req.body).then(function(member) {
    res.send(member);
  }).catch(next);
};

exports.delete_a_task = function(req, res, next) {
    Members.findOneAndRemove({ _id: req.params.memberId}).then(function(member) {
      res.json(member);
    }).catch(next);
  };

//controlling all about sangeetas info

exports.list_all_sangeeta = function(req, res, next) {
  Sangeeta.find({}).then(function(sangeeta) {
    res.send(sangeeta);
  }).catch(next);
};

exports.create_a_sangeeta = function(req, res, next) {
  Sangeeta.create(req.body).then(function(sangeeta){
    res.send(sangeeta);
  }).catch(next);
};

exports.read_a_sangeeta = function(req, res, next) {
  Sangeeta.findById(req.params.id).then(function(sangeeta) {
    res.json(sangeeta);
  }).catch(next);
};

exports.update_a_sangeeta = function(req, res, next) {
  Sangeeta.findOneAndUpdate({_id: req.params.id}, req.body).then(function(sangeeta) {
    res.send(sangeeta);
  }).catch(next);
};

exports.delete_a_sangeeta = function(req, res, next) {
  Sangeeta.findOneAndRemove({ _id: req.params.id}).then(function(sangeeta) {
      res.json(sangeeta);
    }).catch(next);
  };

//controlling all about utpals info

exports.list_all_utpal = function(req, res, next) {
  Utpal.find({}).then(function(utpal) {
    res.send(utpal);
  }).catch(next);
};

exports.create_a_utpal = function(req, res, next) {
  Utpal.create(req.body).then(function(utpal){
    res.send(utpal);
  }).catch(next);
};

exports.read_a_utpal = function(req, res, next) {
  Utpal.findById(req.params.id).then(function(sangeeta) {
    res.json(utpal);
  }).catch(next);
};

exports.update_a_utpal = function(req, res, next) {
  Utpal.findOneAndUpdate({_id: req.params.id}, req.body).then(function(utpal) {
    res.send(utpal);
  }).catch(next);
};

exports.delete_a_utpal = function(req, res, next) {
  Utpal.findOneAndRemove({ _id: req.params.id}).then(function(utpal) {
      res.json(utpal);
    }).catch(next);
  };

//controlling all about Faruqes info

exports.list_all_faruqe = function(req, res, next) {
  Faruqe.find({}).then(function(faruqe) {
    res.send(faruqe);
  }).catch(next);
};

exports.create_a_faruqe = function(req, res, next) {
  Faruqe.create(req.body).then(function(faruqe){
    res.send(faruqe);
  }).catch(next);
};

exports.read_a_faruqe = function(req, res, next) {
  Faruqe.findById(req.params.id).then(function(faruqe) {
    res.json(faruqe);
  }).catch(next);
};

exports.update_a_faruqe = function(req, res, next) {
  Faruqe.findOneAndUpdate({_id: req.params.id}, req.body).then(function(faruqe) {
    res.send(faruqe);
  }).catch(next);
};

exports.delete_a_faruqe = function(req, res, next) {
  Faruqe.findOneAndRemove({ _id: req.params.id}).then(function(faruqe) {
      res.json(faruqe);
    }).catch(next);
  };
