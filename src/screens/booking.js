import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import screenNames from '../helpers/screenNames'
import Icon from 'react-native-vector-icons/MaterialIcons';

const Booking = ({ navigation }) => {

    return (
        <View>
            <View>
                <TouchableOpacity onPress={() => {
                    navigation.navigate(screenNames.FindMore)
                }}>
                    <Icon name='arrow-back' size={30} style={{ color: 'black', margin: 15, marginLeft: 5, }} />

                </TouchableOpacity>
            </View>
            <View style={{ marginLeft: 10, marginTop: 20, }}>
                <Image style={{ marginTop: 0, height: 230, width: 340, marginRight: 30, borderRadius: 15, }} source={require('../../assets/Images/image8.webp')} />
            </View>
            <View>
                <TouchableOpacity

                    style={{ width: '98%', height: 70, borderWidth: 0, borderRadius: 10, marginTop: 30, justifyContent: 'center', backgroundColor: 'black', marginLeft: 4, }}
                    onPress={async () => {
                        navigation.navigate(screenNames.Booking)
                        // let data = { userInfo: user, plan: item }
                        // OrderRideAPI(data).then(() => {
                        //     console.log('Hi success');
                        // })

                    }} >

                    <Text style={{ textAlign: 'center', padding: 5, fontSize: 20, fontWeight: '500', color: 'white', marginLeft: 5, marginTop: 5, }} > Confirm Booking</Text>

                </TouchableOpacity>
            </View>
        </View>
    )
}


export default Booking;