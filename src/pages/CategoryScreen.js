import React from 'react'
import propTypes from 'prop-types'
import { View, ScrollView, Dimensions } from 'react-native'
import { Text, withTheme } from 'react-native-elements'
import { connect } from 'react-redux'
import { getAllProductCategories } from '../redux/actions/dataActions'
import TitleBar from '../components/TitleBar'
import PageTitle from '../components/PageTitle'
import CategoryListing from '../components/CategoryListing'

class CategoryScreen extends React.Component {

  componentDidMount(){
    console.log("check")
    this.props.getAllProductCategories()
  }

  render() {
    const { data: { categoriesList}, theme } = this.props
    const screenWidth = Dimensions.get('window').width

    return (
      <View style={{flex: 1, backgroundColor: "white"}}>
        <TitleBar/>
        <PageTitle title="Shop By Category" />
        <ScrollView>
          { categoriesList.map( ( item ) => <CategoryListing item = { item } key={item.id} /> ) }
          </ScrollView>
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
  getAllProductCategories
}

export default connect(mapStateToProps, mapActionToProps)(withTheme(CategoryScreen))