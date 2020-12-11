import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { connect } from 'react-redux'

const BasicComponent = (props) => {
    return (
        <View style={styles.container}>
            <Text>whoa, look it's my basic component {props.basic}</Text>
            <StatusBar style="auto" />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
});

export default connect(state => ({ basic: state.basic }))(BasicComponent)