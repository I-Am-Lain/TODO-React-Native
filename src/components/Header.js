import React from 'react'
import { View, Text } from 'react-native';
import { global } from '../../styles/global'

import { MaterialCommunityIcons } from '@expo/vector-icons'; 

const Header = () => (

    <View style={global.header}>
        <MaterialCommunityIcons name="puzzle-heart" size={40} color="black" />
        <Text style={global.headerContent}>EverNote</Text>
    </View>
    
)

export default Header