import React from 'react'
import propTypes from 'prop-types'
import { View } from 'react-native'
import { Text } from 'react-native-elements'
import { connect } from 'react-redux'

class OrderItem extends React.Component {
  render() {
    return (
      <View>
          <Text>Order Item</Text>
      </View>
    );
  }
}

OrderItem.propTypes = {
}

const mapStateToProps = (state) => ({
})

const mapActionToProps = {
}

export default connect(mapStateToProps, mapActionToProps)(OrderItem)