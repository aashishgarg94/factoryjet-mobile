import React from 'react'
import propTypes from 'prop-types'
import { View, TouchableOpacity } from 'react-native'
import { Text, Divider, withTheme, Image } from 'react-native-elements'
import { connect } from 'react-redux'
import { useNavigation } from '@react-navigation/native';

class BrandListing extends React.Component {
    render() {
        const { item, theme } = this.props

        return (
            <TouchableOpacity onPress={() => {
                this.props.navigation.navigate('BrandPage',
                { brand: item.title } )
            }}>
            <View style={{flexDirection: "row", paddingHorizontal: 10, marginVertical: 10}}>
          <Image
            style={{height: 100, width: 100}}
            resizeMode="cover"
            source={require('../images/hoodie.jpeg')}
          />
          <View style={{flex: 1, paddingHorizontal: 20, paddingVertical: 10, justifyContent: "space-between"}}>
          <Text style={{fontWeight: "bold"}}>{item.title}</Text>
        <Text style={{fontSize: 12}}>{"See Products"}</Text>
          <Divider style={{borderColor: "#C6C6C6", borderWidth: 1}}/>
          </View>
        </View>
            </TouchableOpacity>
        );
    }
}

BrandListing.propTypes = {
    item: propTypes.object.isRequired
}

const mapStateToProps = (state) => ({
})

const mapActionToProps = {
}

export default connect(mapStateToProps, mapActionToProps)(withTheme(function(props) {
    const navigation = useNavigation();
  
    return <BrandListing {...props} navigation={navigation} />;
  }))