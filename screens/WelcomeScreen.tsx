import React from 'react';
import { View, Image, StyleSheet, Text, Pressable } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import type { TRootStackParamList } from '../types';

const styles = StyleSheet.create({
  logo: {
    width: 200,
    height: 200,
    marginTop: 150,
    marginLeft: 100,
    resizeMode: 'contain'
  },
  textStyle: {
    fontSize: 19,
    fontWeight: 'bold',
    marginTop: 90,
    marginLeft: 80,
    marginRight: 80,
    marginBottom: 150,
    textAlign: 'center'
  },
  buttonStyle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 20,
    marginRight: 20,
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#006600',
    textAlign: 'center',
    color: '#ffffff',
  }
});

const WelcomeScreen: React.FC<NativeStackScreenProps<TRootStackParamList>> = ({ navigation }) => (
  <View >
    <Image
      style={styles.logo}
      source={require('../assets/little-lemon-logo.png')}
    />
    <Text style={styles.textStyle}>Little Lemon, your local Mediterranean Bistro</Text>
    <Pressable onPress={() => navigation.navigate('Subscribe')}>
      <Text style={styles.buttonStyle}>Newsletter</Text>
    </Pressable>
  </View>
);

export default WelcomeScreen;
