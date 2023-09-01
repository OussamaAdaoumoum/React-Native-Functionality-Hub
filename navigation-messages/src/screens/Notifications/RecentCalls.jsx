import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import { Colors } from '../../../theme/Color';
import { RecentCallsData } from '../../Data/RecentCallsData';
import { Feather } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons'; 
import { FontAwesome5 } from '@expo/vector-icons';
const RecentCalls = () => {
  return (
    <>
      <Text style={styles.recent}>Recent</Text>
      {RecentCallsData.map(item => (
        <View key={item.id} style={styles.container}>
          <View style={styles.row}>
            <Image source={item.profileImg} style={styles.imgStyle} />
            <View style={styles.linkSection}>
              <Text style={styles.callLink}>{item.name}</Text>
              <View style={styles.callDetails}>
                {item.incoming && (
                  <Feather name="arrow-down-left" size={20} color={Colors.red} />

                )}
                {item.outgoing && (
         
                  <Feather name="arrow-up-right" size={20} color={Colors.tertiary} />

                )}
                <Text style={styles.shareLink}>{item.time}</Text>
              </View>
            </View>
          </View>
          {item.video && (

            <Ionicons name="videocam" size={24} color={Colors.tertiary} />

          )}
          {item.audio && (
            <FontAwesome5 name="phone-alt" size={16} color={Colors.tertiary} />
          )}
        </View>
      ))}
    </>
  );
};

const styles = StyleSheet.create({
  recent: {
    fontSize: 14,
    color: Colors.textGrey,
    marginTop: 20,
    paddingBottom: 10,
  },
  imgStyle: {
    height: 45,
    width: 45,
    borderRadius: 50,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  callDetails: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 3,
  },
  container: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
  },
  callLink: {
    fontSize: 15,
    color: Colors.white,
    fontWeight: '500',
  },
  shareLink: {
    fontSize: 13,
    color: Colors.textGrey,
    marginLeft: 3,
  },
  linkSection: {
    marginLeft: 15,
  },
});

export default RecentCalls;
