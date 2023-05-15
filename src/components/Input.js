import { View, Text, StyleSheet, TextInput } from 'react-native';
import React from 'react';

import { width, height, colors } from '../theme/Index';

const Input = ({ value, setValue }) => {
  return (
    <View style={styles.container}>
      <TextInput
        value={value}
        onChangeText={setValue}
        placeholder="Aradığınız Semt"
        placeholderTextColor={colors.GREY}
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  container: {
    height: height / 25,
    backgroundColor: colors.WHITE,
    marginHorizontal: width / 20,
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5
  }
});
