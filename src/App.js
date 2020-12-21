import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { WebView } from 'react-native-webview';

function HomeScreen() {
    return (
        <WebView source={{ uri: 'https://emodul.kemdikbud.go.id/' }} />
    );
}

const Stack = createStackNavigator();

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen 
                    name="Home" 
                    component={HomeScreen}
                    options={{headerShown: false}}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;