import {View, TouchableOpacity, StyleSheet, ScrollView} from 'react-native';
import ChatList from './ChatList';
import {Colors} from '../../../theme/Color';
import { MaterialCommunityIcons } from '@expo/vector-icons';



const ChatListScreen = () => {



//   const onNavigate = () => {
//     navigation.navigate('ContactScreen', {
//       userId: userId,
//     });
//   };

  return (
    <View style={styles.container}>
      <ScrollView>
        <ChatList />
      </ScrollView>
      <TouchableOpacity style={styles.contactIcon}>
        <MaterialCommunityIcons name="message-reply-text" size={22} color={Colors.white} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    backgroundColor: Colors.background,
    flex: 1,
  },
  contactIcon: {
    backgroundColor: Colors.blue,
    height: 50,
    width: 50,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 20,
    right: 20,
  },
});

export default ChatListScreen;
