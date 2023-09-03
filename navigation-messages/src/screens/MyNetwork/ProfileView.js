import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const ProfileView = ({ imageSource, name, Job,company, onViewProfilePress }) => { //props 
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={ imageSource} style={styles.image} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.bio}>{Job}</Text>
        <Text style={styles.bio}>{company}</Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={onViewProfilePress}>
        <Text style={styles.buttonText}>View Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingTop: 20,
    paddingBottom: 20,
    backgroundColor: 'white',
    margin: 20,
    width: '40%',
    shadowColor: '#171717',
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  imageContainer: {
    borderRadius: 50,
    overflow: 'hidden',
    top: -40,
    
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  textContainer: {
    alignItems: 'center',
    // marginBottom: 10,
    top: -20,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  bio: {
    fontSize: 14,
    color: '#888',
    textAlign: 'center',
    marginHorizontal: 20,
  },
  button: {
    backgroundColor: '#007AFF',
    borderRadius: 16,
    paddingVertical: 8,
    paddingHorizontal: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ProfileView;
