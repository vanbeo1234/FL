import * as React from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity, ImageBackground, Animated } from 'react-native';
import { Ionicons, AntDesign, Entypo } from '@expo/vector-icons'; // Import các biểu tượng
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

function DetailsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Details!</Text>
    </View>
  );
}

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.welcomeText}>Hello 👋</Text>
          <Text style={styles.subText}>Christie Doe!</Text>
        </View>
        <Image style={styles.avatar} source={{ uri: 'https://cdn-media.sforum.vn/storage/app/media/THANHAN/2/2a/avatar-dep-84.jpg' }} />
      </View>

      <View style={styles.grid}>
        <TouchableOpacity style={styles.gridItem}>
          <Ionicons name="scan-outline" size={32} color="purple" />
          <Text>Scan new</Text>
          <Text style={styles.smallText}>Scanned 483</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.gridItem}>
          <Ionicons name="alert-circle-outline" size={32} color="orange" />
          <Text>Counterfeits</Text>
          <Text style={styles.smallText}>Counterfeited 32</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.gridItem}>
          <Ionicons name="checkmark-circle-outline" size={32} color="lightgreen" />
          <Text>Success</Text>
          <Text style={styles.smallText}>Checkouts 8</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.gridItem}>
          <Ionicons name="calendar-outline" size={32} color="skyblue" />
          <Text>Directory</Text>
          <Text style={styles.smallText}>History 26</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.exploreText}>Explore More</Text>

      <View style={styles.exploreContainer}>
        <TouchableOpacity style={styles.exploreItem}>
          <Ionicons name="person-outline" size={32} color="blue" />
          <Text>Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.exploreItem}>
          <Ionicons name="settings-outline" size={32} color="gray" />
          <Text>Settings</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.exploreItem}>
          <Ionicons name="help-outline" size={32} color="green" />
          <Text>Help</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

function NotifyScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>NotifyScreen!</Text>
    </View>
  );
}

function ScanScreen({ navigation }) {
  return (
    <ImageBackground
      source={require('./assets/scan.png')}
      style={styles.scanContainer}
      resizeMode="cover"
    >
      {/* Nút quay lại ở góc trên bên trái */}
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={24} color="white" />
      </TouchableOpacity>
      <View style={styles.resultContainer}>
        <View style={styles.resultBox}>
          <Image
            style={styles.juiceImage}
            source={require('./assets/scan.png')} // Thay bằng hình ảnh bạn muốn
          />
          <View style={styles.textContainer}>
            <Text style={styles.resultText}>Lauren's</Text>
            <Text style={styles.resultJuiceText}>Orange Juice</Text>
          </View>
          <TouchableOpacity style={styles.addButton}>
            <Text style={styles.addButtonText}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}

function CartScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Cart Screen</Text>
    </View>
  );
}

function TimeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Time Screen</Text>
    </View>
  );
}

const HomeStack = createNativeStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: true }}>
      <HomeStack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <HomeStack.Screen name="Details" component={DetailsScreen} />
    </HomeStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              return <AntDesign name="home" size={size} color={color} />;
            } else if (route.name === 'Notify') {
              return <Ionicons name="notifications-outline" size={size} color={color} />;
            } else if (route.name === 'Scan') {
              return <Ionicons name="scan" size={size} color={color} />;
            } else if (route.name === 'Cart') {
              return <AntDesign name="shoppingcart" size={size} color={color} />;
            } else if (route.name === 'Time') {
              return <Entypo name="back-in-time" size={size} color={color} />;
            }

            return null;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
          headerShown: false,
        })}
      >
        <Tab.Screen name="Home" component={HomeStackScreen} />
        <Tab.Screen name="Notify" component={NotifyScreen} options={{ tabBarBadge: 3 }} />
        <Tab.Screen name="Scan" component={ScanScreen} />
        <Tab.Screen name="Cart" component={CartScreen} />
        <Tab.Screen name="Time" component={TimeScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white',
    marginTop: 40,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  welcomeText: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  subText: {
    fontSize: 16,
    color: 'gray',
    marginTop: 5,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  gridItem: {
    width: '48%',
    minHeight: 190,
    backgroundColor: '#f9f9f9',
    padding: 30,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  smallText: {
    fontSize: 12,
    color: 'gray',
  },
  exploreText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  exploreContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  exploreItem: {
    alignItems: 'center',
    width: '30%',
    padding: 15,
    backgroundColor: '#f2f2f2',
    borderRadius: 10,
  },
  scanContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
   resultContainer: {
    position: 'absolute',
    bottom: 20,
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  resultBox: {
    width: '80%', // Chiều rộng của form
    flexDirection: 'row', // Đặt các phần tử theo hàng
    alignItems: 'center', // Căn giữa các phần tử theo chiều dọc
    padding: 10,
    borderRadius: 15,
    backgroundColor: '#f2f2f2', // Màu nền cho khung
    shadowColor: '#000', // Để thêm bóng
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5, // Để tạo độ nổi cho Android
  },
  juiceImage: {
    width: 50, // Kích thước hình ảnh vuông
    height: 50,
    borderRadius: 10, // Bo tròn các góc
    marginRight: 10, // Khoảng cách giữa hình ảnh và văn bản
  },
  textContainer: {
    flex: 1, 
  },
  resultText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black', 
  },
  resultJuiceText: {
    fontSize: 18,
    color: 'gray',
  },
  addButton: {
    backgroundColor: 'tomato',
    borderRadius: 20,
    padding: 10,
    marginLeft: 10,
  },
  addButtonText: {
    color: 'white',
    fontSize: 20,
  },
  backButton: {
    position: 'absolute',
    top: 40, // Khoảng cách từ đỉnh màn hình
    left: 20, // Khoảng cách từ bên trái màn hình
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Nền mờ cho nút
    borderRadius: 25,
    padding: 10,
    zIndex: 1, // Đảm bảo nút nằm trên các phần tử khác
  },
});
