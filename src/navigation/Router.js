import {SafeAreaView} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './StackNavigator';
import {colors} from '../theme';

const Router = () => {
    return (
      <SafeAreaView style={{flex: 1}}>
        <NavigationContainer theme={{
          colors: {
            background: colors.textColors.white
          }
        }}>
          <StackNavigator />
        </NavigationContainer>
      </SafeAreaView>
    );
  }
  
  export default Router;