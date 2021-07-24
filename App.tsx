import React from 'react';
import Register from "./Components/Register";
import Profile from "./Components/Profile";


import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';


const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={Register} options={{title: 'Registration'}}/>
                <Stack.Screen name="Profile" component={Profile}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}
