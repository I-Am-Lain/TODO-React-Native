import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import { setAdvanced, addTodo } from '../actions/index.js'

import { connect } from 'react-redux'

// import * as SMS from 'expo-sms';

// const handlePress = async () => {
//     const isAvailable = await SMS.isAvailableAsync();
//     if (isAvailable) {
//         const { result } = await SMS.sendSMSAsync(
//             '7346461641', 'My sample HelloWorld message')
//     } else {
//         alert('message didnt work dawg')
//     }
// }


const BasicComponent = (props) => {
    return (
        <View style={styles.container}>
            
            <Text>whoa, look it's my basic component {props.basic}</Text>
            
            <View style={styles.buttonContainer}>
                <Button title="change basic state" onPress={() => props.setAdvanced()}/>
            </View>

                  {/* <TouchableOpacity
                    onPress={handlePress}
                    style={{ backgroundColor: 'blue' }}>
                    <Text style={{ fontSize: 20, color: '#fff' }}>send text</Text>
                </TouchableOpacity> */}

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

export default connect(state => ({ basic: state.basic, todos: state.todos }), { setAdvanced, addTodo })(BasicComponent)