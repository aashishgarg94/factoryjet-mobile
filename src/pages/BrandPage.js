import React from 'react'
import propTypes from 'prop-types'
import { View, ActivityIndicator, ScrollView } from 'react-native'
import { Text, withTheme } from 'react-native-elements'
import { connect } from 'react-redux'
import TitleBar from '../components/TitleBar'
import ProductItem from '../components/ProductItem'
import PageTitle from '../components/PageTitle'
import { getAllBrandProducts } from '../redux/actions/dataActions'

class BrandPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      brand_name: "Brand"
    }
  }
  componentDidMount() {
    this.setState({
      brand_name: this.props.route.params.brand.toString()
    }, this.props.getAllBrandProducts(this.props.route.params.brand.toString()))
  }

  render() {
    const { data: { itemsList, loading }, theme } = this.props

    return (
      <View style={{flex: 1, backgroundColor: "white"}}>
        <TitleBar/>
        <PageTitle title={this.state.brand_name} />
        { loading ? 
          <ActivityIndicator size={30} color={theme.colors.primary} style={{paddingTop: 100}}/>
          :
          <ScrollView>
            <View style={{flexWrap: "wrap", flexDirection: "row", marginVertical: 0, paddingHorizontal: 5}}>
            { itemsList.map( ( item ) => <ProductItem item = { item } key={item.id} /> ) }
            </View>
          </ScrollView> }
      </View>
    );
  }
}

BrandPage.propTypes = {
  data: propTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  data: state.data
})

const mapActionToProps = {
  getAllBrandProducts
}

export default connect(mapStateToProps, mapActionToProps)(withTheme(BrandPage))