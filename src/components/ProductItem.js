import React from 'react'
import propTypes from 'prop-types'
import { View, ActivityIndicator } from 'react-native'
import { Text, withTheme, Image } from 'react-native-elements'
import { connect } from 'react-redux'

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

import Toast from 'react-native-toast-message';

import { addToCart, addToWishlist } from '../redux/actions/dataActions'

class ProductItem extends React.Component {
    render() {
        const { item, theme } = this.props

        return (
            <View style={{ width: "50%", paddingHorizontal: 5, marginBottom: 5, paddingVertical: 5, borderRadius: 2 }}>
                <View style={{
                    flexDirection: "row", shadowColor: '#000', borderRadius: 2, paddingVertical: 5,
                    elevation: 2, shadowOffset: { width: 0, height: 1 }, shadowRadius: 2
                }}>
                    <View style={{ flex: 0.5, paddingLeft: 2 }}>
                        <Image
                            source={require('../images/knob.jpeg')}
                            resizeMode="cover"
                            resizeMethod="resize"
                            style={{ width: "auto", height: 100 }}
                            PlaceholderContent={<ActivityIndicator />}
                        />
                    </View>
                    <View style={{ flex: 0.5, paddingLeft: 5, paddingRight: 5, paddingVertical: 5 }}>
                        <Text style={{ fontSize: 10 }}>{item.category}</Text>
                        <Text style={{ fontSize: 12, color: theme.colors.primary, fontWeight: "bold", marginTop: 2 }}>{item.title}</Text>
                        <Text style={{ fontSize: 12, color: theme.colors.primary_light, fontWeight: "bold", marginTop: 10 }}>{'Rs. ' + item.price}</Text>
                        <Text style={{ fontSize: 10, marginTop: 2, color: "#505050", textDecorationLine: "line-through" }}>{'Rs. ' + item.mrp}</Text>
                        <View style={{ flexDirection: "row", alignItems: "flex-end", justifyContent: "flex-end", marginTop: 5, marginRight: 10 }}>
                            <View style={{ paddingHorizontal: 5 }} 
                                onStartShouldSetResponder={() => {
                                    this.props.addToWishlist({...item}),
                                    Toast.show({
                                        text1: item.title,
                                        text2: 'Successfully added to Wishlist'
                                      })
                                }}>
                                <FontAwesomeIcon icon={faHeart} size={15} color={theme.colors.primary_light} />
                            </View>
                            <View style={{ paddingHorizontal: 0 }}
                                onStartShouldSetResponder={() => {
                                    this.props.addToCart({...item, qty: 1}),
                                    Toast.show({
                                        text1: item.title,
                                        text2: 'Successfully added to Cart'
                                      })
                                    }}>
                                <FontAwesomeIcon icon={faShoppingCart} size={15} color={theme.colors.primary_light} />
                            </View>
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

export default connect(mapStateToProps, mapActionToProps)(withTheme(ProductItem))