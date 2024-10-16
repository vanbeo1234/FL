import React, { useState, useRef } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Alert, StatusBar, SafeAreaView } from 'react-native';
import PhoneInput from 'react-native-phone-number-input';

// Import hình ảnh từ thư mục assets
const backgroundImage = require('./assets/RauCu.png'); // Thay đổi đường dẫn nếu cần
const googleIcon = require('./assets/GG.png'); // Đường dẫn đến hình ảnh biểu tượng Google
const facebookIcon = require('./assets/F.png'); // Đường dẫn đến hình ảnh biểu tượng Facebook

const LoginScreen = () => {
    const [value, setValue] = useState('');
    const [formattedValue, setFormattedValue] = useState('');
    const [valid, setValid] = useState(false);
    const phoneInput = useRef(null);

    const handleContinue = () => {
        if (phoneInput.current) {
            const checkValid = phoneInput.current.isValidNumber(value);
            if (!checkValid) {
                Alert.alert('Invalid Phone Number', 'Please enter a valid phone number.');
                return;
            }
            // Tiến hành tiếp tục nếu số điện thoại hợp lệ
            console.log('Phone Number:', formattedValue);
            // Thêm logic điều hướng hoặc xử lý tại đây
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="dark-content" />
            <View style={styles.imageContainer}>
                <Image
                    source={backgroundImage} // Sử dụng hình ảnh từ assets
                    style={styles.image}
                    resizeMode="cover"
                />
            </View>
            <View style={styles.content}>
                <Text style={styles.title}>
                    Get your groceries{'\n'}
                    with nectar
                </Text>
                <PhoneInput
                    ref={phoneInput}
                    defaultValue={value}
                    defaultCode="VN"
                    layout="first"
                    placeholder="Nhập số điện thoại"
                    onChangeText={(text) => {
                        setValue(text);
                    }}
                    onChangeFormattedText={(text) => {
                        setFormattedValue(text);
                    }}
                    withShadow
                    autoFocus
                    style={styles.phoneInput}
                />
                <Text style={styles.orConnect}>Or connect with social media</Text>
                <TouchableOpacity style={styles.button} onPress={handleContinue}>
                    <View style={styles.buttonContent}>
                        <Image source={googleIcon} style={styles.googleIcon} />
                        <Text style={styles.buttonText}>Continue with Google</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button, styles.facebookButton]} onPress={handleContinue}>
                    <View style={styles.buttonContent}>
                        <Image source={facebookIcon} style={styles.facebookIcon} />
                        <Text style={styles.buttonText}>Continue with Facebook</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    imageContainer: {
        width: 413,
        height: 374,
        position: 'relative',
    },
    image: {
        width: '100%',
        height: '100%',
        borderRadius: 8,
    },
    content: {
        flex: 1,
        padding: 16,
        alignItems: 'left',
        width: '100%',
        marginTop: 16,
        justifyContent: 'space-between',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
        textAlign: 'left',
    },
    phoneInput: {
        width: '100%', // Chiếm toàn bộ chiều rộng
        marginBottom: 16,
    },
    orConnect: {
        textAlign: 'center',
        color: 'gray',
        marginBottom: 16,
    },
    button: {
        width: '100%',
        backgroundColor: '#3B82F6',
        borderRadius: 20,
        paddingVertical: 12,
        justifyContent: 'center',
        marginBottom: 8,
    },
    facebookButton: {
        backgroundColor: '#1D4ED8',
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: '600',
    },
    buttonContent: {
        flexDirection: 'row', // Đặt các phần tử bên trong theo hàng ngang
        alignItems: 'center', // Căn giữa các phần tử theo chiều dọc
        justifyContent: 'center', // Căn giữa các phần tử theo chiều ngang
    },
    googleIcon: {
        width: 20, // Chiều rộng của biểu tượng Google
        height: 19, // Chiều cao của biểu tượng Google
        marginRight: 8, // Khoảng cách bên phải của biểu tượng
    },
    facebookIcon: {
        width: 10, // Chiều rộng của biểu tượng Facebook
        height: 20, // Chiều cao của biểu tượng Facebook
        marginRight: 8, // Khoảng cách bên phải của biểu tượng
    },
});

export default LoginScreen;
