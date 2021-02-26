import 'react-native-gesture-handler';

import React from 'react';
import Home from './Home'
import Description from './Description'

//import { NavigationContainer } from '@react-navigation/native';
//import { createStackNavigator } from '@react-navigation/stack'

//import { createAppContainer, createStackNavigator } from 'react-navigation';


//### TENTATIVA 1 ###
/*const App = createAppContainer(
    createStackNavigator({
      Home: {
          screen: Home
      },
      Description:{
        screen: Description
      } ,
    })
  );*/

//### TENTATIVA 2 ###
/*const App: React.FC = () => {
    return <NavigationContainer>        
        <Home />
        <Description />        
    </NavigationContainer>
}*/

//SOMENTE PARA COMPILAR
const App = () =>{}

export default App;