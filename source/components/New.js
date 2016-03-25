import React, {
	View,
	Component,
	StyleSheet
} from 'react-native';

var styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#E0EEE0'
	}
});

class New extends Component {
	render() {
		return <View style={styles.container}></View>
	}
}

module.exports = New;