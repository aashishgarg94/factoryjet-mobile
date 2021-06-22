import React from 'react'
import propTypes from 'prop-types'
import { View, ActivityIndicator, TouchableOpacity } from 'react-native'
import { Text, withTheme, Image, Divider } from 'react-native-elements'
import { connect } from 'react-redux'
import { setPrimaryAddress } from '../redux/actions/dataActions'

class AddressItem extends React.Component {
  render() {
    const { item, theme } = this.props

    return (
      <View style={{ marginVertical: 10, marginHorizontal: 20, backgroundColor: "white", paddingHorizontal: 20, paddingVertical: 10, borderWidth: 1, borderColor: "grey", borderRadius: 2, shadowOffset: 2, shadowRadius: 10 }}>
        {item.is_primary ? <Text style={{ fontWeight: "normal", color: theme.colors.primary, fontSize: 15 }}>Primary Address</Text> :
          <TouchableOpacity onPress={() => this.props.setPrimaryAddress({ addrss_id: item.id })}>
            <Text style={{ fontWeight: "normal", color: theme.colors.primary, fontSize: 15 }}>Set as primary address</Text>
          </TouchableOpacity>}
        <Text style={{ marginTop: 10, fontSize: 12 }}><Text style={{ fontWeight: "normal", fontSize: 12 }}>Line 1:   </Text>{item.address_line_1}</Text>
        {item.address_line_2 ? <Text style={{ marginTop: 2, fontSize: 12 }}><Text style={{ fontWeight: "normal", fontSize: 12 }}>Line 2:   </Text>{item.address_line_2}</Text> : null}
        <Text style={{ marginTop: 2, fontSize: 12 }}><Text style={{ fontWeight: "normal", fontSize: 12 }}>City:       </Text>{item.city}</Text>
        <Text style={{ marginTop: 2, fontSize: 12 }}><Text style={{ fontWeight: "normal", fontSize: 12 }}>State:     </Text>{item.state}</Text>
        <Text style={{ marginTop: 10, marginBottom: 5, fontSize: 12 }}><Text style={{ fontWeight: "normal", fontSize: 12 }}>Pincode:   </Text>{item.pincode}</Text>
      </View>
    );
  }
}

AddressItem.propTypes = {
  item: propTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
})

const mapActionToProps = {
  setPrimaryAddress
}

export default connect(mapStateToProps, mapActionToProps)(withTheme(AddressItem))