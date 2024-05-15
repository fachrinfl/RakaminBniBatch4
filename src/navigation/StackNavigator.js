import { useState, useEffect } from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SignInScreen, SignUpScreen} from '../features/auth';
import {DashboardScreen, AddNoteScreen} from '../features/main';
import Firebase from '../../firebaseConfig';
import {onAuthStateChanged, signOut} from 'firebase/auth';
import {colors} from '../theme';
import {Ionicons} from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native';
import { ActivityIndicator, View } from 'react-native';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const navigation = useNavigation();
    

    useEffect(() => {
        const unsubcribe = onAuthStateChanged(Firebase.auth, (user) => {
            if (user) {
                setUser(user)
            } else {
                setUser(null)
            }
            setLoading(false)
        });

        return () => unsubcribe();
    }, []);
    
    if (loading) {
        return (
            <View style={{
                flex: 1, 
                justifyContent: 'center', 
                alignItems: 'center'}}
            >
               <ActivityIndicator size='small' color={colors.primary.blue} /> 
            </View>
        );
    }

    const signOutHandle = async () => {
        try {
            await signOut(Firebase.auth);
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <Stack.Navigator screenOptions={{
            headerTitleAlign: 'center',
            headerStyle: {
                backgroundColor: colors.textColors.white,
            }
        }}>
            {user ? (
                <Stack.Screen name='DashboardScreen' component={DashboardScreen} options={{
                    headerTitle: 'ODP Batch 4',
                    headerLeft: () => (
                        <Ionicons 
                            name='person-circle'
                            size={24}
                            color={colors.primary.blue}
                            onPress={signOutHandle}
                        />
                    ),
                    headerRight: () => (
                        <Ionicons 
                            name='add-circle-sharp'
                            size={24}
                            color={colors.primary.blue}
                            onPress={() => navigation.navigate('AddNoteScreen')}
                        />
                    )
                }}/>
            ) : (
                <Stack.Screen name='SignInScreen' component={SignInScreen} options={{
                    headerShown: false,
                }}/>
            )}
            <Stack.Screen name='SignUpScreen' component={SignUpScreen} />
            <Stack.Screen name='AddNoteScreen' component={AddNoteScreen} options={{
                headerLeft: () => (
                    <Ionicons 
                        name='arrow-back-circle'
                        size={24}
                        color={colors.primary.blue}
                        onPress={() => navigation.goBack()}
                    />
                ),
            }} />
        </Stack.Navigator>
    );
}

export default StackNavigator;