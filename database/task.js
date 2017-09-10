var mongoose = require('mongoose');


var task = mongoose.Schema({
    _id: Schema.Types.ObjectId,
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
      creator_name: String,
      user_name: String
    }],
    status: String,
    is_urgent: { type: Boolean, default: false },
    description: String,
    creatorname: String,
    username: String,
});

module.exports = mongoose.model('Task', task);
