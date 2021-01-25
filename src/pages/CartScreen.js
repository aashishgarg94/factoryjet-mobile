import React from 'react'
import propTypes from 'prop-types'
import { View, ScrollView } from 'react-native'
import { Text, withTheme, Divider } from 'react-native-elements'
import { connect } from 'react-redux'
import TitleBar from '../components/TitleBar'
import CartItem from '../components/CartItem'
import PageTitle from '../components/PageTitle'

class CartScreen extends React.Component {
  
  render() {
    const { data: { cartList}, theme } = this.props

    const subtotal = cartList?.map(item => item.price*item.qty).reduce((prev, next) => prev + next);
    const gst = cartList?.map(item => item.price*item.qty*item.gst/100).reduce((prev, next) => prev + next);

    const checkoutCostMarkup = (
      <>
        <Divider />
        <View style={{flexDirection: "row", paddingRight: 20, paddingVertical: 15}}>
          <View style={{flex: 0.4}}></View>
          <View style={{flex: 0.6}}>
            <View style={{flexDirection: "row", justifyContent: "space-between"}}>
          <Text style={{textAlign: "left", fontSize: 12 }}>Subtotal :</Text>
          <Text style={{textAlign: "right", fontSize: 12 }}>{'Rs. ' + subtotal}</Text>
          </View>
          <View style={{flexDirection: "row", justifyContent: "space-between", paddingTop: 2}}>
          <Text style={{textAlign: "left", fontSize: 12 }}>GST Charges :</Text>
          <Text style={{textAlign: "right", fontSize: 12 }}>{'Rs. ' + gst}</Text>
          </View>
          <View style={{flexDirection: "row", justifyContent: "space-between", paddingVertical: 5}}>
          <Text style={{textAlign: "left", fontWeight: "bold", fontSize: 15 }}>Total :</Text>
          <Text style={{textAlign: "right", fontWeight: "bold", fontSize: 15 }}>{'Rs. ' + (subtotal + gst)}</Text>
          </View>
          </View>
        </View>
      </>
    )

    return (
      <View style={{flex: 1, backgroundColor: "white"}}>
        <TitleBar/>
        <PageTitle title="My Cart"/>
          <ScrollView>
          { cartList.map( ( item ) => <CartItem item = { item } key={item.id} /> ) }
          {checkoutCostMarkup}
          </ScrollView>
      </View>
    );
  }
}

CartScreen.propTypes = {
  data: propTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  data: state.data
})

const mapActionToProps = {
}

export default connect(mapStateToProps, mapActionToProps)(withTheme(CartScreen))