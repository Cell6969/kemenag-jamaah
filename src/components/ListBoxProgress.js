import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ColoredBoxList = ({ tasks }) => {
  return (
    <View style={styles.container}>
      {/* Render colored boxes */}
      {tasks.map((item) => (
        <View
          key={item.id}
          style={[
            styles.box,
            { backgroundColor: '#cfe2f3', borderColor: 'transparent' },
          ]}
        >
          <Text style={styles.boxText}>{item.task}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  box: {
    width: '100%',
    height: 50,
    borderRadius: 10,
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  boxText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  nonScrollableText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default ColoredBoxList;
