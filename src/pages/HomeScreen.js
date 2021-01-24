import React from 'react'
import propTypes from 'prop-types'
import { View } from 'react-native'
import { Text } from 'react-native-elements'
import { connect } from 'react-redux'
import TitleBar from '../components/TitleBar'

class HomeScreen extends React.Component {
  constructor(props){
    super(props)
    this.state = {
    }
  }
  componentDidMount() {
  }
  render() {
    return (
      <View>
        <TitleBar/>
          <Text>Home Screen</Text>
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

export default connect(mapStateToProps, mapActionToProps)(HomeScreen)