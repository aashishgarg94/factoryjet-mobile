import React from 'react'
import propTypes from 'prop-types'
import { View, ScrollView, ActivityIndicator } from 'react-native'
import { Text, withTheme } from 'react-native-elements'
import { connect } from 'react-redux'
import { getAllProductCategories, getProductSubCategories } from '../redux/actions/dataActions'
import TitleBar from '../components/TitleBar'
import PageTitle from '../components/PageTitle'
import CategoryListing from '../components/CategoryListing'

class CategoryScreen extends React.Component {

  componentDidMount(){
    const categoryId = this.props.route?.params?.category_id
    if (categoryId) {
      this.props.getProductSubCategories(categoryId)
    }else{
      this.props.getAllProductCategories()
    }
  }

  render() {
    const { data: { categoriesList, loading }, theme } = this.props

    return (
      <View style={{flex: 1, backgroundColor: "white"}}>
        <TitleBar/>
          <PageTitle title="Shop By Category" />
          { loading ? 
            <ActivityIndicator size={30} color={theme.colors.primary} style={{paddingTop: 100}}/>
            :
          <ScrollView>
            { categoriesList.map( ( item ) => <CategoryListing item = { item } key={item.id} /> ) }
          </ScrollView> }
      </View> 
    );
  }
}

CategoryScreen.propTypes = {
  data: propTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  data: state.data
})

const mapActionToProps = {
  getAllProductCategories,
  getProductSubCategories
}

export default connect(mapStateToProps, mapActionToProps)(withTheme(CategoryScreen))