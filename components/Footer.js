import React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';
import { Button, Icon, Grid, Col } from 'native-base';
import { withNavigation } from 'react-navigation';

import images from '../assets/images';

class Footer extends React.Component {
  render() {
    let { navigation, next, text, nohelp } = this.props;
    if (!text) text = 'Next';

    return (
      <Grid style={styles.wrapper}>
        <Col style={styles.left}>
          {!nohelp ? (
            <View style={styles.help}>
              <Image source={images.mascot} style={styles.icon} />
              <Text style={styles.iconTitle}>Help</Text>
            </View>
          ) : null}
        </Col>
        <Col style={styles.right}>
          <View style={styles.next}>
            <Button
              iconRight
              style={styles.button}
              onPress={() => navigation.navigate(next)}
            >
              <Icon name='paper-plane' />
              <Text style={styles.buttonText}>{text}</Text>
            </Button>
          </View>
        </Col>
      </Grid>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    left: 0,
    right: 0,
    bottom: 0,
    padding: 16,
    position: 'absolute',
  },
  icon: {
    width: 40,
    height: 40,
    marginBottom: 5,
  },
  left: {
    alignItems: 'flex-start',
  },
  help: {
    alignItems: 'center',
  },
  right: {
    alignItems: 'flex-end',
  },
  next: {
    alignItems: 'center',
  },
  button: {
    padding: 16,
    minWidth: 80,
    borderRadius: 16,
    backgroundColor: '#234D72',
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
  },
});

export default withNavigation(Footer);
