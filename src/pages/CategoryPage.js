import React from 'react'
import propTypes from 'prop-types'
import { View } from 'react-native'
import { Text } from 'react-native-elements'
import { connect } from 'react-redux'
import TitleBar from '../components/TitleBar'

class CategoryPage extends React.Component {
  render() {
    return (
      <View>
        <TitleBar/>
          <Text>Category Page</Text>
      </View>
    );
  }
}

CategoryPage.propTypes = {
}

const mapStateToProps = (state) => ({
})

const mapActionToProps = {
}

export default connect(mapStateToProps, mapActionToProps)(CategoryPage)