import React from 'react'
import propTypes from 'prop-types'
import { View, ActivityIndicator, ImageBackground, TouchableOpacity } from 'react-native'
import { Text, withTheme, Image } from 'react-native-elements'
import { connect } from 'react-redux'
import { useNavigation } from '@react-navigation/native';

class CategoryItem extends React.Component {
    render() {
        const { item, width, theme, margin, textSize } = this.props

        return (
            <TouchableOpacity
            onPress={() => {
                item.has_subcategories === "True" ?
                this.props.navigation.navigate('Shop By Category', { screen: "CategoryScreen", params: { category_id: item.id } })
                :
                this.props.navigation.navigate('CategoryPage',
                { category: item.title, categoryId: item.id } )
            }}>
            <View style={{ width: width, borderRadius: 5, margin: margin,
                elevation: 5, shadowOffset: { width: 0, height: 1 }, shadowRadius: 2, shadowColor: "#000" }}>
                <ImageBackground
                    source={require('../images/electricals.jpeg')}
                    resizeMode="cover"
                    resizeMethod="resize"
                    style={{ width: width, height: width }}
                    PlaceholderContent={<ActivityIndicator />}
                >
                <View style={{ backgroundColor: "grey", position: "absolute", bottom: 0, left: 0, right: 0, 
                    alignItems: "center", borderBottomLeftRadius: 5, borderBottomRightRadius: 5, opacity: 0.9 }}>
            <Text style={{fontWeight: "normal", fontSize: textSize, paddingVertical: 5, color: "white", textAlign: "center" }}>{item.title}</Text>
                </View>
                </ImageBackground>
            </View>
            </TouchableOpacity>
        );
    }
}

CategoryItem.propTypes = {
    item: propTypes.object.isRequired,
    width: propTypes.number.isRequired,
    margin: propTypes.number.isRequired,
    textSize: propTypes.number.isRequired
}

const mapStateToProps = (state) => ({
})

const mapActionToProps = {
}

//export default connect(mapStateToProps, mapActionToProps)(withTheme(CategoryItem))

export default connect(mapStateToProps, mapActionToProps)(withTheme(function(props) {
    const navigation = useNavigation();
  
    return <CategoryItem {...props} navigation={navigation} />;
  }))