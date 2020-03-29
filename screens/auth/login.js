import React from 'react'
import { StyleSheet,  Button, View } from 'react-native'
import LoginForm from '../../components/loginForm'
import Card from '../../shared/card'
import Thumbnail from '../../shared/thumbnail'
import HyperLink from '../../shared/hyperlink'
import { globalStyles } from '../../styles/global'
const Login = ({navigation}) => {
    const Url = require('../../assets/images/icon.png');

    const handleLogin = async(value) => {
        // const storage = new LocalStorageService();
        // let user = await storage.getUser()
   
        console.log(value,'value');
        console.log(navigation,'navigation');
        
        if (value.email == user.email && value.password == user.password) {
            //navigation.navigate("home")
           
            
          } else  if (username == "org@test.com" && password == "123") {
          
          //  navigation.navigate("home")

          }
          
          
    };
    return (
     <View style={globalStyles.container}>
         <Thumbnail source={Url} ></Thumbnail>
        <Card >
                {/* <Image source={Url}  /> */}

            <LoginForm  login={handleLogin}/>
      
            <HyperLink goToURL={()=>navigation.navigate("Type")} title ={"Register?"} style={styles.hyperLink}>
            </HyperLink>  

        </Card>
         
     </View>
    )
}

export default Login

const styles = StyleSheet.create({
    hyperLink:{
        // left:55,
    }
})
