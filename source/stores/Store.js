var AppDispatcher = require('../dispatcher/AppDispatcher');
var assign = require('object-assign');
var EventEmitter = require('events').EventEmitter;

var change_event_type = '';

var Store = assign({}, EventEmitter.prototype, {
	addChangeListener: function(type, callback) {
		console.log('0. add listener');
		this.change_event_type = type;
		this.on(type, callback);
	},
	removeChangeListener: function(type, callback) {
		this.removeListener(type, callback);
	},
	emitChange: function() {
		this.emit(this.change_event_type);
		console.log('4. emit');
	}
});

function handleAction(task) {
	Store.emitChange();
	console.log('3. handleAction() -> emitChange()');
}

Store.dispatchToken = AppDispatcher.register(handleAction);
module.exports = Store;