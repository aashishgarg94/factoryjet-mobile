import React from 'react'
import propTypes from 'prop-types'
import { View } from 'react-native'
import { Text, withTheme } from 'react-native-elements'
import { connect } from 'react-redux'

class PageTitle extends React.Component {

  componentDidMount() { }

  render() {
    const { theme } = this.props

    return (
      <View style={{ flexDirection: "row", justifyContent: "space-between", paddingHorizontal: 20, paddingTop: 0 }}>
        <Text style={{ color: theme.colors.primary, paddingVertical: 15, fontSize: 20, fontWeight: "normal" }}>{this.props.title}</Text>
      </View>
    );
  }
}

PageTitle.propTypes = {
  title: propTypes.string.isRequired
}

const mapStateToProps = (state) => ({
})

const mapActionToProps = {
}

export default connect(mapStateToProps, mapActionToProps)(withTheme(PageTitle))