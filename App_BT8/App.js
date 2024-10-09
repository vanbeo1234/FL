import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';

const HomeScreen = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View>
          <Text style={styles.greetingText}>Hello 👋</Text>
          <Text style={styles.username}>Christie Doe</Text>
        </View>
        <View style={styles.profilePicWrapper}>
          <Image 
            source={require('./assets/img.png')}
            style={styles.profilePic} 
          />
        </View>
      </View>

      {/* Insights */}
      <View style={styles.insights}>
        <Text style={styles.sectionTitle}>Your Insights</Text>
        <View style={styles.insightsGrid}>
          <TouchableOpacity style={styles.insightBox}>
            <View style={styles.iconPlaceholder}></View>
            <Text style={styles.insightText}>Scan new</Text>
            <Text style={styles.insightSubText}>Scanned 483</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.insightBox}>
            <View style={styles.iconPlaceholder}></View>
            <Text style={styles.insightText}>Counterfeits</Text>
            <Text style={styles.insightSubText}>Counterfeited 32</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.insightBox}>
            <View style={styles.iconPlaceholder}></View>
            <Text style={styles.insightText}>Success</Text>
            <Text style={styles.insightSubText}>Checkouts 8</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.insightBox}>
            <View style={styles.iconPlaceholder}></View>
            <Text style={styles.insightText}>Directory</Text>
            <Text style={styles.insightSubText}>History 25</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Explore More */}
      <View style={styles.exploreMore}>
        <Text style={styles.exploreText}>Explore More</Text>
        <TouchableOpacity style={styles.arrowButton}>
          <Text style={styles.arrowText}>➔</Text>
        </TouchableOpacity>
      </View>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navButton}>
          <Image source={require('./assets/home_icon.png')} style={styles.navIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton}>
          <Image source={require('./assets/doc_icon.png')} style={styles.navIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton}>
          <Image source={require('./assets/scan_icon.png')} style={styles.scanButton} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton}>
          <Image source={require('./assets/cart_icon.png')} style={styles.navIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton}>
          <Image source={require('./assets/profile_icon.png')} style={styles.navIcon} />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#FFFFFF',
  },
  greetingText: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  username: {
    color: '#007AFF',
    fontSize: 16,
  },
  profilePicWrapper: {
    width: 40,
    height: 40,
    borderRadius: 20,
    overflow: 'hidden',
  },
  profilePic: {
    width: '100%',
    height: '100%',
  },
  insights: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  insightsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  insightBox: {
    width: '48%',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 20,
    marginBottom: 15,
    alignItems: 'center',
  },
  iconPlaceholder: {
    width: 50,
    height: 50,
    backgroundColor: '#E0E0E0',
    borderRadius: 25,
    marginBottom: 10,
  },
  insightText: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  insightSubText: {
    fontSize: 14,
    color: '#8E8E93',
    textAlign: 'center',
  },
  exploreMore: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#FFFFFF',
  },
  exploreText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  arrowButton: {
    padding: 10,
  },
  arrowText: {
    fontSize: 18,
    color: '#007AFF',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 15,
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderColor: '#E0E0E0',
  },
  navButton: {
    alignItems: 'center',
  },
  navIcon: {
    width: 24,
    height: 24,
    tintColor: '#007AFF',
  },
  scanButton: {
    width: 50,
    height: 50,
    tintColor: '#007AFF',
    marginBottom: 10,
  },
});

export default HomeScreen;
