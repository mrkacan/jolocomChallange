import {StyleSheet} from 'react-native';
import Home from './src/screens/Home/Home';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Result from "./src/screens/Result/Result";
import {StatusBar} from "expo-status-bar";

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <>
            <StatusBar style="auto"/>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="home" component={Home} options={{
                        headerShown: false,
                    }}/>
                    <Stack.Screen name="result" component={Result} options={{
                        headerShown: false,
                        animation: "slide_from_bottom",
                    }}/>
                </Stack.Navigator>
            </NavigationContainer>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
