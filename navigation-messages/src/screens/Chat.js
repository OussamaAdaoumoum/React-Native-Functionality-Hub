import {View, Text, Image, StyleSheet, TouchableOpacity, ScrollView} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';

 const ChatList = () => {
  const navigation = useNavigation();

  

//   const onNavigate = contactId => {
//     navigation.navigate('ChatScreen', {
//       userId: userId,
//       contactId: contactId,
//     });
//   };

  const Profiles = [

    {
        "name": "Ilyas Hnini",
        "Job": "Graphic Designer",
        "company": "IBM Technologie",
        "imageSource": "../../../../assets/pics/1648820953568.jpg"

    },
    {
        "name": "Youssef Koutari",
        "Job": "Graphic Designer",
        "company": "IBM Technologie",
        "imageSource": "../../../../assets/pics/1648820953568.jpg"

    },
    {
        "name": "Youssef Koutari",
        "Job": "Graphic Designer",
        "company": "IBM Technologie",
        "imageSource": "../../../assets/pics/1648820953568.jpg"

    },
    {
        "name": "Youssef Koutari",
        "Job": "Graphic Designer",
        "company": "IBM Technologie",
        "imageSource": "../../../assets/pics/1648820953568.jpg"

    },
    {
        "name": "Youssef Koutari",
        "Job": "Graphic Designer",
        "company": "IBM Technologie",
        "imageSource": "../../../assets/pics/1648820953568.jpg"
    },
    {
        "name": "Youssef Koutari",
        "Job": "Graphic Designer",
        "company": "IBM Technologie",
        "imageSource": "../../../assets/pics/1648820953568.jpg"
    },
    {
        "name": "Youssef Koutari",
        "Job": "Graphic Designer",
        "company": "IBM Technologie",
        "imageSource": "../../../assets/pics/1648820953568.jpg"
    },
    {
        "name": "Youssef Koutari",
        "Job": "Graphic Designer",
        "company": "IBM Technologie",
        "imageSource": "../../../assets/pics/1648820953568.jpg"
    },
    {
        "name": "Youssef Koutari",
        "Job": "Graphic Designer",
        "company": "IBM Technologie",
        "imageSource": "../../../assets/pics/1648820953568.jpg"
    },
    {
        "name": "Youssef Koutari",
        "Job": "Graphic Designer",
        "company": "IBM Technologie",
        "imageSource": "../../../assets/pics/1648820953568.jpg"
    },
    {
        "name": "Youssef Koutari",
        "Job": "Graphic Designer",
        "company": "IBM Technologie",
        "imageSource": "../../../assets/pics/1648820953568.jpg"
    },
]

  return (
    <ScrollView>
    <View style={styles.container}>
      <Text style={styles.title}>Contacts on Whatsapp</Text>
      {Profiles.map((item, index) => (
        <View key={index}>
          <TouchableOpacity
            // onPress={() => onNavigate(item.id)}
            style={styles.contactContainer}>
            <Image 
            source={require('../../assets/beto.jpeg')}
            style={styles.imgStyle} />
            <Text style={styles.username}>{item.name}</Text>
          </TouchableOpacity>
        </View>
      ))}
    </View></ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#101d25',
    padding: 16,
    flex: 1,
  },
  imgStyle: {
    height: 40,
    width: 40,
    borderRadius: 50,
  },
  username: {
    fontSize: 16,
    color: '#cdd4da',
    marginLeft: 15,
  },
  title: {
    fontSize: 12,
    color: '#8b959a',
    marginVertical: 5,
  },
  contactContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
  },
});

export default ChatList;
