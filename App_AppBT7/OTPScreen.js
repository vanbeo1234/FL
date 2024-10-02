// OTPScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, Keyboard } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

const OTPScreen = () => {
  const [otp, setOtp] = useState('');
  const navigation = useNavigation();
  const route = useRoute();
  const { phoneNumber } = route.params; // Nhận số điện thoại từ LoginScreen

  const handleVerifyOtp = () => {
    // Kiểm tra mã OTP (giả sử mã OTP đúng là '123456')
    if (otp === '123456') {
      navigation.navigate('SuccessScreen'); // Chuyển đến trang thành công
    } else {
      Alert.alert('Lỗi', 'Mã OTP không đúng. Vui lòng thử lại.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Xác minh OTP</Text>
      <Text style={styles.subHeader}>
        Mã OTP đã được gửi về số điện thoại {phoneNumber}
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Nhập mã OTP"
        keyboardType="numeric"
        value={otp}
        onChangeText={setOtp}
        maxLength={6} // Giới hạn mã OTP 6 số
        returnKeyType="done"
        onSubmitEditing={Keyboard.dismiss} // Ẩn bàn phím khi nhấn xong
      />

      <TouchableOpacity style={styles.button} onPress={handleVerifyOtp}>
        <Text style={styles.buttonText}>Xác minh</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#F5F6FA',
  },
  header: {
    fontSize: 28,
    fontWeight: '700',
    marginBottom: 20,
    textAlign: 'center',
    color: '#34495E',
  },
  subHeader: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 30,
    color: '#7F8C8D',
  },
  input: {
    borderWidth: 1,
    borderColor: '#DADFE1',
    borderRadius: 8,
    padding: 15,
    fontSize: 18,
    marginBottom: 30,
    backgroundColor: '#FFFFFF',
    color: '#2C3E50',
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#1ABC9C',
    borderRadius: 10,
    paddingVertical: 15,
    alignItems: 'center',
    elevation: 5, // Hiệu ứng bóng mờ nút bấm
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default OTPScreen;
