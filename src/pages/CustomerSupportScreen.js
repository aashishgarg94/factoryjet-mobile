import React from 'react'
import propTypes from 'prop-types'
import { View } from 'react-native'
import { Text } from 'react-native-elements'
import { connect } from 'react-redux'
import TitleBar from '../components/TitleBar'
import PageTitle from '../components/PageTitle'

class CustomerSupportScreen extends React.Component {
  render() {
    return (
      <View>
        <TitleBar/>
        <PageTitle title="Customer Support" />
        <View style={{paddingHorizontal: 20}}>
          <Text>For any queries, you can reach us at +91 9999999999</Text>
          <Text>You can also mail us at xyz@factoryjet.com</Text>
        </View>
      </View>
    );
  }
}

CustomerSupportScreen.propTypes = {
}

const mapStateToProps = (state) => ({
})

const mapActionToProps = {
}

export default connect(mapStateToProps, mapActionToProps)(CustomerSupportScreen)