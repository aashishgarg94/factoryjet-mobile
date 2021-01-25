import React from 'react'
import propTypes from 'prop-types'
import { View, ScrollView, Dimensions } from 'react-native'
import { Text, withTheme } from 'react-native-elements'
import { connect } from 'react-redux'
import TitleBar from '../components/TitleBar'
import PageTitle from '../components/PageTitle'
import CategoryItem from '../components/CategoryItem'

class CategoryScreen extends React.Component {
  render() {
    const { data: { categoriesList}, theme } = this.props
    const screenWidth = Dimensions.get('window').width

    return (
      <View style={{flex: 1, backgroundColor: "white"}}>
        <TitleBar/>
        <PageTitle title="Shop By Category" />
        <ScrollView>
          <View style={{flexWrap: "wrap", flexDirection: "row", marginVertical: 0, paddingHorizontal: 5}}>
          { categoriesList.map( ( item ) => <CategoryItem item = { item } key={item.id} width={screenWidth/2 - 30} margin={10} /> ) }
          </View>
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
}

export default connect(mapStateToProps, mapActionToProps)(withTheme(CategoryScreen))