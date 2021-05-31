import React from 'react'
import AppNavigator from './AppNavigator'
import LoginNavigator from './LoginNavigator'
import propTypes from 'prop-types'
import { withTheme } from 'react-native-elements'
import { connect } from 'react-redux'
import AsyncStorage from '@react-native-async-storage/async-storage'
import jwt_decode from 'jwt-decode'

import { loginUser } from '../redux/actions/userActions'

class AuthNavigator extends React.Component {
    componentDidMount(){
        AsyncStorage.getItem('AuthToken')
        .then((res) => {
            let currentDate = new Date();
            let decodedToken = jwt_decode(res);
            decodedToken.exp * 1000 > currentDate.getTime() ?
            this.props.loginUser({username: decodedToken.username, password: "Factoryjet@123"})
            : null
        }
        )
        .catch((err) => console.log(err))
    }
    render() {
        const { user: { authenticated } } = this.props
        if (authenticated) {
            return (
                <AppNavigator />
            )
        } else {
            return (
                <LoginNavigator />
            )
        }
    }
}


AuthNavigator.propTypes = {
    user: propTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    user: state.user
})

const mapActionToProps = {
    loginUser
}

export default connect(mapStateToProps, mapActionToProps)(withTheme(AuthNavigator))