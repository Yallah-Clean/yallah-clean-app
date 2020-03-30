import React from 'react'
import { StyleSheet, Text, View,Image } from 'react-native'
import Card from '../shared/card'
import { globalStyles } from '../styles/global'

const Profile = () => {
    return (
        <React.Fragment>
              <View style={styles.box}></View>

<View style={globalStyles.container}>
<Image source={require('../assets/images/profile.png')} style={styles.imageFrame} />

<View>

</View>
</View>

        </React.Fragment>
      
    )
}

export default Profile

const styles = StyleSheet.create({
    card:{
        height:125
    },
    box:{
    height:150,
    width:'100%',
    backgroundColor:'#A2BEAA'
    },
    imageFrame: {
        width: '50%',
         flex:1,
         flexDirection: 'row',
         height: '50%',
         left:'20%',
      top:'-30%',
      position:'absolute',
      alignItems:'center',
         resizeMode: 'contain',
     
          
       },
})
