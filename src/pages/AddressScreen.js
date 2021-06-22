import React from 'react'
import propTypes from 'prop-types'
import { View, TouchableOpacity, ActivityIndicator, ScrollView } from 'react-native'
import { Text, withTheme, Divider, Button, Overlay, Input } from 'react-native-elements'
import { connect } from 'react-redux'

import TitleBar from '../components/TitleBar'
import PageTitle from '../components/PageTitle'
import AddressItem from '../components/AddressItem'

import { getAllAddresses, createAddress } from '../redux/actions/dataActions'

class AddressScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isNewAddressOverlayVisible: false,
      address_line_1: '',
      address_line_2: '',
      city: '',
      state: '',
      pincode: ''
    }
  }

  componentDidMount() {
    this.props.getAllAddresses()
  } 

  handleAddressSubmit = () => {
    this.props.createAddress({
      address_line_1: this.state.address_line_1,
      address_line_2: this.state.address_line_2,
      city: this.state.city,
      state: this.state.state,
      pincode: this.state.pincode,
    })
    this.setState({ isNewAddressOverlayVisible: false })
}

  render() {
    const { theme, data: { addressList, loading } } = this.props

    return (
      <>
        <Overlay
          isVisible={this.state.isNewAddressOverlayVisible}
          overlayStyle={{width: "80%"}}
          onBackdropPress={() => {
            this.setState({ address_line_1: '', isNewAddressOverlayVisible: false });
          }}
        >
          <View>
            <Text style={{ fontWeight: "bold", marginVertical: 20, marginHorizontal: 20 }}>Address Details</Text>
          <Input
            placeholder="Address Line 1"
            inputStyle={{ fontSize: 15, paddingLeft: 20 }}
            style={{ borderBottomWidth: 1, marginHorizontal: 10, borderRadius: 20, borderColor: "grey" }}
            containerStyle={{ borderColor: "white" }}
            inputContainerStyle={{ borderColor: "white", paddingVertical: 2 }}
            onChangeText={value => this.setState({ address_line_1: value })}
          />
                    <Input
            placeholder="Address Line 2"
            inputStyle={{ fontSize: 15, paddingLeft: 20 }}
            style={{ borderBottomWidth: 1, marginHorizontal: 10, borderRadius: 20, borderColor: "grey" }}
            containerStyle={{ borderColor: "white", marginTop: -10 }}
            inputContainerStyle={{ borderColor: "white", paddingVertical: 2 }}
            onChangeText={value => this.setState({ address_line_2: value })}
          />
                    <Input
            placeholder="City"
            inputStyle={{ fontSize: 15, paddingLeft: 20 }}
            style={{ borderBottomWidth: 1, marginHorizontal: 10, borderRadius: 20, borderColor: "grey" }}
            containerStyle={{ borderColor: "white", marginTop: -10 }}
            inputContainerStyle={{ borderColor: "white", paddingVertical: 2 }}
            onChangeText={value => this.setState({ city: value })}
          />
                    <Input
            placeholder="State"
            inputStyle={{ fontSize: 15, paddingLeft: 20 }}
            style={{ borderBottomWidth: 1, marginHorizontal: 10, borderRadius: 20, borderColor: "grey" }}
            containerStyle={{ borderColor: "white", marginTop: -10 }}
            inputContainerStyle={{ borderColor: "white", paddingVertical: 2 }}
            onChangeText={value => this.setState({ state: value })}
          />
                    <Input
            placeholder="Pincode"
            inputStyle={{ fontSize: 15, paddingLeft: 20 }}
            style={{ borderBottomWidth: 1, marginHorizontal: 10, borderRadius: 20, borderColor: "grey" }}
            containerStyle={{ borderColor: "white", marginTop: -10 }}
            inputContainerStyle={{ borderColor: "white", paddingVertical: 2 }}
            onChangeText={value => this.setState({ pincode: value })}
          />
          <Button buttonStyle={{ borderRadius: 10, marginHorizontal: 40, marginVertical: 20, paddingVertical: 10, backgroundColor: "black", borderWidth: 1 }} title="Submit"
            titleStyle={{ color: "white", fontSize: 15, fontWeight: "normal" }}
            onPress={this.handleAddressSubmit}
          />
          </View>
        </Overlay>
        <View style={{ flex: 1, backgroundColor: "white" }}>
          <TitleBar />
          {loading ?
            <ActivityIndicator size={30} color={theme.colors.primary} style={{ paddingTop: 100 }} />
            :
            <>
              <PageTitle title="Deliver To Address:" />
              <ScrollView>
                {addressList.map((item) => item.is_primary ? <AddressItem item={item} key={item?.id} /> : null)}
                {addressList.map((item) => item.is_primary ? null : <AddressItem item={item} key={item?.id} />)}
                <TouchableOpacity onPress={() => this.setState({ isNewAddressOverlayVisible: true })}>
                  <Text style={{marginVertical: 10, marginHorizontal: 20, fontWeight: "normal", color: theme.colors.primary}}>Add new address</Text>
                </TouchableOpacity>
              </ScrollView>
              <View style={{ flexDirection: "row", justifyContent: "center", marginTop: 10, margin: 2 }}>
                <Button buttonStyle={{ borderRadius: 0, color: theme.colors.primary, backgroundColor: theme.colors.primary_light, borderWidth: 1 }}
                  containerStyle={{ flex: 1 }} titleStyle={{}} title="PROCEED TO PAYMENT" />
              </View>
            </>
          }
        </View>
      </>
    );
  }
}

AddressScreen.propTypes = {
  data: propTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  data: state.data
})

const mapActionToProps = {
  getAllAddresses,
  createAddress
}

export default connect(mapStateToProps, mapActionToProps)(withTheme(AddressScreen))