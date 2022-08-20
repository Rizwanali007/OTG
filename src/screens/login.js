import { View, Text, TouchableOpacity, TextInput, Image, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import React from 'react'
import screenNames from '../helpers/screenNames'

const Login = ({ navigation }) => {
    return (
        <View style={{ flex: 1, paddingHorizontal: 20, backgroundColor: '#eee', marginTop: 20, }}>
            {/* <CustomActivityIndicator
        isLoading={isLoading}
    /> */}
            <Image
                source={require('../../assets/Images/Logo.jpg')}
                style={{
                    marginLeft: 80,
                    width: 180,
                    height: 180,
                    marginTop: 30,


                }}

            />
            <View style={{ marginTop: 60, }}>


                <ScrollView>
                    <Text style={{ marginTop: 10, fontWeight: 'bold' }} >
                        Email
                    </Text>
                    <View style={{
                        shadowColor: "#FFA500",
                        shadowOffset: {
                            width: 3,
                            height: 2,
                        },
                        shadowOpacity: 0.50,
                        shadowRadius: 3.84,
                    }}>
                        <TextInput

                            placeholder='Email'
                            // value={eMail}
                            style={{ width: '98%', borderWidth: 1, borderRadius: 10, marginTop: 10, paddingStart: 20, height: 50, }}
                            onChangeText={(text) => setEMail(text)}
                        />
                        <Icon name="mail" size={30} style={{ color: 'black', marginLeft: 320, marginTop: -40, }} />
                    </View>
                    <View>
                        <Text style={{ marginTop: 20, fontWeight: 'bold' }} >

                            Password
                        </Text>
                        <TextInput
                            placeholder='**********'
                            secureTextEntry={true}
                            // value={Password}
                            style={{ width: '98%', borderWidth: 1, borderRadius: 10, marginTop: 10, paddingStart: 20 }}
                        // onChangeText={(text) => setPassword(text)}
                        />
                        <Icon name="lock" size={30} style={{ color: 'black', marginLeft: 320, marginTop: -40, }} />
                    </View>

                    <TouchableOpacity
                        style={{ width: '98%', borderWidth: 1, paddingHorizontal: 20, borderRadius: 10, marginTop: 40, paddingStart: 10, backgroundColor: 'black', marginLeft: 10, }}
                        onPress={() => {
                            // btnActionSignIn()
                            navigation.navigate(screenNames.Home)
                        }}

                    >
                        <Text style={{ textAlign: 'center', padding: 5, color: 'white', fontSize: 20, fontWeight: 'bold', marginLeft: 10, }} >Log In</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{ width: '40%', marginTop: 40, paddingStart: 6, marginLeft: 100, }}
                        onPress={() => {

                            navigation.navigate(screenNames.Login)
                        }}

                    >
                        <Text style={{ textAlign: 'center', padding: 5, fontWeight: 'bold', fontSize: 15, }} >Forgot Passward?</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={{ width: '98%', borderWidth: 1, paddingHorizontal: 20, borderRadius: 10, marginTop: 40, paddingStart: 10, backgroundColor: 'black', marginLeft: 10, }}
                        onPress={() => {
                            navigation.navigate(screenNames.SignUp)
                        }}

                    >
                        <Text style={{ textAlign: 'center', padding: 5, color: 'white', fontWeight: 'bold', fontSize: 20, }} >Sign Up Here</Text>
                    </TouchableOpacity>

                </ScrollView>
            </View>
        </View>
    )
}

export default Login;