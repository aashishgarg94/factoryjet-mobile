import React from 'react'
import propTypes from 'prop-types'
import { View, ActivityIndicator } from 'react-native'
import { Text, withTheme, Image } from 'react-native-elements'
import { connect } from 'react-redux'

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
                        <Text style={{ fontSize: 10, marginTop: 2, color: "#505050" }}>{'Rs. ' + item.mrp}</Text>
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
}

export default connect(mapStateToProps, mapActionToProps)(withTheme(ProductItem))