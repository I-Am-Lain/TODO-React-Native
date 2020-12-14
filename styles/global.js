import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';


export const global = StyleSheet.create({
    mainContainer: {
        flex: 1
    },


    // HEADER
    header: {
        flexDirection: 'row',
        height: 120,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'coral',
        paddingTop: 25
    },
    headerContent: {
        color: 'black',
        fontSize: 35,
        fontWeight: 'bold',
        marginLeft: 12
    },


    // TODO CONTAINER
    todoContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'pink'
    },


    // TODO FORM
    inputContainer: {
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: 'red',
        borderWidth: 3,
        borderStyle: 'solid',
        marginTop: 50
    },
    input: {
        borderWidth: 1,
        borderColor: '#777',
        padding: 8,
        margin: 10,
        width: 200,
    },
    submitButton: {
        backgroundColor: 'salmon'
    },

    // TODO LIST
    listContainer: {
        flex: 1,
        backgroundColor: 'yellow',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 50,
        marginTop: 16
    },

    listItem: {
        borderRadius: 6,
        elevation: 3,
        backgroundColor: '#fff',
        shadowOffset: { width: 1, height: 1 },
        shadowColor: '#333',
        shadowOpacity: 0.7,
        shadowRadius: 2,
        marginHorizontal: 20,
        marginVertical: 10,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'lightblue'
    },
    listItemText: {
        marginLeft: 16
    }

})