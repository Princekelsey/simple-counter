import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Header from './components/Header';
import CustomButton from './components/CustomButton';

const App = () => {
  const [currectCount, setCount] = useState(0);

  const increaseCount = () => {
    setCount(currectCount + 1);
  };

  const decreaseCount = () => {
    setCount(currectCount - 1);
  };

  return (
    <View style={styles.container}>
      <Header title="NUMBER COUNTER" />
      <View style={styles.circle}>
        <Text style={styles.text}>{currectCount}</Text>
      </View>

      <CustomButton
        increaseCount={increaseCount}
        decreaseCount={decreaseCount}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
  },
  text: {
    textAlign: 'center',
    alignContent: 'center',
    fontSize: 23,
    color: '#fff',
  },
  circle: {
    width: 77,
    height: 77,
    backgroundColor: 'darkslateblue',
    borderRadius: 77 / 2,
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 200,
  },
});

export default App;
