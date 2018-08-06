var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var memberSchema = new Schema({
    name:{
        type: String,
        required: [true,'Name field is required']
    },
    university:{
        type: String,
        required: [true,'Department field is required']
    },
    department:{
      type: String,
      required: [true,'Department field is required']
    },
    Created_date: {
      type: Date,
      default: Date.now
    },
    status: {
      type: [{
        type: String,
        enum: ['pending', 'ongoing', 'completed']
      }],
      default: ['pending']
    }  
  });

  module.exports = mongoose.model('members', memberSchema);

  //creating sangeetas schema
  var sangeetaSchema = new Schema({
    research:{
        type: String,
        required: [true,'Research field is required']
    },
    Created_date: {
      type: Date,
      default: Date.now
    },
    status: {
      type: [{
        type: String,
        enum: ['pending', 'ongoing', 'completed']
      }],
      default: ['pending']
    }  
  });

  module.exports = mongoose.model('sangeetas', sangeetaSchema);

  //creating utpals schema
  var utpalSchema = new Schema({
    research:{
        type: String,
        required: [true,'Research field is required']
    },
    Created_date: {
      type: Date,
      default: Date.now
    },
    status: {
      type: [{
        type: String,
        enum: ['pending', 'ongoing', 'completed']
      }],
      default: ['pending']
    }  
  });

  module.exports = mongoose.model('utpals', utpalSchema);

  //creating faruqes schema
  var faruqeSchema = new Schema({
    research:{
        type: String,
        required: [true,'Research field is required']
    },
    Created_date: {
      type: Date,
      default: Date.now
    },
    status: {
      type: [{
        type: String,
        enum: ['pending', 'ongoing', 'completed']
      }],
      default: ['pending']
    }  
  });

  module.exports = mongoose.model('faruqes', faruqeSchema);

  //creating shamim schema
  var shamimSchema = new Schema({
    research:{
        type: String,
        required: [true,'Research field is required']
    },
    Created_date: {
      type: Date,
      default: Date.now
    },
    status: {
      type: [{
        type: String,
        enum: ['pending', 'ongoing', 'completed']
      }],
      default: ['pending']
    }  
  });

  module.exports = mongoose.model('shamims', shamimSchema);