import React from 'react';
import {View, StyleSheet} from 'react-native';

const YourApp = () => {
  return (
    <View style={styles.container}>
      <View style={styles.outerCircle}>
        <View style={styles.shadow} />
        <View style={styles.innerCircle} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  outerCircle: {
    width: 200,
    height: 200,
    backgroundColor: '#f7f7f7',
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  innerCircle: {
    width: 150,
    height: 150,
    borderRadius: 100,
    backgroundColor: 'white',
    position: 'absolute',
    alignSelf: 'center',
  },
  shadow: {
    width: 140,
    height: 140,
    borderRadius: 100,
    shadowColor: 'blue',
    shadowOffset: {
      width: 0,
      height: 20,
    },
    shadowOpacity: 1,
    shadowRadius: 20,
    elevation: 30,
  },
});
export default YourApp;
