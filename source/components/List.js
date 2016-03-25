
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

class List extends Component {

	render() {
		return (
			<View style={styles.container}>
			<Text style={styles.text}>List</Text>
			</View>
			);
	}
}

module.exports = List;