import React from 'react'
import propTypes from 'prop-types'
import { View, ActivityIndicator, ScrollView } from 'react-native'
import { Text, withTheme } from 'react-native-elements'
import { connect } from 'react-redux'
import { getAllProductBrands } from '../redux/actions/dataActions'
import TitleBar from '../components/TitleBar'
import PageTitle from '../components/PageTitle'
import BrandListing from '../components/BrandListing'

class BrandsScreen extends React.Component {

  componentDidMount(){
    this.props.getAllProductBrands()
  }

  render() {
    const { data: { brandsList, loading }, theme } = this.props

    return (
      <View style={{flex: 1, backgroundColor: "white"}}>
        <TitleBar/>
        <PageTitle title="Shop By Brands" />
        { loading ? 
          <ActivityIndicator size={30} color={theme.colors.primary} style={{paddingTop: 100}}/>
          :
          <ScrollView>
            { brandsList.map( ( item ) => <BrandListing item = { item } key={item.id} /> ) }
           </ScrollView> }
      </View>
    );
  }
}

BrandsScreen.propTypes = {
  data: propTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  data: state.data
})

const mapActionToProps = {
  getAllProductBrands,
}

export default connect(mapStateToProps, mapActionToProps)(withTheme(BrandsScreen))