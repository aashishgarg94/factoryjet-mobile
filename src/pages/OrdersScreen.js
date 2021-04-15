import React from 'react'
import propTypes from 'prop-types'
import { View, ActivityIndicator, ScrollView } from 'react-native'
import { Text, withTheme, Divider } from 'react-native-elements'
import { connect } from 'react-redux'
import TitleBar from '../components/TitleBar'
import OrderItem from '../components/OrderItem'
import PageTitle from '../components/PageTitle'

class OrdersScreen extends React.Component {
  
  render() {
    const { data: { ordersList }, theme } = this.props

    return (
      <View style={{flex: 1, backgroundColor: "white"}}>
        <TitleBar/>
        <PageTitle title="Previous Orders"/>
          <ScrollView>
          { ordersList.map( ( item ) => <OrderItem item = { item } key={item.id} /> ) }
          </ScrollView>
      </View>
    );
  }
}

OrdersScreen.propTypes = {
  data: propTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  data: state.data
})

const mapActionToProps = {
}

export default connect(mapStateToProps, mapActionToProps)(withTheme(OrdersScreen))