import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native'; // Import hook điều hướng

const welcomeImage = require('./assets/Welcome.png');
const iconImage = require('./assets/Carrot.png');

export default function WelcomeScreen() {
    const navigation = useNavigation(); // Khai báo biến điều hướng

    return (
        <View style={styles.container}>
            <Image
                source={welcomeImage}
                style={styles.image}
                resizeMode="cover"
            />
            <View style={styles.overlay}>
                <View style={styles.content}>
                    <Image
                        source={iconImage}
                        style={styles.icon}
                    />
                    <Text style={styles.title}>Welcome {'\n'}to our store</Text>
                    <Text style={styles.description}>
                        Get your groceries in as fast as one hour
                    </Text>
                    <TouchableOpacity 
                        style={styles.button} 
                        onPress={() => navigation.navigate('Login')} // Chuyển sang màn hình Login
                    >
                        <Text style={styles.buttonText}>Get Started</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <StatusBar style="light" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1, // Chiếm toàn bộ không gian
        justifyContent: 'flex-end', // Đẩy nội dung xuống dưới cùng
        alignItems: 'center', // Căn giữa nội dung theo chiều ngang
        backgroundColor: '#d1fae5', // Màu nền xanh nhạt
    },
    image: {
        width: '100%', // Chiều rộng hình ảnh chiếm toàn bộ chiều rộng màn hình
        height: '100%', // Chiều cao hình ảnh chiếm toàn bộ chiều cao màn hình
        position: 'absolute', // Đặt hình ảnh ở vị trí tuyệt đối để không ảnh hưởng đến layout
    },
    overlay: {
        flex: 1, // Chiếm toàn bộ không gian của container
        justifyContent: 'flex-end', // Đẩy nội dung xuống dưới
        alignItems: 'center', // Căn giữa nội dung theo chiều ngang
        backgroundColor: 'rgba(0, 0, 0, 0)', // Bỏ viền đen (không có màu nền)
        padding: 10, // Thêm khoảng cách bên trong cho overlay
    },
    content: {
        alignItems: 'center', // Căn giữa nội dung theo chiều ngang
        textAlign: 'center', // Căn giữa văn bản
        marginBottom: 30, // Khoảng cách dưới cùng cho nội dung
    },
    icon: {
        width: 49, // Chiều rộng biểu tượng
        height: 57, // Chiều cao biểu tượng
        marginBottom: 16, // Khoảng cách giữa biểu tượng và tiêu đề
    },
    title: {
        fontSize: 48, // Kích thước chữ cho tiêu đề
        fontWeight: 'bold', // Độ đậm của chữ tiêu đề
        color: 'white', // Màu chữ của tiêu đề
        textAlign: 'center',
        paddingHorizontal: 40, // Giảm padding hai bên
        marginBottom: 16, // Khoảng cách giữa tiêu đề và mô tả
    },
    description: {
        fontSize: 16, // Kích thước chữ cho mô tả
        color: 'white', // Màu chữ của mô tả
        marginBottom: 16, // Khoảng cách giữa mô tả và nút button
        
    },
    button: {
        backgroundColor: '#22c55e', // Màu nền cho nút button
        borderRadius: 10, // Bo góc nút button
        paddingVertical: 12, // Khoảng cách dọc bên trong nút
        paddingHorizontal: 24, // Khoảng cách ngang bên trong nút
        width: 353, // Chiều rộng cố định cho nút button (có thể thay đổi theo nhu cầu)
        height: 67, // Chiều cao cố định cho nút button
        alignSelf: 'center', // Căn giữa nút button
        justifyContent: 'center', // Căn giữa nội dung theo chiều dọc
        alignItems: 'center', // Căn giữa nội dung theo chiều ngang
    },
    buttonText: {
        fontSize: 18, // Kích thước chữ cho văn bản trong nút
        fontWeight: '600', // Độ đậm của chữ trong nút
        color: 'white', // Màu chữ trong nút
        textAlign: 'center', // Căn giữa chữ trong nút
    },
});

