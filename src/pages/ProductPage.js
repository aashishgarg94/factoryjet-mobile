import React from 'react'
import propTypes from 'prop-types'
import { View, Dimensions, ScrollView, ActivityIndicator } from 'react-native'
import { Text, Divider, withTheme, Image } from 'react-native-elements'
import { connect } from 'react-redux'
import { getProduct } from '../redux/actions/dataActions'

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

import Toast from 'react-native-toast-message';

import { addToCart, addToWishlist } from '../redux/actions/dataActions'

class ProductPage extends React.Component {
  componentDidMount() {
    this.props.getProduct(this.props.route.params.productId.toString())
  }

  render() {
    const { data: { item, loading }, theme } = this.props
    const screenWidth = Dimensions.get('window').width

    const sectionTitleMarkup = (title) => (
      <>
        <View style={{ paddingHorizontal: 10, paddingVertical: 15 }}>
          <Text style={{ fontWeight: "normal" }}>{title}</Text>
        </View>
        <Divider />
      </>
    )

    const productInfoMarkup = () => (
      <>
        <View style={{ paddingTop: 10, paddingHorizontal: 10 }}>
          {item.title ?
            <View style={{ flexDirection: "row", paddingBottom: 10 }}>
              <View style={{ flex: 0.4 }}>
                <Text style={{ fontSize: 12, fontWeight: "bold" }}>Product Name</Text>
              </View>
              <View style={{ flex: 0.6 }}>
                <Text style={{ fontSize: 12 }}>{item.title}</Text>
              </View>
            </View>
            : null}
          {item.product_range ?
            <View style={{ flexDirection: "row", paddingBottom: 10 }}>
              <View style={{ flex: 0.4 }}>
                <Text style={{ fontSize: 12, fontWeight: "bold" }}>Product Range</Text>
              </View>
              <View style={{ flex: 0.6 }}>
                <Text style={{ fontSize: 12 }}>{item.product_range}</Text>
              </View>
            </View>
            : null}
          {item.product ?
            <View style={{ flexDirection: "row", paddingBottom: 10 }}>
              <View style={{ flex: 0.4 }}>
                <Text style={{ fontSize: 12, fontWeight: "bold" }}>Product</Text>
              </View>
              <View style={{ flex: 0.6 }}>
                <Text style={{ fontSize: 12 }}>{item.product}</Text>
              </View>
            </View>
            : null}
          {item.product_type ?
            <View style={{ flexDirection: "row", paddingBottom: 10 }}>
              <View style={{ flex: 0.4 }}>
                <Text style={{ fontSize: 12, fontWeight: "bold" }}>Product Type</Text>
              </View>
              <View style={{ flex: 0.6 }}>
                <Text style={{ fontSize: 12 }}>{item.product_type}</Text>
              </View>
            </View>
            : null}
          {item.brand ?
            <View style={{ flexDirection: "row", paddingBottom: 10 }}>
              <View style={{ flex: 0.4 }}>
                <Text style={{ fontSize: 12, fontWeight: "bold" }}>Brand</Text>
              </View>
              <View style={{ flex: 0.6 }}>
                <Text style={{ fontSize: 12 }}>{item.brand}</Text>
              </View>
            </View>
            : null}
          {item.description ?
            <View style={{ flexDirection: "row", paddingBottom: 10 }}>
              <View style={{ flex: 0.4 }}>
                <Text style={{ fontSize: 12, fontWeight: "bold" }}>Product Description</Text>
              </View>
              <View style={{ flex: 0.6 }}>
                <Text style={{ fontSize: 12 }}>{item.description}</Text>
              </View>
            </View>
            : null}
        </View>
        <Divider style={{ marginTop: 5 }} />
      </>
    )

    const technicalDetailsMarkup = () => (
      <>
        <View style={{ paddingVertical: 5, paddingHorizontal: 10 }}>
          {item.technical_specification?.map((spec) =>
            <View style={{ flexDirection: "row", marginVertical: 5 }}>
              <View style={{ flex: 0.5 }}>
                <Text style={{ fontSize: 12, paddingHorizontal: 5 }}>{spec.name}</Text>
              </View>
              <View style={{ flex: 0.5 }}>
                <Text style={{ fontSize: 12, paddingHorizontal: 5 }}>{spec.value ? spec.value : "             NA"}</Text>
              </View>
            </View>
          )}
        </View>
        <Divider />
      </>
    )

    return (
      <View style={{ flex: 1 }}>
        { loading ?
          <ActivityIndicator size={30} color={theme.colors.primary} style={{ paddingTop: 100 }} />
          :
          <ScrollView>
            <Image
              source={require('../images/hoodie.jpeg')}
              resizeMode="cover"
              resizeMethod="resize"
              style={{ width: screenWidth, height: screenWidth }}
              PlaceholderContent={<ActivityIndicator />}
            />
            <View style={{ marginHorizontal: 10, marginVertical: 10, backgroundColor: "white" }}>
              <View style={{ paddingTop: 10, flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                <Text h3 style={{ textAlign: "center", color: theme.colors.primary }}>Rs. {item.price}</Text>
                {item.price !== item.mrp ? <Text style={{ color: theme.colors.primary, paddingHorizontal: 5, textAlign: "center", textDecorationLine: "line-through" }}> Rs. {item.mrp} </Text> : null}
              </View>
              <Text style={{ textAlign: "center", paddingTop: 10 }}>{item.title ? item.product_range ? item.title + " : " + item.product_range : item.title : item.product_range}</Text>
              {item.brand ? <Text style={{ textAlign: "center", marginVertical: 5 }}>Brand: {item.brand}</Text> : null}
              <View style={{ flexDirection: "row", borderRadius: 5, alignItems: "center", justifyContent: "center", marginTop: 10, marginHorizontal: 10, paddingHorizontal: 5, paddingVertical: 10, backgroundColor: "black" }}>

                <View style={{ flex: 0.7, alignItems: "center" }}
                  onStartShouldSetResponder={() => {
                    this.props.addToCart({ ...item, qty: 1 }),
                      Toast.show({
                        text1: item.title,
                        text2: 'Successfully added to Cart'
                      }),
                      this.props.navigation.navigate("CartScreen", { tab: "cart" })
                  }}>
                  <Text style={{ fontSize: 18, color: "white" }}>Add To Cart</Text>
                </View>
                <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center", paddingHorizontal: 5, flex: 0.3, borderLeftColor: "grey", borderLeftWidth: 1, alignItems: "center" }}
                  onStartShouldSetResponder={() => {
                    this.props.addToWishlist({ ...item }),
                      Toast.show({
                        text1: item.title,
                        text2: 'Successfully added to Wishlist'
                      })
                  }}>
                  <FontAwesomeIcon icon={faHeart} size={18} color="white" />
                </View>
              </View>
              <View style={{ paddingVertical: 10 }}>
                <Divider />
                {sectionTitleMarkup("Product Information")}
                {productInfoMarkup()}
                {sectionTitleMarkup("Technical Details")}
                {technicalDetailsMarkup()}
              </View>
            </View>
          </ScrollView>}
      </View >
    );
  }
}

ProductPage.propTypes = {
  data: propTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  data: state.data
})

const mapActionToProps = {
  getProduct,
  addToCart,
  addToWishlist
}

export default connect(mapStateToProps, mapActionToProps)(withTheme(ProductPage))