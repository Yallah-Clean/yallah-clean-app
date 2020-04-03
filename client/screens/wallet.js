import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Card from '../shared/card'
import FlatButton from '../shared/button'
import { globalStyles } from '../styles/global'

const Wallet = () => {
    return (
     <View style={globalStyles.container}>
            <Card>
<Text>Current Token in wallet : 50</Text>
<Text>Total Token in wallet : 150</Text>
<FlatButton text="Redeem"/>

        </Card>
     </View>
    )
}

export default Wallet

const styles = StyleSheet.create({})
