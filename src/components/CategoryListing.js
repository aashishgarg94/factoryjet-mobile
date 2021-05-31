import React from 'react'
import propTypes from 'prop-types'
import { View, ActivityIndicator, ImageBackground, TouchableOpacity } from 'react-native'
import { Text, Divider, withTheme, Image } from 'react-native-elements'
import { connect } from 'react-redux'
import { useNavigation } from '@react-navigation/native';
import { getProductSubCategories } from '../redux/actions/dataActions'

class CategoryListing extends React.Component {
    render() {
        const { item, theme } = this.props

        return (
            <TouchableOpacity onPress={() => {
                item.has_subcategories === "True" ?
                this.props.getProductSubCategories(item.id)
                :
                this.props.navigation.navigate('CategoryPage',
                { category: item.title, categoryId: item.id } )
            }}>
            <View style={{flexDirection: "row", paddingHorizontal: 10, marginVertical: 10}}>
          <Image
            style={{height: 100, width: 100}}
            resizeMode="cover"
            source={{uri: 'https://factoryjet-category-images.s3.ap-south-1.amazonaws.com/'+item.title+'.png'}}
          />
          <View style={{flex: 1, paddingHorizontal: 20, paddingVertical: 10, justifyContent: "space-between"}}>
          <Text style={{fontWeight: "bold"}}>{item.title}</Text>
        <Text style={{fontSize: 12}}>{item.has_subcategories === "True" ? "See Sub-Categories" : "See Products"}</Text>
          <Divider style={{borderColor: "#C6C6C6", borderWidth: 1}}/>
          </View>
        </View>
            </TouchableOpacity>
        );
    }
}

CategoryListing.propTypes = {
    item: propTypes.object.isRequired
}

const mapStateToProps = (state) => ({
})

const mapActionToProps = {
    getProductSubCategories
}

export default connect(mapStateToProps, mapActionToProps)(withTheme(function(props) {
    const navigation = useNavigation();
  
    return <CategoryListing {...props} navigation={navigation} />;
  }))