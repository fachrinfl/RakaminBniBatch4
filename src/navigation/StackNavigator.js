import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SignInScreen, SignUpScreen} from '../features/auth';
import {DashboardScreen} from '../features/main';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
    return (
        <Stack.Navigator initialRouteName='SignInScreen'>
            <Stack.Screen name='SignInScreen' component={SignInScreen} options={{
                headerShown: false,
            }}/>
            <Stack.Screen name='SignUpScreen' component={SignUpScreen} />
            <Stack.Screen name='DashboardScreen' component={DashboardScreen} />
        </Stack.Navigator>
    );
}

export default StackNavigator;