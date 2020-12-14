import { createStackNavigator } from 'react-navigation-stack';

import { createAppContainer } from 'react-navigation'
import TodoContainer from '../src/components/TodoContainer'
import BasicComponent from '../src/components/BasicComponent'

const screens = {
    Home: {
        screen: TodoContainer
    },
    Test: {
        screen: BasicComponent
    }
}

const HomeStack = createStackNavigator(screens)

export default createAppContainer(HomeStack)