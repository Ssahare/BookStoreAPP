var mongoose = require('mongoose'),
Schema = mongoose.Schema;

var bookModel = new Schema({
	title: {type: String},
	author: {type: String},
	gener: {type: String},
	read: {type: Boolean, default: false}
}, { collection : 'book' });

module.exports = mongoose.model('book',bookModel);