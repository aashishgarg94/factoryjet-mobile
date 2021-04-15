import React from 'react'
import propTypes from 'prop-types'
import { View, ActivityIndicator, TouchableOpacity } from 'react-native'
import { Text, withTheme, Image } from 'react-native-elements'
import { connect } from 'react-redux'
import { useNavigation } from '@react-navigation/native';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

import Toast from 'react-native-toast-message';

import { addToCart, addToWishlist } from '../redux/actions/dataActions'

class ProductItem extends React.Component {
    render() {
        const { item, theme } = this.props

        return (
            <View style={{ width: "50%", paddingHorizontal: 5, marginBottom: 5, paddingVertical: 5, borderRadius: 2 }}>
                <View style={{
                    shadowColor: '#000', borderRadius: 0, paddingVertical: 5,
                    elevation: 0, shadowOffset: { width: 0, height: 0 }, shadowRadius: 0
                }}>
                    <TouchableOpacity onPress={() => {
                        this.props.navigation.navigate('My Cart', { screen: "ProductPage", params: {productId: item.id} })
                    }}>
                    <View style={{ paddingLeft: 2 }}>
                        <Image
                            source={require('../images/hoodie.jpeg')}
                            resizeMode="cover"
                            resizeMethod="resize"
                            style={{ width: "auto", height: 200 }}
                            PlaceholderContent={<ActivityIndicator />}
                        />
                    </View>
                    </TouchableOpacity>
                    <View style={{ flexDirection: "row", borderRadius: 5, alignItems: "center", justifyContent: "center", marginTop: 10, marginHorizontal: 10, paddingHorizontal: 5, paddingVertical: 5, backgroundColor: "black" }}>
                            <View style={{ paddingHorizontal: 0, flex: 0.8, alignItems: "center" }}
                                onStartShouldSetResponder={() => {
                                    this.props.addToCart({...item, qty: 1}),
                                    Toast.show({
                                        text1: item.title,
                                        text2: 'Successfully added to Cart'
                                      }),
                                      this.props.navigation.navigate('My Cart', { screen: "CartScreen", params: { tab: "cart" } })
                                    }}>
                                <Text style={{color: "white"}}>Add To Cart</Text>
                            </View>
                            <View style={{ paddingHorizontal: 5, flex: 0.2, borderLeftColor: "grey", borderLeftWidth: 1, alignItems: "center" }} 
                                onStartShouldSetResponder={() => {
                                    this.props.addToWishlist({...item}),
                                    Toast.show({
                                        text1: item.title,
                                        text2: 'Successfully added to Wishlist'
                                      })
                                }}>
                                <FontAwesomeIcon icon={faHeart} size={15} color="white" />
                            </View>
                        </View>
                    <View style={{ paddingLeft: 5, paddingRight: 5, paddingVertical: 5, justifyContent: "center", alignItems: "center" }}>
                        <Text style={{ fontSize: 10, textAlign: "center" }}>{item.brand}</Text>
                        <Text style={{ fontSize: 12, textAlign: "center", fontWeight: "normal", marginTop: 2 }}>{item.title ? item.product_range ? item.title+" : "+item.product_range : item.title : item.product_range}</Text>
                        <View style={{ flexDirection: "row", marginTop: 5, alignItems: "center", justifyContent: "center" }}>
                        <Text style={{ fontSize: 12, color: theme.colors.primary, fontWeight: "bold" }}>{'Rs. ' + item.price + '  '}</Text>
                        <Text style={{ fontSize: 10, color: theme.colors.primary, textDecorationLine: "line-through" }}>{' Rs. ' + item.mrp + ' '}</Text>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}

ProductItem.propTypes = {
    item: propTypes.object.isRequired
}

const mapStateToProps = (state) => ({
})

const mapActionToProps = {
    addToCart,
    addToWishlist
}
export default connect(mapStateToProps, mapActionToProps)(withTheme(function(props) {
    const navigation = useNavigation();
    return <ProductItem {...props} navigation={navigation} />;
}))