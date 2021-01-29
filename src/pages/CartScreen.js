import React from 'react'
import propTypes from 'prop-types'
import { View, ScrollView } from 'react-native'
import { Text, withTheme, Divider, Button } from 'react-native-elements'
import { connect } from 'react-redux'
import TitleBar from '../components/TitleBar'
import CartItem from '../components/CartItem'
import WishItem from '../components/WishItem'
import PageTitle from '../components/PageTitle'

class CartScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      tab: 'cart'
    }
  }

  componentDidMount() {
    const routeTab = this.props.route?.params?.tab
    if (routeTab) {
      this.setState({
        tab: routeTab
      })
    }
  }

  render() {
    const { data: { cartList, wishList }, theme } = this.props

    const subtotal = cartList?.map(item => item.price * item.qty).reduce((prev, next) => prev + next);
    const gst = cartList?.map(item => item.price * item.qty * item.gst / 100).reduce((prev, next) => prev + next);

    const checkoutCostMarkup = (
      <>
        <Divider />
        <View style={{ flexDirection: "row", paddingRight: 20, paddingVertical: 15 }}>
          <View style={{ flex: 0.4 }}></View>
          <View style={{ flex: 0.6 }}>
            <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
              <Text style={{ textAlign: "left", fontSize: 12 }}>Subtotal :</Text>
              <Text style={{ textAlign: "right", fontSize: 12 }}>{'Rs. ' + subtotal}</Text>
            </View>
            <View style={{ flexDirection: "row", justifyContent: "space-between", paddingTop: 2 }}>
              <Text style={{ textAlign: "left", fontSize: 12 }}>GST Charges :</Text>
              <Text style={{ textAlign: "right", fontSize: 12 }}>{'Rs. ' + gst}</Text>
            </View>
            <View style={{ flexDirection: "row", justifyContent: "space-between", paddingVertical: 5 }}>
              <Text style={{ textAlign: "left", fontWeight: "bold", fontSize: 15 }}>Total :</Text>
              <Text style={{ textAlign: "right", fontWeight: "bold", fontSize: 15 }}>{'Rs. ' + (subtotal + gst)}</Text>
            </View>
          </View>
        </View>
      </>
    )

    return (
      <View style={{ flex: 1, backgroundColor: "white" }}>
        <TitleBar />
        <PageTitle title={this.state.tab !== "cart" ? "My Wishlist" : "My Cart" } />
        <ScrollView>
          {this.state.tab === "cart" ? cartList.map((item) => <CartItem item={item} key={item.id} />)
            : this.state.tab === "wishlist" ? wishList.map((item) => <WishItem item={item} key={item.id} />)
              : null}
          {this.state.tab === "cart" ? checkoutCostMarkup : null}
        </ScrollView>
        <View style={{ flexDirection: "row", justifyContent: "center", marginTop: 10, margin: 2 }}>
          {this.state.tab === "cart" ?
            <Button buttonStyle={{ borderRadius: 0, marginRight: 2, backgroundColor: "white", borderWidth: 1 }} title="GO TO WISHLIST"
              containerStyle={{ flex: 0.5 }} titleStyle={{ color: "black" }} onPress={() => this.setState({ tab: "wishlist" })} />
            : <Button buttonStyle={{ borderRadius: 0, marginRight: 2, backgroundColor: "white", borderWidth: 1 }} title="GO TO CART"
              containerStyle={{ flex: 0.5 }} titleStyle={{ color: "black" }} onPress={() => this.setState({ tab: "cart" })} />}
          <Button buttonStyle={{ borderRadius: 0, color: theme.colors.primary, backgroundColor: theme.colors.primary_light, borderWidth: 1 }}
            containerStyle={{ flex: 0.5 }} titleStyle={{}} title="CHECKOUT" />
        </View>
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