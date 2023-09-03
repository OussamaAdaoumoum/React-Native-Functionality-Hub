import React from 'react';
import {Text,  SafeAreaView, View, StyleSheet, ScrollView} from 'react-native';
import RecentCalls from './RecentCalls';
import CallLink from './CallLink';
import {Colors} from '../../../theme/Color';


export default function Notifications() {
    return (
        <ScrollView contentContainerStyle={styles.container}>
        {/* <CallLink /> */}
        <RecentCalls />
      </ScrollView>
    );
    }

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff", //Colors.background
        padding: 16,
    },
    });
      