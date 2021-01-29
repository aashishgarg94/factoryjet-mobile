import React from 'react'
import propTypes from 'prop-types'
import { View, ActivityIndicator } from 'react-native'
import { Text, withTheme, Image, Divider } from 'react-native-elements'
import { connect } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

class WishItem extends React.Component {
  render() {
    const { item, theme } = this.props

    return (
      <View style={{ width: "100%", marginVertical: 5, borderRadius: 2 }}>
        <Divider />
        <View style={{ paddingHorizontal: 25, paddingTop: 10, paddingBottom: 10 }}>
        <View style={{ flexDirection: "row" , justifyContent: "space-between"}}>

          <View>
            <Text style={{ fontSize: 15, fontWeight: "normal", marginTop: 2 }}>{item.title}</Text>
            <Text style={{ fontSize: 12, color: theme.colors.primary, fontWeight: "normal", marginTop: 2 }}>{item.discount + '% Discount'}</Text>
            <Text style={{ fontSize: 12, marginTop: 15, color: "grey", paddingLeft: 2, textDecorationLine: "line-through" }}>{'Rs. ' + item.mrp}</Text>
            <View style={{flexDirection: "row", alignItems: "center"}}>
              <Text style={{ fontSize: 15, marginTop: 2, color: theme.colors.primary, paddingLeft: 2, paddingRight: 20 }}>{'Rs. ' + item.price}</Text>
              <FontAwesomeIcon icon={faShoppingCart} size={20} color={theme.colors.primary_light} />
              <FontAwesomeIcon icon={faTrash} size={15} color="grey" style={{opacity: 0.8, marginLeft: 10}} />
            </View>
          </View>
          <Image
            source={require('../images/knob.jpeg')}
            resizeMode="cover"
            resizeMethod="resize"
            style={{ width: 120, height: 120 }}
            PlaceholderContent={<ActivityIndicator />}
          />
        </View>
        <View style={{marginTop: 10}}>
          <Text style={{ fontSize: 12, fontWeight: "normal", marginTop: 2 }}>{'GST Applicable: ' + item.gst}</Text>
          <Text style={{ fontSize: 12, fontWeight: "normal", marginTop: 2 }}>{'Expected Delivery: ' + item.delivery}</Text>
        </View>
      </View>
      </View>
    );
  }
}

WishItem.propTypes = {
  item: propTypes.object.isRequired
}

const mapStateToProps = (state) => ({
})

const mapActionToProps = {
}

export default connect(mapStateToProps, mapActionToProps)(withTheme(WishItem))