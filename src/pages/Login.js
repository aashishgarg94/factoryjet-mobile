import React from 'react'
import propTypes from 'prop-types'
import { View, ScrollView } from 'react-native'
import { withTheme, Button } from 'react-native-elements'
import { connect } from 'react-redux'

import { loginUser } from '../redux/actions/userActions'

class Login extends React.Component {
    handleLogin = () => {
        console.log("check2")
        this.props.loginUser({username: "+919910848511", password: "Factoryjet@123"})
    }
  render() {
    return (
        <View style={{flex: 1, backgroundColor: "white"}}>
        <Button buttonStyle={{ borderRadius: 0, marginRight: 2, backgroundColor: "red", borderWidth: 1 }} title="LOGIN"
            titleStyle={{ color: "black" }} onPress={this.handleLogin} />
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