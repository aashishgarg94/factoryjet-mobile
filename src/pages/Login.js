import React from 'react'
import propTypes from 'prop-types'
import { View, ScrollView } from 'react-native'
import { withTheme, Button, Text, Input } from 'react-native-elements'
import { connect } from 'react-redux'

import { loginUser } from '../redux/actions/userActions'

class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            mobile_number: "",
            password: ""
        }
    }
    handleLogin = () => {
        this.props.loginUser({ username: "+91" + this.state.mobile_number, password: "Factoryjet@123" })
    }
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: "white", paddingHorizontal: 20, paddingVertical: 20 }}>
                <View>
                    <Text h3>Sign In</Text>
                </View>
                <View style={{marginTop: 100}}>
                    <Input
                        placeholder="Enter Mobile Number"
                        inputStyle={{fontSize: 15, paddingLeft: 20}}
                        style={{ borderWidth: 1, marginHorizontal: 10, borderRadius: 20, borderColor: "grey" }}
                        containerStyle={{borderColor: "white"}}
                        inputContainerStyle={{borderColor: "white", paddingVertical: 2}}
                        onChangeText={value => this.setState({ mobile_number: value })}
                    />
                    <Input
                        placeholder="Password"
                        inputStyle={{fontSize: 15, paddingLeft: 20}}
                        style={{ borderWidth: 1, marginHorizontal: 10, borderRadius: 20, borderColor: "grey" }}
                        containerStyle={{borderColor: "white", marginTop: -10}}
                        inputContainerStyle={{borderColor: "white", paddingVertical: 2}}
                        onChangeText={value => this.setState({ password: value })}
                    />
                    <Button buttonStyle={{ borderRadius: 20, marginHorizontal: 40, marginTop: 10, paddingVertical: 10, backgroundColor: "black", borderWidth: 1 }} title="Log in"
                        titleStyle={{ color: "white", fontSize: 15, fontWeight: "normal" }} onPress={this.handleLogin} />
                </View>
            </View>
        );
    }
}

Login.propTypes = {
    data: propTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    data: state.data
})

const mapActionToProps = {
    loginUser
}

export default connect(mapStateToProps, mapActionToProps)(withTheme(Login))