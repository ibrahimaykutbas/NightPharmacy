import { SafeAreaView, View, Text, StyleSheet, FlatList } from 'react-native';
import React, { useState, useEffect } from 'react';

import useApi from './hooks/useApi';
import getPharmacies from './api/pharmacies';

import PharmacyCard from './components/PharmacyCard';
import Modal from './components/Modal';
import Input from './components/Input';

import { colors, height } from './theme/Index';

import RNModal from 'react-native-modal';

const App = () => {
  const [selectedPharmacy, setSelectedPharmacy] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [value, setValue] = useState('');

  const getPharmaciesApi = useApi(getPharmacies.getPharmacies);

  const getPharmaciesRequest = async () => {
    try {
      const data = await getPharmaciesApi.request();
      if (data.status !== 200) return;
    } catch (error) {
      console.log('getPharmaciesRequest error:', error);
    }
  };

  const getDateOfToday = () => {
    const today = new Date();
    const day = today.getDate();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();

    let dateOfToday = `${day} / ${month} / ${year}`;
    return dateOfToday;
  };

  useEffect(() => {
    getPharmaciesRequest();
  }, []);

  const toggleModal = () => setModalVisible(!modalVisible);

  const renderItem = ({ item }) => (
    <PharmacyCard item={item} selectPharmacy={selectPharmacy} />
  );

  const selectPharmacy = item => {
    setSelectedPharmacy(item);
    toggleModal();
  };

  const filteredData = () => {
    return getPharmaciesApi.data.filter(pharmacy =>
      pharmacy.Bolge.toLocaleLowerCase('tr-TR').includes(
        value.toLocaleLowerCase('tr-TR')
      )
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      {getPharmaciesApi.loading && <Text> Yükleniyor... </Text>}

      <Text style={styles.date}> {getDateOfToday()} </Text>

      <FlatList
        data={filteredData()}
        renderItem={renderItem}
        ListHeaderComponent={<Input value={value} setValue={setValue} />}
        ListHeaderComponentStyle={{ marginTop: height * 0.01 }}
        keyExtractor={item => item.EczaneAdi}
      />

      <RNModal
        isVisible={modalVisible}
        style={{ margin: 0 }}
        swipeDirection="down"
        onSwipeComplete={toggleModal}
        backdropOpacity={0.4}
        onBackdropPress={toggleModal}>
        <Modal item={selectedPharmacy} />
      </RNModal>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.WHITE
  },
  date: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: height * 0.02
  }
});
