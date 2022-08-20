import React from 'react';
import { View, Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../screens/login';
import SignUp from '../screens/signUp';
import Home from '../screens/home';
import Booking from '../screens/booking';
import FindMore from '../screens/FindMore';
import NewSearchResultsScreen from '../components/newindex1';
import SearchResultsScreen from '../components/index1';

import screenNames from '../helpers/screenNames';

const AppNavigator = () => {
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator
            initialRouteName={screenNames.Login} screenOptions={{
                headerShown: false
            }} >

            <Stack.Screen name={screenNames.Login} component={Login} />
            <Stack.Screen name={screenNames.SignUp} component={SignUp} />
            <Stack.Screen name={screenNames.Home} component={Home} />
            <Stack.Screen name={screenNames.Booking} component={Booking} />
            <Stack.Screen name={screenNames.FindMore} component={FindMore} />
            <Stack.Screen name={screenNames.SearchResultScreen} component={SearchResultsScreen} />
            <Stack.Screen name={screenNames.NewSearchResultScreen} component={NewSearchResultsScreen} />
            {/* <Stack.Screen name={screenNames.HotelDetails} component={HotelDetails} /> */}

        </Stack.Navigator>
    );
}
export default AppNavigator;