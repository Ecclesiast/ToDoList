var express = require('express');
var app = express();
var mongoose = require('mongoose');
var Task = require('./database/task.js');

var bodyParser = require('body-parser');
mongoose.connect('mongodb://localhost:27017/ToDo');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/tasklist', function(req, res){
    Task.find({}, function(err, docs){
      if(err)
        return console.log(err);

      res.json(docs);
    });
});

app.post('/tasklist', function(req, res){
      console.log(req.body);
      var task = new Task(req.body);
      task.save(function(err){
        if (err) return console.log(err);
      });
      res.json(task);
});

app.delete('/tasklist/:id', function(req, res){
    var id = req.params.id;
    Task.remove({_id: mongoose.Types.ObjectId(id)}, function(err, doc){
        res.json(doc);
    });
});

app.get('/tasklist/:id', function (req, res) {
  var id = req.params.id;
  Task.findOne({_id: mongoose.Types.ObjectId(id)}, function (err, doc) {
    res.json(doc);
  });
});

app.put('/tasklist/:id', function (req, res) {
  var id = req.params.id;
  Task.findByIdAndUpdate({_id: mongoose.Types.ObjectId(id)},
    {
      title: req.body.title,
      deadline: req.body.deadline,
      status: req.body.status,
      category: req.body.category,
      tags: req.body.tags,
      is_urgent: req.body.is_urgent,
      creatorname: req.body.creatorname,
      username: req.body.username,
      description: req.body.description
    }, function (err, doc) {
      res.json(doc);
    }
  );
});

app.use(express.static(__dirname + '/public'));

app.listen(3000);
console.log('The connection is on port ' + "3000");
