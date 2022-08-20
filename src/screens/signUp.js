import { View, Text, TouchableOpacity, TextInput, Image, ScrollView } from 'react-native';
import React from 'react'
import screenNames from '../helpers/screenNames'

const SignUp = ({ navigation }) => {
    return (
        <View style={{ flex: 1, paddingHorizontal: 20, backgroundColor: '#eee', }}>
            <ScrollView>
                {/* <CustomActivityIndicator
                isLoading={isLoading}
            /> */}
                <View>
                    <Image
                        source={require('../../assets/Images/Logo.jpg')}
                        style={{
                            marginLeft: 80,
                            width: 180,
                            height: 200,
                            marginTop: 20,


                        }}

                    />


                    <View style={{ flex: 1, marginTop: 50, }}>
                        <TextInput
                            placeholder='First Name'
                            // value={firstName}
                            style={{ width: '98%', borderWidth: 1, borderRadius: 10, marginTop: 10, paddingStart: 20 }}
                        // onChangeText={(text) => setFirstName(text)}
                        />

                        <TextInput
                            placeholder='Last Name'
                            // value={lastName}
                            style={{ width: '98%', borderWidth: 1, borderRadius: 10, marginTop: 10, paddingStart: 20 }}
                        // onChangeText={(text) => setLastName(text)}
                        />
                        <TextInput
                            placeholder='Email Address'
                            // value={Email}
                            style={{ width: '98%', borderWidth: 1, borderRadius: 10, marginTop: 10, paddingStart: 20 }}
                            // onChangeText={(text) => setEmail(text)}
                            keyboardType='email-address'
                        />
                        {/* {GropDownListing()} */}
                        <TextInput
                            placeholder='Mobile No'
                            // value={userMobile}
                            style={{ width: '98%', borderWidth: 1, borderRadius: 10, marginTop: 10, paddingStart: 20 }}
                            // onChangeText={(text) => setUserMobile(text)}
                            keyboardType='phone-pad'
                            maxLength={11}
                        />
                        <TextInput
                            placeholder='Password'
                            secureTextEntry={true}
                            // value={Password}
                            style={{ width: '98%', borderWidth: 1, borderRadius: 10, marginTop: 10, paddingStart: 20 }}
                        // onChangeText={(text) => setPassword(text)}
                        />
                        <TextInput
                            placeholder='Confirm Password'
                            secureTextEntry={true}
                            // value={confirmPassword}
                            style={{ width: '98%', borderWidth: 1, borderRadius: 10, marginTop: 10, paddingStart: 20 }}
                        // onChangeText={(text) => setConfirmPassword(text)}
                        />
                    </View>
                    <View style={{ flex: 1, marginTop: 10, }}>
                        <TouchableOpacity
                            style={{ width: '90%', borderWidth: 1, borderRadius: 10, marginTop: 10, paddingStart: 20, backgroundColor: 'black', marginLeft: 15, height: 40, }}
                        //         // onPress={() => {
                        //         //     btnActionSignUp()
                        //  }} 
                        >
                            <Text style={{ textAlign: 'center', padding: 8, color: 'white', fontWeight: 'bold', marginRight: 17 }} >Sign Up</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flex: 1, }}>
                        <Text style={{ textAlign: 'center', padding: 5, fontWeight: '600' }}>Already Have an account?</Text>
                        <TouchableOpacity
                            style={{ width: '40%', paddingStart: 6, marginLeft: 100, }}
                            onPress={() => {
                                navigation.navigate(screenNames.Login)
                            }} >
                            <Text style={{ textAlign: 'center', padding: 5, color: 'black', fontWeight: 'bold', fontSize: 20, textDecorationLine: 'underline' }} >SignIn</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                {/* <BottomSheetComponent
                title={true}
                ref={bottomRef}
            //sheetData={renderPicture}
            /> */}
            </ScrollView>

        </View>
    )
}

export default SignUp;