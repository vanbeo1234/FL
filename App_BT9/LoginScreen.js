// LoginScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, Keyboard } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const navigation = useNavigation();

  const validatePhoneNumber = (number) => {
    const phoneRegex = /^(0[3|5|7|8|9])+([0-9]{8})$/;
    return phoneRegex.test(number);
  };

  const handleContinue = () => {
    if (validatePhoneNumber(phoneNumber)) {
      navigation.navigate('OTPScreen', { phoneNumber });
    } else {
      Alert.alert('Lỗi', 'Vui lòng nhập số điện thoại hợp lệ (bắt đầu bằng 03, 05, 07, 08, hoặc 09 và đủ 10 số).');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.header}>Đăng nhập</Text>
        <Text style={styles.note}>
          Dùng số điện thoại để đăng nhập hoặc đăng ký tài khoản tại OneHousing Pro
        </Text>

        <TextInput
          style={styles.input}
          placeholder="Nhập số điện thoại"
          keyboardType="numeric"
          value={phoneNumber}
          onChangeText={setPhoneNumber}
          maxLength={10}
          returnKeyType="done"
          onSubmitEditing={Keyboard.dismiss}
        />

        <TouchableOpacity style={styles.button} onPress={handleContinue}>
          <Text style={styles.buttonText}>Tiếp tục</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const handleContinue = () => {
  if (validatePhoneNumber(phoneNumber)) {
    navigation.navigate('OTPScreen', { phoneNumber }); // Truyền số điện thoại
  } else {
    Alert.alert('Lỗi', 'Vui lòng nhập số điện thoại hợp lệ (bắt đầu bằng 03, 05, 07, 08, hoặc 09 và đủ 10 số).');
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#EAF2F8',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 30,
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.15,
    shadowRadius: 6,
    marginBottom: 20,
  },
  header: {
    fontSize: 32,
    fontWeight: '700',
    marginBottom: 20,
    textAlign: 'center',
    color: '#34495E',
  },
  input: {
    borderWidth: 1,
    borderColor: '#D5D8DC',
    borderRadius: 10,
    padding: 15,
    fontSize: 18,
    marginBottom: 25,
    backgroundColor: '#FBFCFC',
    color: '#2C3E50',
  },
  note: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
    color: '#7D8B9E',
    lineHeight: 22,
  },
  button: {
    backgroundColor: '#1ABC9C',
    borderRadius: 10,
    paddingVertical: 15,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
});

export default LoginScreen;
