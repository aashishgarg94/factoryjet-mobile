import React from 'react'
import propTypes from 'prop-types'
import { View, Dimensions, ScrollView, ActivityIndicator } from 'react-native'
import { withTheme, Button, Text, Input, Image } from 'react-native-elements'
import OTPTextView from 'react-native-otp-textinput';
import { connect } from 'react-redux'

import { loginUser, signupUser, getOTP, verifyOTP } from '../redux/actions/userActions'

const MOBILE_NUMBER_REGEX = /^\d{10}$/;

class Login extends React.Component {
    componentDidMount() {
    }
    constructor(props) {
        super(props)
        this.state = {
            otp: '',
            mobile_number: "",
            password: ""
        }
    }
    componentDidUpdate(prevProps) {
        !prevProps.user?.user_exists && this.props.user?.user_exists ? this.handleLogin()
            : !prevProps.user?.isOtpVerified && this.props.user?.isOtpVerified ? this.handleLogin() : null

        !prevProps.user?.create_user && this.props.user?.create_user ? this.handleRegister() : null

        !prevProps.user?.user_created && this.props.user?.user_created ? this.handleLogin() : null
    }
    handleLogin = () => {
        this.props.loginUser({ username: "+91" + this.state.mobile_number, password: "Factoryjet@123" })
    }
    handleRegister = () => {
        this.props.signupUser({
            "username": "+91" + this.state.mobile_number,
            "full_name": {
                "first_name": "",
                "middle_name": "",
                "last_name": ""
            },
            "email": "example@example.com",
            "mobile_number": "+91" + this.state.mobile_number,
            "current_city": "",
            "current_area": "",
            "profile_image": ""
        })
    }
    handleReqOTP = () => {
        this.props.getOTP({ mobile_number: this.state.mobile_number, is_resend: false })
    }
    handleVerifyOTP = () => {
        this.props.verifyOTP({ mobile_number: this.state.mobile_number, otp: Number(this.state.otp) })
    }
    render() {
        const screenWidth = Dimensions.get('window').width
        return (
            <View style={{ flex: 1, backgroundColor: "white", paddingHorizontal: 20, paddingVertical: 20 }}>
                <View>
                    <Text h3></Text>
                </View>
                <View style={{ marginTop: 0 }}>
                    <View style={{ marginBottom: 20, justifyContent: "center", alignItems: "center" }}>
                <Image source={require('../images/logo.jpg')}
                            resizeMode="cover"
                            resizeMethod="resize"
                            style={{ width: screenWidth - 100, height: 250 }}
                            PlaceholderContent={<ActivityIndicator />}
                        />
                        </View>
                    {this.props.user.isOtpGenerated ?
                        <View style={{marginTop: -20, marginHorizontal: 20}}>
                            <OTPTextView handleTextChange={(e) => this.setState({ otp: e })} />
                            <Button buttonStyle={{ borderRadius: 10, marginHorizontal: 20, marginTop: 50, paddingVertical: 10, borderWidth: 1 }}
                            titleStyle={{ color: "white", fontSize: 15, fontWeight: "normal" }}
                            title="Submit OTP" onPress={this.handleVerifyOTP} />
                        </View>
                        : <View>
                            <Input
                                placeholder="Enter Mobile Number"
                                inputStyle={{ fontSize: 15, paddingLeft: 20 }}
                                style={{ borderWidth: 1, marginHorizontal: 10, borderRadius: 20, borderColor: "grey" }}
                                containerStyle={{ borderColor: "white" }}
                                inputContainerStyle={{ borderColor: "white", paddingVertical: 2 }}
                                onChangeText={value => this.setState({ mobile_number: value })}
                            />
                            {!this.state.mobile_number || !MOBILE_NUMBER_REGEX.test(this.state.mobile_number) ?
                                <Button
                                    title="Get OTP"
                                    buttonStyle={{ borderRadius: 20, marginHorizontal: 40, marginTop: 10, paddingVertical: 10, backgroundColor: "#A0A0A0", borderColor: "black", borderWidth: 1 }}
                                /> :
                                <Button buttonStyle={{ borderRadius: 20, marginHorizontal: 40, marginTop: 10, paddingVertical: 10, backgroundColor: "black", borderWidth: 1 }} title="Get OTP"
                                    titleStyle={{ color: "white", fontSize: 15, fontWeight: "normal" }}
                                    onPress={this.handleReqOTP}
                                />
                            }
                        </View>
                    }
                </View>
            </View>
        );
    }
}

Login.propTypes = {
    data: propTypes.object.isRequired,
    user: propTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    data: state.data,
    user: state.user
})

const mapActionToProps = {
    loginUser,
    signupUser,
    getOTP,
    verifyOTP
}

export default connect(mapStateToProps, mapActionToProps)(withTheme(Login))