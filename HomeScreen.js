import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation hook
import userCredentials from './userCredentials';

const backgroundImage = require('./assets/home.jpg'); // Assuming you have an image file named 'background_image.jpg'

const HomeScreen = () => {
  const navigation = useNavigation(); // Initialize navigation
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [loggedInUser, setLoggedInUser] = useState(null); // State to hold the logged-in user's username

  const handleLogin = () => {
    const user = userCredentials.find(cred => cred.username === username && cred.password === password);

    if (user) {
      setLoggedInUser(username); // Set the logged-in user's username
    } else {
      setErrorMessage('Invalid username or password');
    }
  };

  const handleLogout = () => {
    // Perform any logout operations here
    setLoggedInUser(null); // Clear the logged-in user state
    // Navigate back to the homepage or welcome screen
    setErrorMessage('Logged out Successfully');
    navigation.navigate('Welcome to SkillSwap'); // Assuming 'Welcome' is the name of your homepage screen
  };

  return (
    <ImageBackground source={backgroundImage} style={styles.background}>
      <View style={styles.container}>
        {loggedInUser ? (
          <View>
            <Text>Welcome, {loggedInUser}</Text>
            <View style={styles.buttonContainer}>
              <Button
                title="Skill Listing Screen"
                onPress={() => navigation.navigate('SkillListingScreen')}
              />
              <Button
                title="Skill Request Screen"
                onPress={() => navigation.navigate('SkillRequestScreen')}
              />
              <Button title="Logout" onPress={handleLogout} />
            </View>
          </View>
        ) : (
          <View>
            <Text style={styles.title}>Welcome to SkillSwap</Text>
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
            <View style={styles.buttonContainer}>
              <Button title="Login" onPress={handleLogin} />
              <Button
                title="Create Account"
                onPress={() => navigation.navigate('CreateAccountScreen')}
              />
            </View>
            <Text style={styles.error}>{errorMessage}</Text>
          </View>
        )}
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'contain',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    width: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background to enhance readability
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    color: '#fff', // Text color
  },
  input: {
    height: 40,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    backgroundColor: '#fff', // Input field background color
  },
  error: {
    marginTop: 10,
    marginBottom: 10,
    color: 'red',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
});

export default HomeScreen;
