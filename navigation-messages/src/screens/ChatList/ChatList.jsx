import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {Colors} from '../../../theme/Color';


const ChatList = () => {



  
  // const onNavigate = contactId => {
  //   navigation.navigate('ChatScreen', {
  //     contactId: contactId,
  //     userId: userId,
  //   });
  // };

  
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
    <>
      {Profiles.map((item, index) => (
        <View key={index}>
          <TouchableOpacity
            // onPress={() => onNavigate(item.otherUser?.id)}
            style={styles.container}>
            <View style={styles.leftContainer}>
              {/* {item.otherUser?.profile && ( */}
                <Image
                  source={require('../../../assets/beto.jpeg')}
                  style={styles.profileImg}
                />
              {/* )} */}
              <View>
                <Text style={styles.username}>{item.name}</Text>
                <Text style={styles.message}>{item.Job}</Text>
              </View>
            </View>

            <View style={styles.rightContainer}>
              <Text style={styles.timeStamp}>
                {/* {item.lastMessage.timestamp?.toDate().toDateString()} */}
                02/10/2022
              </Text>
              {/* {item.mute && (
                <VectorIcon
                  type="MaterialCommunityIcons"
                  name="volume-variant-off"
                  size={22}
                  color={Colors.textGrey}
                  style={styles.muteIcon}
                />
              )} */}
            </View>
          </TouchableOpacity>
        </View>
      ))}
    </>
  );
};

const styles = StyleSheet.create({
  profileImg: {
    borderRadius: 50,
    height: 40,
    width: 40,
    marginRight: 15,
  },
  container: {
    backgroundColor: Colors.background,
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  username: {
    color: Colors.textColor,
    fontSize: 16,
  },
  message: {
    color: Colors.textGrey,
    fontSize: 14,
    marginTop: 5,
  },
  leftContainer: {
    flexDirection: 'row',
  },
  timeStamp: {
    color: Colors.textGrey,
    fontSize: 12,
  },
  muteIcon: {
    marginTop: 5,
    marginLeft: 20,
  },
});

export default ChatList;
