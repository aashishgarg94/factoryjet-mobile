import React from 'react'
import AppNavigator from './AppNavigator'
import LoginNavigator from './LoginNavigator'
import propTypes from 'prop-types'
import { withTheme } from 'react-native-elements'
import { connect } from 'react-redux'

class AuthNavigator extends React.Component {
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
}

export default connect(mapStateToProps, mapActionToProps)(withTheme(AuthNavigator))