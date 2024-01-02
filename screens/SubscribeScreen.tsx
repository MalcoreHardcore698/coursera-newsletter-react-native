import React from 'react';
import { useState } from 'react';
import { View, Image, StyleSheet, Text, TextInput, Alert, Button } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import { validateEmail } from '../utils';
import type { TRootStackParamList } from '../types';

const styles = StyleSheet.create({
  container: {
    marginLeft: 25,
    marginRight: 25,
  },
  logo: {
    width: 200,
    height: 120,
    marginTop: 40,
    marginLeft: 75,
    resizeMode: 'contain'
  },
  textStyle: {
    fontSize: 19,
    marginTop: 30,
    marginBottom: 30,
    textAlign: 'center'
  },
  inputStyle: {
    height: 40,
    fontSize: 16,
    borderRadius: 10,
    marginBottom: 20,
    paddingLeft: 10,
    paddingRight: 10,
    borderColor: '#000000',
    borderWidth: 1,
  },
});

const SubscribeScreen: React.FC<NativeStackScreenProps<TRootStackParamList>> = () => {
  const [email, setEmail] = useState('');

  const checkValidEmail = validateEmail(email);

  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('../assets/little-lemon-logo-grey.png')}
      />
      <Text style={styles.textStyle}>
        Subscribe to our newsletter for our latest delicious recipes!
      </Text>

      <TextInput
        value={email}
        style={styles.inputStyle}
        placeholder='Type your email'
        keyboardType='email-address'
        textContentType='emailAddress'
        onChangeText={setEmail}
      />

      <Button
        title='Subscribe'
        color='#006600'
        disabled={!checkValidEmail}
        onPress={() => Alert.alert('Thanks for subscribing, stay tuned!')}
      />
    </View>
  );
};

export default SubscribeScreen;
