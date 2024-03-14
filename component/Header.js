import React from 'react';
import { StyleSheet, View, Image, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation hook
import logo from '../assets/logo.png';

const Header = props => {
  const navigation = useNavigation(); // Initialize navigation

  const handleLoginPress = () => {
    navigation.navigate('Login'); // Navigate to the 'Login' screen
  };

  return (
    <View style={styles.Header}>
      <Image source={logo} style={{ width: 155, height: 155, marginTop: 50}} />
      <Text style={styles.HeaderTitle}>{props.title}TEAM</Text>
      
    </View>
  );
};

const styles = StyleSheet.create({
  Header: {
    width: '100%',
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    backgroundColor: '#F8A77A',
  },
  HeaderTitle: {
    fontSize: 24,
    color: '#C76D31',
    marginBottom: 10
  }
});

export default Header;
