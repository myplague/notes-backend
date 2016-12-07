const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/notes-backend');

const NoteSchema = new mongoose.Schema({
  Decription:String,
  Created_date:String,
  Author: String,
})


const Note = mongoose.model('Note', NoteSchema);
