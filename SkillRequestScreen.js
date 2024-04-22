import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import backgroundImage from './assets/skill.jpg'; // Update the path to your background image

const SkillRequestScreen = () => {
  // Hardcoded array of user skills with descriptions
  const userSkills = [
    { username: 'user1', skill: 'Web Development', description: 'Need help in developing a website.' },
    { username: 'user2', skill: 'Graphic Design', description: 'Need help in creating a logo for my website.' },
    { username: 'user3', skill: 'Mobile App Development', description: 'Need help in developing cross-platform mobile applications using React Native.' },
    // Add more skills with descriptions as needed
  ];

  const [showDescription, setShowDescription] = useState({}); // State to manage the visibility of description boxes
  const [submittedInfo, setSubmittedInfo] = useState({}); // State to store submitted information

  const handleToggleDescription = (skill) => {
    // Function to toggle the visibility of the description box for a specific skill
    setShowDescription({ ...showDescription, [skill]: !showDescription[skill] });
  };

  const handleSubmitDescription = (skill, description) => {
    // Function to handle submission of description for a specific skill
    setSubmittedInfo({ ...submittedInfo, [skill]: description });
    handleToggleDescription(skill);
    console.log('A message is sent to the user');
  };

  return (
    <ImageBackground source={backgroundImage} style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.title}>Skill Listing</Text>
        {userSkills.map((userSkill, index) => (
          <View key={index} style={styles.skillContainer}>
            <Text style={[styles.text, styles.username]}>{userSkill.username}</Text>
            <Text style={[styles.text, styles.skill]}>{userSkill.skill}</Text>
            <Text style={[styles.text, styles.description]}>{userSkill.description}</Text>
            <TouchableOpacity
              style={styles.requestButton}
              onPress={() => handleToggleDescription(userSkill.skill)}
            >
              <Text style={styles.buttonText}>Give Help</Text>
            </TouchableOpacity>
            {showDescription[userSkill.skill] && (
              <View style={styles.descriptionContainer}>
                <TextInput
                  style={styles.input}
                  placeholder="Enter description"
                  multiline
                  onChangeText={(text) => setSubmittedInfo({ ...submittedInfo, [userSkill.skill]: text })}
                />
                <TouchableOpacity
                  style={styles.submitButton}
                  onPress={() => handleSubmitDescription(userSkill.skill, submittedInfo[userSkill.skill])}
                >
                  <Text style={styles.buttonText}>Submit</Text>
                </TouchableOpacity>
              </View>
            )}
            {submittedInfo[userSkill.skill] && (
              <View style={styles.submittedInfoContainer}>
                <Text style={styles.submittedInfoText}>Submitted Information:</Text>
                <Text style={styles.submittedInfoText}>{submittedInfo[userSkill.skill]}</Text>
              </View>
            )}
          </View>
        ))}
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
  skillContainer: {
    marginBottom: 20,
    width: '100%',
    alignItems: 'center',
  },
  text: {
    width: '100%',
    textAlign: 'center',
    marginBottom: 5,
    color: '#ffffff',
  },
  username: {
    fontWeight: 'bold',
  },
  skill: {
    fontWeight: 'bold',
  },
  description: {},
  requestButton: {
    backgroundColor: '#007bff',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 5,
  },
  buttonText: {
    color: '#ffffff',
    fontWeight: 'bold',
  },
  descriptionContainer: {
    width: '100%',
    alignItems: 'center',
  },
  input: {
    width: '80%',
    height: 100,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
  },
  submitButton: {
    backgroundColor: '#007bff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  submittedInfoContainer: {
    marginTop: 10,
    width: '100%',
    alignItems: 'center',
  },
  submittedInfoText: {
    color: '#ffffff',
    fontWeight: 'bold',
  },
});

export default SkillRequestScreen;
