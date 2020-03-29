import React from 'react'
import { StyleSheet,  Button, View } from 'react-native'
import Card from '../../shared/card'
import Thumbnail from '../../shared/thumbnail'
import HyperLink from '../../shared/hyperlink'
import { globalStyles } from '../../styles/global'
import ResidentRegisterForm from '../../components/residentRegisterForm'
const ResidnetRegister = ({navigation}) => {
    const Url = require('../../assets/images/logo2.jpg');

    const handleRegister = async(value) => {
/**
 *    userWallet = new WalletService();
    web3Service = new Web3Service();
 *         // create addresss
        //  await this.createAccount(this.state.password);
        // save to blockchain
        //   const address = await this.web3Service.createAccount(this.state.password);
        const address = await this.web3Service.getAccountByIndex(2);
        this.setState({ ethAddress: address })
        //   this.setState({ethAddress:address.address,privateKey:address.privateKey})
        //   const factory = new UserFactoryService(address.privateKey);
        const factory = new UserFactoryService();
        console.log(factory, 'factory');


        const tx = await factory.addResident(this.state.ethAddress, this.state.ethAddress, 2000000000, factoryAddress);
        //   console.log(tx,'tx');

        // const tx=  await factory. addResidentSigned(this.state.ethAddress, this.state.ethAddress, this.state.privateKey, 2000000000,factoryAddress)
        console.log(tx, 'tx');
        if (tx) {
            // save to off chain storage
            // const wallet = await factory.getResident(this.state.ethAddress,factoryAddress);
            this.setState({ walletAddress: tx.address });
            const storage = new LocalStorageService();
            await storage.setUser(this.state);
            console.log(this.state);
            console.log(this.props, 'props');


            //Api.registerRes(this.state)
        }
 */
          
          
    };
    return (
     <View style={globalStyles.container}>
         <Thumbnail source={Url} ></Thumbnail>
        <Card >
                {/* <Image source={Url}  /> */}

            <ResidentRegisterForm  register={handleRegister}/>
      
            <HyperLink goToURL={()=>navigation.navigate("Auth")} title ={"Login?"} style={styles.hyperLink}>
            </HyperLink>  

        </Card>
         
     </View>
    )
}

export default ResidnetRegister

const styles = StyleSheet.create({
    hyperLink:{
        // left:55,
    }
})
