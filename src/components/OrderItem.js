import React from 'react'
import propTypes from 'prop-types'
import { View, ActivityIndicator } from 'react-native'
import { Text, withTheme, Image, Divider } from 'react-native-elements'
import { connect } from 'react-redux'

class OrderItem extends React.Component {
  render() {
    const { item, theme } = this.props

    return (
      <View style={{ width: "100%", marginVertical: 5, borderRadius: 2 }}>
        <View style={{ marginHorizontal: 15, paddingTop: 15, borderWidth: 1, borderColor: "grey" }}>
        <View style={{ flexDirection: "row", paddingHorizontal: 10 }}>
        <Image
            source={require('../images/electricals.jpeg')}
            resizeMode="cover"
            resizeMethod="resize"
            style={{ width: 80, height: 80 }}
            PlaceholderContent={<ActivityIndicator />}
          />
          <View style={{ paddingLeft: 15}}>
            <Text style={{ fontSize: 15, fontWeight: "normal", marginTop: 2 }}>Order Date: {item.date}</Text>
            <View style={{ flexDirection: "row", paddingTop: 10, paddingLeft: 2 }}>
              <View style={{paddingRight: 20}}>
                <Text style={{ color: theme.colors.primary, fontSize: 12 }}>{item.store}</Text>
                <Text style={{ color: theme.colors.primary, fontSize: 12 }}>{item.store_location}</Text>
              </View>
              <View>
                <Text style={{ color: theme.colors.primary, fontSize: 12 }}>Order Amount</Text>
                <Text style={{ color: theme.colors.primary, fontSize: 12 }}>Rs. {item.amount}</Text>
              </View>
            </View>
          </View>

        </View>
        <View style={{marginTop: 10, paddingHorizontal: 10 }}>
          <Text style={{ fontSize: 12, fontWeight: "normal", marginTop: 2, color: "#626262" }}>
            {item.items?.map((orderItem) => orderItem.title + '(x' + orderItem.qty + ')  ' )}
          </Text>
        </View>

        <View style={{ flexDirection: "row", marginTop: 30 }}>
          <View style={{ flex: 0.5, paddingVertical: 5 }}>
            <Text style={{ marginLeft: 10, fontSize: 15 }}>{item.status}</Text>
          </View>
          <View style={{ flex: 0.5, borderWidth: 1, paddingVertical: 5, borderColor: "#A0A0A0" }}>
            <Text style={{ textAlign: "center", fontSize: 15, color: theme.colors.primary }}>ORDER AGAIN</Text>
          </View>
        </View>
      </View>
      </View>
    );
  }
}

OrderItem.propTypes = {
  item: propTypes.object.isRequired
}

const mapStateToProps = (state) => ({
})

const mapActionToProps = {
}

export default connect(mapStateToProps, mapActionToProps)(withTheme(OrderItem))