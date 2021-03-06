import React from 'react';
import { StyleSheet, View, TextInput } from 'react-native';

export default class Input extends React.Component {
  render() {
    const { value, password, keyboard } = this.props;

    return (
      <View>
        <View style={styles.wrapper}>
          <TextInput
            maxLength={40}
            editable={true}
            keyboardType={keyboard ? keyboard : 'default'}
            style={styles.input}
            secureTextEntry={password}
            placeholder={value ? value : 'Enter text'}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    padding: 8,
    marginTop: 30,
    marginLeft: 60,
    marginRight: 60,
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
  },
  input: {
    fontSize: 24,
    color: 'grey',
    alignSelf: 'center',
  },
  iconContainer: {
    flex: 1,
    marginTop: 32,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {},
  iconTitle: {
    padding: 4,
    fontSize: 10,
    maxWidth: 60,
    textAlign: 'center',
  },
});
