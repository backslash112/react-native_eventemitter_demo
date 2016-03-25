var Store = require('../stores/Store.js');

import React, {
	Component,
	View,
	StyleSheet,
	Text
} from 'react-native';

var styles = StyleSheet.create({
	container: {
		flex: 1,
		marginTop: 65,
		backgroundColor: '#D1EEEE'
	},
	text: {
		textAlign: 'center',
		fontSize: 15,
		margin: 10
	}
});

var text = 'hi~';

class List extends Component {
	render() {
		return (
			<View style={styles.container}>
			<Text style={styles.text}>{text}</Text>
			</View>
			);
	}

	componentDidMount() {
		Store.addChangeListener('ButtonPressEvent', this._handleSaveButtonPressEvent.bind(this));
	}

	_handleSaveButtonPressEvent() {
		console.log('5. got it!');
		text = 'Got it!'
	}
}

module.exports = List;