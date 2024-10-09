import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const LoginScreen = () => {
    return (
        <View style={styles.outerContainer}>
            <Text style={[styles.title, { fontWeight: 'bold' }]}>deeps xin chào!!!</Text>
            <Text style={styles.subtitle}>
                Chào mừng bạn đến với ứng dụng đặt vé xem phim của chúng tôi, nơi sự tiện lợi kết hợp với giải trí!
            </Text>
            <View style={styles.innerContainer}>
            <Text style={[styles.loginTitle, { fontWeight: 'bold' }]}>Đăng nhập</Text>
            <TextInput
                style={styles.input}
                placeholder="Nhập số điện thoại của bạn"
                keyboardType="phone-pad"
            />
                <TextInput
                    style={styles.input}
                    placeholder="Nhập mật khẩu"
                    secureTextEntry
                />
                <TouchableOpacity style={styles.loginButton}>
                    <Text style={styles.buttonText}>Đăng nhập</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.forgotPassword}>Quên mật khẩu?</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.signup}>Tạo tài khoản mới? Đăng ký</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    outerContainer: {
        flex: 1,
        backgroundColor: '#F6CC10', // Màu nền vàng
        alignItems: 'center',
    },
    title: {
        fontSize: 30,
        fontWeight: 'normal', // Để sử dụng font chữ thường
        textAlign: 'center',
        position: 'absolute', // Để tiêu đề luôn ở trên cùng
        top: 100, // Vị trí từ trên xuống
        left: 0,
        right: 0,
    },
    subtitle: {
        fontSize: 20,
        textAlign: 'center',
        marginVertical: 10,
        position: 'absolute',
        top: 140, // Vị trí từ trên xuống
        left: 20,
        right: 20,
        fontWeight: 'normal', // Để sử dụng font chữ thường
    },
    innerContainer: {
        backgroundColor: 'white', // Màu nền trắng cho phần nội dung
        borderTopLeftRadius: 60, // Bo tròn góc trên bên trái
        borderTopRightRadius: 60, // Bo tròn góc trên bên phải
        borderBottomLeftRadius: 0, // Góc dưới bên trái thẳng
        borderBottomRightRadius: 0, // Góc dưới bên phải thẳng
        width: '100%', // Chiều rộng của phần nội dung
        padding: 50, // Tăng padding để làm cho form cao hơn
        position: 'absolute', // Đặt vị trí tuyệt đối để không có khoảng trống
        bottom: 0, // Gắn sát đáy màn hình
    },
    loginTitle: {
        fontSize: 30,
        marginVertical: 10,
        fontWeight: 'normal', // Để sử dụng font chữ thường
        textAlign: 'center',
    },
    input: {
        height: 65, // Tăng chiều cao cho ô nhập
        borderColor: '#ddd',
        borderWidth: 1,
        borderRadius: 30, // Bo tròn cho các ô nhập
        paddingHorizontal: 15, // Tăng padding bên trong ô nhập
        marginVertical: 10,
        backgroundColor: '#FFFBEB', // Màu nền cho trường nhập
        width: 278, // Đảm bảo chiều rộng ô nhập là 100%
    },
    loginButton: {
        height: 65, // Tăng chiều cao cho nút đăng nhập
        width: 278,
        backgroundColor: '#F6CC10', // Màu nút đăng nhập
        paddingVertical: 12,
        borderRadius: 30, // Bo tròn cho nút đăng nhập
        alignItems: 'center',
        width: '100%', // Đảm bảo chiều rộng nút là 100%
    },
    buttonText: {
        color: 'black',
        fontSize: 20,
    },
    forgotPassword: {
        textAlign: 'center',
        marginVertical: 10,
        color: '#007BFF', // Màu chữ cho "Quên mật khẩu?"
        fontWeight: 'normal', // Để sử dụng font chữ thường
    },
    signup: {
        textAlign: 'center',
        color: '#007BFF', // Màu chữ cho "Đăng ký"
        fontWeight: 'normal', // Để sử dụng font chữ thường
    },
});

export default LoginScreen;
