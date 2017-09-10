var mongoose = require('mongoose');


var task = mongoose.Schema({
    //_id: Schema.Types.ObjectId,
   //slug нужен для того, чтобы передавать в урл его значение, вместо _id в случае запроса
    slug: String,
    title: String,
    current_data: { type: Date, default: Date.now },
    deadline: String,
    tags: [String],
    category: String,
    date_of_done: Date,
    subtask: [{
      _id: mongoose.Schema.Types.ObjectId,
      slug: String,
      title: String,
      current_data: { type: Date, default: Date.now },
      date_of_done: Date,
      deadline: Date,
      tags: [String],
      category: String,
      status: String,
      description: String,
      creator_id: mongoose.Schema.Types.ObjectId,
      user_id: mongoose.Schema.Types.ObjectId
    }],
    status: String,
    is_urgent: { type: Boolean, default: false },
    description: String,
    creator_id: mongoose.Schema.Types.ObjectId,
    creatorname: String,
    username: String,
    user_id: mongoose.Schema.Types.ObjectId
});

module.exports = mongoose.model('Task', task);
