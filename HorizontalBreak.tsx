import React from 'react';
import {StyleSheet, View} from 'react-native';

const styles = StyleSheet.create({
  container: {height: 1, width: '100%', paddingHorizontal: 40},
  horizontalBreak: {height: 0.5, backgroundColor: '#d8d8d8'},
});

const HorizontalBreak = () => {
  return (
    <View style={styles.container}>
      <View style={styles.horizontalBreak} />
    </View>
  );
};

export default HorizontalBreak;

