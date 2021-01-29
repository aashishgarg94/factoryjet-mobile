import React from 'react'
import propTypes from 'prop-types'
import { View, ActivityIndicator, ImageBackground, Dimensions, ScrollView } from 'react-native'
import { Text, Image, withTheme, Button } from 'react-native-elements'
import { connect } from 'react-redux'

import TitleBar from '../components/TitleBar'
import CategoryItem from '../components/CategoryItem'
import ProductItem from '../components/ProductItem'
import { useNavigation } from '@react-navigation/native';

class HomeScreen extends React.Component {
  render() {
    const { data: { categoriesList, itemsHomePageList }, theme } = this.props
    const screenWidth = Dimensions.get('window').width

    const sectionMarkup = (sectionTitle, sectionData, sectionType) => (
      <View style={{ marginBottom: 10 }}>
        <Text style={{ color: theme.colors.primary, fontWeight: "bold", paddingHorizontal: 15, fontSize: 15 }}>{sectionTitle}</Text>
        { sectionType === "categories" ?
          <View style={{ flexDirection: "row", marginVertical: 10 }}>
            <View style={{ flex: 0.125 }}></View>
            <View style={{ flex: 0.75, flexWrap: "wrap", flexDirection: "row" }}>
              {sectionData.map((item) => <CategoryItem item={item} key={item.id} width={screenWidth / 4 - 15} margin={5} textSize={10} />)}
            </View>
            <View style={{ flex: 0.125 }}></View>
          </View>
          : <View style={{ marginVertical: 10 }}>
          <View style={{ flexWrap: "wrap", flexDirection: "row" }}>
              {sectionData.map((item) => <ProductItem item={item} key={item.id} />)}
          </View>
          <View style={{paddingHorizontal: 10}}
            onStartShouldSetResponder={
              () => { 
                sectionType === "arrivals" ? this.props.navigation.navigate('New Arrivals')
                : sectionType === "bestsellers" ? this.props.navigation.navigate('Bestsellers')
                : sectionType === "offers" ? this.props.navigation.navigate('Value Offers')
                : null }
          }>
          <Text style={{textAlign: "right", color: theme.colors.primary}}>{'See more -->'}</Text>
          </View>
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
          {sectionMarkup("Shop By Category", categoriesList, "categories")}
          {sectionMarkup("New Arrivals", itemsHomePageList, "arrivals")}
          {sectionMarkup("Bestsellers", itemsHomePageList, "bestsellers")}
          {sectionMarkup("Great Deals", itemsHomePageList, "offers")}
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
}

export default connect(mapStateToProps, mapActionToProps)(withTheme(function(props) {
  const navigation = useNavigation();

  return <HomeScreen {...props} navigation={navigation} />;
}))