import React from 'react'
import propTypes from 'prop-types'
import { View, ScrollView } from 'react-native'
import { Text, withTheme } from 'react-native-elements'
import { connect } from 'react-redux'
import TitleBar from '../components/TitleBar'
import ProductItem from '../components/ProductItem'
import PageTitle from '../components/PageTitle'

class CategoryPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      category: "Category"
    }
  }
  componentDidMount() {
    this.setState({
      category: this.props.route.params.categoryId.toString()
    })
  }

  render() {
    const { data: { itemsList}, theme } = this.props

    return (
      <View style={{flex: 1, backgroundColor: "white"}}>
        <TitleBar/>
        <PageTitle title={this.state.category} />
        <ScrollView>
          <View style={{flexWrap: "wrap", flexDirection: "row", marginVertical: 0, paddingHorizontal: 5}}>
          { itemsList.map( ( item ) => <ProductItem item = { item } key={item.id} /> ) }
          </View>
          </ScrollView>
      </View>
    );
  }
}

CategoryPage.propTypes = {
  data: propTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  data: state.data
})

const mapActionToProps = {
}

export default connect(mapStateToProps, mapActionToProps)(withTheme(CategoryPage))