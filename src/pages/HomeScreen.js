import React from 'react'
import propTypes from 'prop-types'
import { View } from 'react-native'
import { Text } from 'react-native-elements'
import { connect } from 'react-redux'

class HomeScreen extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      itemslist: []
    }
  }
  componentDidMount() {
    console.log("mounted")
    this.setState({ itemslist: this.props.data.itemsList})
  }
  render() {
    const { data: { itemsList } } = this.props
    console.log("check")
    console.log("itemsList", itemsList)
    console.log("itemslist", this.state.itemslist)

    return (
      <View>
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