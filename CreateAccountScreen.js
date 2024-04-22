import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ImageBackground } from 'react-native';
import backgroundImage from './assets/skill.jpg';
import userCredentials from './userCredentials';

const CreateAccountScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleCreateAccount = () => {
    // Check if username already exists
    const existingUser = userCredentials.find(cred => cred.username === username);
    if (existingUser) {
      setErrorMessage('Username already exists');
    } else {
      // Add new user credentials
      userCredentials.push({ username, password });
      setErrorMessage('Account created successfully');
      // You may want to navigate to another screen after successful account creation
    }
  };

  return (
    <ImageBackground source={backgroundImage} style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.title}>Create Account</Text>
        <TextInput
          style={styles.input}
          placeholder="Username"
          value={username}
          onChangeText={setUsername}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        <Button title="Create Account" onPress={handleCreateAccount} />
        <Text style={styles.error}>{errorMessage}</Text>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    color: '#ffffff',
  },
  input: {
    height: 40,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    backgroundColor: '#ffffff',
  },
  error: {
    marginTop: 10,
    marginBottom: 10,
    color: 'red',
  },
});

export default CreateAccountScreen;
