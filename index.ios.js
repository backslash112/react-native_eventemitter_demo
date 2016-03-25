/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

 import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  NavigatorIOS
} from 'react-native';

var List = require('./source/components/List.js');
var New = require('./source/components/New.js');
var Actions = require('./source/actions/Actions.js');

var styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

class ReactNativeEventEmitterDemo extends Component {
  render() {
    return (
      <NavigatorIOS 
      ref='nav'
      style={styles.container}
      initialRoute={
        {
          title: 'EventEmitter Demo',
          component: List,
          rightButtonTitle: 'New',
          onRightButtonPress: () => {
            this.refs.nav.push(
            {
              title: 'New Item',
              component: New,
              rightButtonTitle: 'Save',
              onRightButtonPress: () => {
                this._onRightButtonPress()
              }
            });
          }
          
        }

      }
      ></NavigatorIOS>
      );
  }

  _onRightButtonPress() {
    Actions.fire('ButtonPressEvent')
    console.log('1. fire');
    this.refs.nav.pop();
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('ReactNativeEventEmitterDemo', () => ReactNativeEventEmitterDemo);
