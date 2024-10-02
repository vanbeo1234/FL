import React, { useState } from 'react';
import { Text, SafeAreaView, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';
import { Card } from 'react-native-paper';

export default function App() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isValid, setIsValid] = useState(false);
  const [error, setError] = useState('');


  const validatePhoneNumber = (input) => {
    const phoneRegex = /^(0[3|5|7|8|9])+([0-9]{8})$/;
    if (phoneRegex.test(input)) {
      setIsValid(true);
      setError(''); 
      return true;
    } else {
      setIsValid(false);
      setError('Số điện thoại không hợp lệ'); 
      return false;
    }
  };


  const formatPhoneNumber = (input) => {
    const cleaned = input.replace(/\D/g, '');
    if (cleaned.length <= 4) {
      return cleaned;
    } else if (cleaned.length <= 7) {
      return `${cleaned.slice(0, 4)} ${cleaned.slice(4)}`;
    } else {
      return `${cleaned.slice(0, 4)} ${cleaned.slice(4, 7)} ${cleaned.slice(7, 10)}`;
    }
  };


  const handleInputChange = (input) => {
    const formattedInput = formatPhoneNumber(input);
    setPhoneNumber(formattedInput);
    
    validatePhoneNumber(formattedInput.replace(/\s/g, ''));
  };


  const handleContinue = () => {
    if (isValid) {
      Alert.alert('Số điện thoại hợp lệ');
      // Tiếp tục các thao tác khi số điện thoại hợp lệ
    } else {
      Alert.alert('Số điện thoại không hợp lệ');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Đăng nhập</Text>
      
      <Card style={styles.card}>
        <Text style={styles.label}>Nhập số điện thoại</Text>
        <Text style={styles.description}>
          Dùng số điện thoại để đăng nhập hoặc đăng ký tài khoản tại OneHousing Pro
        </Text>
        
        <TextInput
          style={styles.input}
          placeholder="Nhập số điện thoại của bạn"
          keyboardType="numeric"
          value={phoneNumber}
          onChangeText={handleInputChange} // Gọi hàm khi người dùng nhập
        />

        {/* Hiển thị thông báo lỗi nếu số điện thoại không hợp lệ */}
        {error ? <Text style={styles.error}>{error}</Text> : null}

        <TouchableOpacity
          style={[styles.button, isValid ? styles.buttonEnabled : styles.buttonDisabled]} 
          onPress={handleContinue}
          disabled={!isValid} // Vô hiệu hóa nút nếu số không hợp lệ
        >
          <Text style={styles.buttonText}>Tiếp tục</Text>
        </TouchableOpacity>
      </Card>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  card: {
    padding: 20,
    width: '90%',
    borderRadius: 10,
    elevation: 3,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 14,
    color: '#7e7e7e',
    marginBottom: 20,
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 5,
  },
  error: {
    fontSize: 12,
    color: 'red',
    marginBottom: 10,
  },
  button: {
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonEnabled: {
    backgroundColor: '#28a745', 
  },
  buttonDisabled: {
    backgroundColor: '#ccc', 
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
});
