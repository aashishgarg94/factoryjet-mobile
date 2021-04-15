import React from 'react'
import propTypes from 'prop-types'
import { View, ActivityIndicator, ImageBackground, Dimensions, ScrollView } from 'react-native'
import { Text, Image, withTheme, Button } from 'react-native-elements'
import { connect } from 'react-redux'

import TitleBar from '../components/TitleBar'
import CategoryItem from '../components/CategoryItem'
import ProductItem from '../components/ProductItem'
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler'
import { getHomepageProducts, getAllProductCategories } from '../redux/actions/dataActions'

class HomeScreen extends React.Component {
  componentDidMount() {
    this.props.getHomepageProducts()
    this.props.getAllProductCategories()
  }
  render() {
    const { data: { categoriesList, itemsHomePageList }, theme } = this.props
    const screenWidth = Dimensions.get('window').width

    const sectionMarkup = (sectionTitle, sectionData, sectionType) => (
      <View style={{ marginBottom: 10 }}>
        <Text h3 style={{ paddingHorizontal: 15 }}>{sectionTitle}</Text>
        { sectionType === "categories" ?
          <View style={{ flexDirection: "row", marginVertical: 10 }}>
            <View style={{ flex: 0.05 }}></View>
            <View style={{ flex: 0.9, flexWrap: "wrap", flexDirection: "row" }}>
              {sectionData.map((item) => <CategoryItem item={item} key={item.id} width={screenWidth * 9 / 20 - 30} margin={15} textSize={15} />)}
            </View>
            <View style={{ flex: 0.05 }}></View>
          </View>
          : <View style={{ marginVertical: 10 }}>
          <View style={{ flexWrap: "wrap", flexDirection: "row" }}>
              {sectionData.map((item) => <ProductItem item={item} key={item.id} />)}
          </View>
          <TouchableOpacity onPress={() => {
            sectionType === "arrivals" ? this.props.navigation.navigate('New Arrivals')
            : sectionType === "bestsellers" ? this.props.navigation.navigate('Bestsellers')
            : sectionType === "offers" ? this.props.navigation.navigate('Value Offers')
            : null
          }}>
          <View style={{paddingHorizontal: 10}}>
          <Text style={{textAlign: "right", color: theme.colors.primary}}>{'See more -->'}</Text>
          </View>
          </TouchableOpacity>
          </View>
        }
            </View>
    )
    return (
      <View style={{ flex: 1, backgroundColor: "white" }}>
        <TitleBar />
        <ScrollView>
          <View style={{ paddingHorizontal: 10, paddingTop: 10, paddingBottom: 20 }}>
            <ImageBackground
              source={require('../images/plumbing.jpg')}
              resizeMode="stretch"
              resizeMethod="resize"
              style={{ width: "100%", height: 200 }}
              PlaceholderContent={<ActivityIndicator />}
            >
              <View style={{ position: "absolute", bottom: 0, left: 0, right: 0, backgroundColor: theme.colors.primary, opacity: 0.7 }}>
                <Text style={{ textAlign: "center", fontSize: 15, paddingVertical: 5, color: "white", fontWeight: "normal" }}>Highlighted Category</Text>
              </View>
            </ImageBackground>
          </View>
          {itemsHomePageList.new_arrivals?.products_list ? sectionMarkup("New Arrivals", itemsHomePageList.new_arrivals.products_list, "arrivals") : null}
          {itemsHomePageList.bestsellers?.products_list ? sectionMarkup("Bestsellers", itemsHomePageList.bestsellers.products_list, "bestsellers") : null}
          {itemsHomePageList.value_offers?.products_list ? sectionMarkup("Great Deals", itemsHomePageList.value_offers.products_list, "offers") : null}
          {sectionMarkup("Shop By Category", categoriesList, "categories")}
        </ScrollView>
      </View>
    );
  }
}

HomeScreen.propTypes = {
  data: propTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  data: state.data
})

const mapActionToProps = {
  getHomepageProducts,
  getAllProductCategories
}

export default connect(mapStateToProps, mapActionToProps)(withTheme(function(props) {
  const navigation = useNavigation();

  return <HomeScreen {...props} navigation={navigation} />;
}))