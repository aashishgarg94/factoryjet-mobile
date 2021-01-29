import React from 'react'
import propTypes from 'prop-types'
import { View } from 'react-native'
import { Text, withTheme } from 'react-native-elements'
import { connect } from 'react-redux'

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { useNavigation } from '@react-navigation/native';

class TitleBar extends React.Component {

  componentDidMount() { }

  render() {
    const { theme } = this.props

    return (
      <View style={{ backgroundColor: theme.colors.primary_light, marginBottom: 0, flexDirection: "row", justifyContent: "space-between", paddingHorizontal: 10 }}>
        <View style={{justifyContent: "center"}} 
          onStartShouldSetResponder={
            () => this.props.navigation.openDrawer()
          }>
          <FontAwesomeIcon icon={faBars} size={20} color="white"/>
        </View>
        <Text style={{ color: theme.colors.primary, paddingVertical: 10, fontSize: 20, color: "white", textAlign: "center", fontWeight: "normal", paddingLeft: 20 }}>FactoryJet</Text>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <View style={{ paddingHorizontal: 10 }}
            onStartShouldSetResponder={
              () => this.props.navigation.navigate('My Cart')
          }>
            <FontAwesomeIcon icon={faHeart} size={20} color="white" />
          </View>
          <View style={{paddingHorizontal: 0 }}
            onStartShouldSetResponder={
              () => this.props.navigation.navigate('My Cart')
          }>
            <FontAwesomeIcon icon={faShoppingCart} size={20} color="white" />
          </View>
        </View>
      </View>
    );
  }
}

TitleBar.propTypes = {
}

const mapStateToProps = (state) => ({
})

const mapActionToProps = {
}

export default connect(mapStateToProps, mapActionToProps)(withTheme(function(props) {
  const navigation = useNavigation();

  return <TitleBar {...props} navigation={navigation} />;
}))