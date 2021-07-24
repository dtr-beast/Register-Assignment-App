import React from 'react';
import {StyleSheet} from 'react-native';
import Register from "./Components/Register";
import Constants from 'expo-constants';
import ProfileCard from "./Components/ProfileCard";
import {Card} from 'react-native-paper';
import {LinearGradient} from 'expo-linear-gradient';


import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';


const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={Register} options={{ title: 'Overview' }}/>
                <Stack.Screen name="Profile" component={ProfileCard}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}


const styles = StyleSheet.create({
    container: {
        marginTop: Constants.statusBarHeight,
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#ecf0f1',
        padding: 8,
    },
});
