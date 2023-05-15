import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import React from 'react';

import { width, height, colors } from '../theme/Index';

const PharmacyCard = ({ item, selectPharmacy }) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => selectPharmacy(item)}
      activeOpacity={0.7}>
      <Text style={styles.title}>{item.Adi}</Text>
      <Text style={styles.area}>{item.Bolge}</Text>
    </TouchableOpacity>
  );
};

export default PharmacyCard;

const styles = StyleSheet.create({
  container: {
    minHeight: height * 0.1,
    marginHorizontal: width / 20,
    backgroundColor: colors.WHITE,
    marginBottom: height / 75,
    padding: height / 75,
    borderRadius: 10,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.BLACK
  },
  area: {
    fontSize: 17,
    fontWeight: '500',
    color: colors.BLACK,
    marginTop: height * 0.005
  }
});
