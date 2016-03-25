var AppDispatcher = require('../dispatcher/AppDispatcher');

var ActionCreators = {

	fire: function(event) {

		var action = {
			type: event,
			text: ''
		};
		AppDispatcher.dispatch(action);
		console.log('2. dispatch action');
	}
};

module.exports = ActionCreators;
