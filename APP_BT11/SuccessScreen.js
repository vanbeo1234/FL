// SuccessScreen.js
import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SuccessScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { phoneNumber } = route.params || {}; 

  useEffect(() => {
    const storePhoneNumber = async () => {
      try {
        await AsyncStorage.setItem('phoneNumber', phoneNumber);
      } catch (e) {
        console.log('Lỗi khi lưu số điện thoại', e);
      }
    };

    if (phoneNumber) {
      storePhoneNumber();
    }
  }, [phoneNumber]);

  const handleGoBack = () => {
    navigation.popToTop();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>🎉 Chúc mừng!</Text>
      <Text style={styles.message}>
        Bạn đã đăng nhập thành công bằng số điện thoại: {phoneNumber}
      </Text>
      <TouchableOpacity style={styles.button} onPress={handleGoBack}>
        <Text style={styles.buttonText}>Quay về trang chính</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F9FBFC',
    padding: 20,
  },
  header: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#2ECC71',
    marginBottom: 20,
    textAlign: 'center',
  },
  message: {
    fontSize: 18,
    color: '#34495E',
    textAlign: 'center',
    marginBottom: 40,
    lineHeight: 24,
  },
  button: {
    backgroundColor: '#1ABC9C',
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 30,
    alignItems: 'center',
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
});

export default SuccessScreen;
