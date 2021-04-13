import React from 'react'
import propTypes from 'prop-types'
import { View, ActivityIndicator } from 'react-native'
import { Text, withTheme, Image, Divider } from 'react-native-elements'
import { connect } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { cloneDeep } from 'lodash'
import { addToCart, removeFromCart } from '../redux/actions/dataActions'
import Toast from 'react-native-toast-message';

class CartItem extends React.Component {
  render() {
    const { item, theme } = this.props
    const increaseCartQty = () => {
      let newItem = cloneDeep(item)
      newItem.qty = 1
      this.props.addToCart(newItem)
    }
    const decreaseCartQty = () => {
      if(item.qty > 1){
        let newItem = cloneDeep(item)
        newItem.qty = -1
        this.props.addToCart(newItem)
      }else{
        Toast.show({
          type: "info",
          text1: 'Cannot reduce quantity',
          text2: 'You can remove if you do not want this item'
        });
      }
    }

    return (
      <View style={{ width: "100%", marginVertical: 5, borderRadius: 2 }}>
        <Divider />
        <View style={{ paddingHorizontal: 25, paddingTop: 10, paddingBottom: 15 }}>
        <View style={{ flexDirection: "row" , justifyContent: "space-between"}}>

          <View>
            <Text style={{ fontSize: 15, fontWeight: "normal", marginTop: 2 }}>{item.title}</Text>
            <Text style={{ fontSize: 12, color: theme.colors.primary, fontWeight: "normal", marginTop: 2 }}>{item.discount + '% Discount'}</Text>
            <View style={{ flexDirection: "row", paddingTop: 20, paddingLeft: 2 }}>
              <View style={{borderWidth: 1, backgroundColor: "#F2F1F1", borderColor: "grey", padding: 2, margin: 1}} onStartShouldSetResponder={() => {this.props.ui.loading ? null : decreaseCartQty()}}><Text style={{color: theme.colors.primary, fontSize: 15}}>{' - '}</Text></View>
              <View style={{borderWidth: 1, borderColor: "grey", paddingHorizontal: 5, justifyContent: "center", alignItems: "center"}}><Text style={{color: theme.colors.primary, fontSize: 15, textAlign: "center"}}> {item.qty} </Text></View>
              <View style={{borderWidth: 1, backgroundColor: "#F2F1F1", borderColor: "grey", padding: 2, margin: 1}} onStartShouldSetResponder={() => {this.props.ui.loading ? null : increaseCartQty()}}><Text style={{color: theme.colors.primary, fontSize: 15}}>{' + '}</Text></View>
              <View style={{ justifyContent: "center", paddingHorizontal: 10}}
                onStartShouldSetResponder={() => {
                  this.props.removeFromCart(item.id),
                  Toast.show({
                    type: 'error',
                    text1: item.title,
                    text2: 'Removed from Cart'
                  })
                  }}>
                <FontAwesomeIcon icon={faTrash} size={15} color="grey" style={{opacity: 0.8}} />
              </View>
            </View>
            <Text style={{ fontSize: 15, marginTop: 5, color: theme.colors.primary, paddingLeft: 2 }}>{'Rs. ' + item.price * item.qty}</Text>
          </View>
          <Image
            source={require('../images/hoodie.jpeg')}
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

CartItem.propTypes = {
  item: propTypes.object.isRequired,
  data: propTypes.object.isRequired,
  ui: propTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  data: state.data,
  ui: state.ui
})

const mapActionToProps = {
  addToCart,
  removeFromCart
}

export default connect(mapStateToProps, mapActionToProps)(withTheme(CartItem))