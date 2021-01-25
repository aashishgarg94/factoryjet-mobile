import React from 'react'
import propTypes from 'prop-types'
import { View } from 'react-native'
import { Text } from 'react-native-elements'
import { connect } from 'react-redux'

class CartItem extends React.Component {
  render() {
    return (
      <View>
          <Text>Cart Item</Text>
      </View>
    );
  }
}

CartItem.propTypes = {
}

const mapStateToProps = (state) => ({
})

const mapActionToProps = {
}

export default connect(mapStateToProps, mapActionToProps)(CartItem)