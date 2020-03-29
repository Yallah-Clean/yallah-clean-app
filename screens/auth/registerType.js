import React from 'react'
import { StyleSheet, Text,TouchableOpacity, View } from 'react-native'
import Thumbnail from '../../shared/thumbnail'
import { globalStyles } from '../../styles/global'

const RegisterType = ({navigation}) => {
    const collectorImage = require('../../assets/images/collector.jpg');
    const residnetImage = require('../../assets/images/residnet.jpg');
    const navigate=(value)=>{
        if(value==1){
            navigation.navigate("ResidnetRegister")
        }else if (value==2){
            navigation.navigate("CollectorRegister")
        }

    }
    return (
        <View style={globalStyles.container}>
            <TouchableOpacity onPress={()=>navigate(1)} style={globalStyles.container}>
            <Thumbnail source={residnetImage} ></Thumbnail>

            </TouchableOpacity>
            <TouchableOpacity onPress={()=>navigate(2)} style={globalStyles.container}>
            <Thumbnail source={collectorImage} ></Thumbnail>

            </TouchableOpacity>

        
    </View>
    )
}

export default RegisterType

const styles = StyleSheet.create({
  
})
