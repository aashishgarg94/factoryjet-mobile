import React from 'react'
import propTypes from 'prop-types'
import { View, ActivityIndicator, ScrollView } from 'react-native'
import { Text, withTheme, Button } from 'react-native-elements'
import { connect } from 'react-redux'
import TitleBar from '../components/TitleBar'
import ProductItem from '../components/ProductItem'
import PageTitle from '../components/PageTitle'
import { getValueOfferProducts } from '../redux/actions/dataActions'

class OffersScreen extends React.Component {
  componentDidMount() {
    this.props.getValueOfferProducts()
  }
  render() {
    const { data: { itemsList, loading }, theme } = this.props

    return (
      <View style={{flex: 1, backgroundColor: "white"}}>
        <TitleBar/>
        <PageTitle title="Value Offers" />
        { loading ? 
          <ActivityIndicator size={30} color={theme.colors.primary} style={{paddingTop: 100}}/>
          :
          <ScrollView>
            <View style={{flexWrap: "wrap", flexDirection: "row", marginVertical: 0, paddingHorizontal: 5}}>
            { itemsList.map( ( item ) => <ProductItem item = { item } key={item.id} /> ) }
            { itemsList.length === 0 ? 
              <View style={{flex: 1, marginVertical: 150, flexDirection: "row", justifyContent: "center", alignItems: "center"}}>
                <Text style={{textAlign: "center"}}>Great Offers Coming Soon!</Text>
              </View> : null}
            </View>
          </ScrollView> }
      </View>
    );
  }
}

OffersScreen.propTypes = {
  data: propTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  data: state.data
})

const mapActionToProps = {
  getValueOfferProducts
}

export default connect(mapStateToProps, mapActionToProps)(withTheme(OffersScreen))