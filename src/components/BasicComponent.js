import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { setAdvanced, addTodo } from '../actions/index.js'

import { connect } from 'react-redux'



const BasicComponent = (props) => {
    return (
        <View style={styles.container}>
            
            <Text>whoa, look it's my basic component {props.basic}</Text>
            <Text>my todos:</Text>
            {
                props.todos.map(todo => {return <Text>{todo}</Text>})
            }
            
            <View style={styles.buttonContainer}>
                <Button title="Hey I'm a button!" onPress={() => props.addTodo('yep')}/>
            </View>

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