import React, { useEffect } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './LoginScreen'; // Đảm bảo bạn đã tạo màn hình đăng nhập này

const Stack = createStackNavigator();

const SplashScreen = ({ navigation }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            navigation.replace('Login'); // Chuyển đến màn hình đăng nhập
        }, 5000); // Thời gian giữ màn hình là 5 giây

        return () => clearTimeout(timer); // Dọn dẹp timer khi component unmount
    }, [navigation]);

    return (
        <View style={styles.container}>
            <View style={styles.shape1} />
            <View style={styles.shape2} />
            <Image 
                source={require('./assets/login/logo.png')} 
                style={styles.logo} 
            />
            <Text style={styles.title}>deeps</Text>
        </View>
    );
};

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Splash">
                <Stack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false }} />
                <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        position: 'relative',
    },
    logo: {
        width: 190,
        height: 150,
    },
    title: {
        fontSize: 32,
    },
    shape1: {
        position: 'absolute',
        width: 200,
        height: 200,
        backgroundColor: '#F6CC10',
        borderRadius: 100,
        top: -30,
        right: -70,
    },
    shape2: {
        position: 'absolute',
        width: 200,
        height: 200,
        backgroundColor: '#F6CC10',
        borderRadius: 100,
        bottom: -30,
        left: -70,
    },
});

export default App;
