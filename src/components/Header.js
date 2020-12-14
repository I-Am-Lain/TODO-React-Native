import React from 'react'
import { View, Text, StyleSheet } from 'react-native';

const Header = () => (
    <View style={styles.header}>
        <Text style={styles.headerContent}>EverNote</Text>
    </View>
)


const styles = StyleSheet.create({
    header: {
      height: 80,
      paddingTop: 45,
      backgroundColor: 'coral'
    },
    headerContent: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold'
    }
});

export default Header