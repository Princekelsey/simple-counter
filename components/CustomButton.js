import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const CustomButton = ({decreaseCount, increaseCount}) => {
  return (
    <View style={styles.btnContainer}>
      <TouchableOpacity onPress={decreaseCount}>
        <View style={styles.btn1}>
          <Text style={styles.btnText}>Decrease Count</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={increaseCount}>
        <View style={styles.btn2}>
          <Text style={styles.btnText}>Increase Count</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  btnContainer: {
    paddingTop: 30,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  btn1: {
    backgroundColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    padding: 5,
    marginRight: 10,
  },
  btn2: {
    backgroundColor: '#242242',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    padding: 5,
  },

  btnText: {
    fontSize: 15,
    color: '#ffff',
    textTransform: 'uppercase',
  },
});

export default CustomButton;
