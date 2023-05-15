import { View, Text, StyleSheet, Linking, Pressable } from 'react-native';
import React from 'react';

import { width, height, colors } from '../theme/Index';

import MapView, { Marker } from 'react-native-maps';

const Modal = ({ item }) => {
  const openMap = (latitude, longitude) => {
    let URL = `http://maps.apple.com/?ll=${latitude},${longitude}`;
    //Linking.openURL(URL);
  };

  const formatPhoneNumber = phoneNumber => {
    const cleaned = ('' + phoneNumber).replace(/\D/g, '');

    const match = cleaned.match(/^(\d{4})(\d{3})(\d{4})$/);

    if (match) return '(' + match[1] + ') ' + match[2] + ' ' + match[3];

    return phoneNumber;
  };

  return (
    <View style={styles.container}>
      <View style={styles.line} />

      <Text style={styles.title}>{item.Adi}</Text>
      <Text style={styles.area}>{item.Bolge}</Text>
      <Text style={styles.area}>{formatPhoneNumber(item.Telefon)}</Text>
      <Text style={styles.area}>{item.Adres}</Text>

      <Pressable onPress={() => openMap(item.LokasyonX, item.LokasyonY)}>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: item.LokasyonX,
            longitude: item.LokasyonY,
            latitudeDelta: 0.001,
            longitudeDelta: 0.001
          }}>
          <Marker
            coordinate={{ latitude: item.LokasyonX, longitude: item.LokasyonY }}
            title={item.Adi}
            description={item.Adres}
          />
        </MapView>
      </Pressable>
    </View>
  );
};

export default Modal;

const styles = StyleSheet.create({
  container: {
    width,
    height: height / 2,
    backgroundColor: colors.WHITE,
    position: 'absolute',
    bottom: 0,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20
  },
  line: {
    width: width / 8,
    height: height / 150,
    backgroundColor: colors.BLACK,
    alignSelf: 'center',
    marginVertical: height / 50,
    borderRadius: height / 100
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.BLACK,
    textAlign: 'center',
    marginBottom: height / 50
  },
  area: {
    fontSize: 17,
    fontWeight: '600',
    color: colors.BLACK,
    textAlign: 'center',
    marginBottom: height / 75
  },
  map: {
    width: width - width / 10,
    height: height / 4,
    alignSelf: 'center',
    borderRadius: 10
  }
});
