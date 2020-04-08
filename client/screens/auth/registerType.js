import React from 'react'
import { StyleSheet} from 'react-native'
import { Container, Tab, Tabs } from 'native-base';
import CollectorRegister from './collectorRegister';
import ResidnetRegister from './residnetRegister';

const RegisterType = ({navigation}) => {
    return (
        <Container >
        <Tabs >
          <Tab heading="AS A RESEDENT "  activeTextStyle={styles.activeTextStyle} textStyle={styles.textStyle} tabStyle={styles.tabStyle} activeTabStyle={styles.activeTabStyle}>
              <ResidnetRegister/>
          </Tab>
          <Tab heading="AS A COLLECTOR" activeTextStyle={styles.activeTextStyle} textStyle={styles.textStyle} tabStyle={styles.tabStyle} activeTabStyle={styles.activeTabStyle}>
          <CollectorRegister/>

          </Tab>
         
        </Tabs>
      </Container>
 
    )
}

export default RegisterType

const styles = StyleSheet.create({
    tabStyle: { backgroundColor: '#FFFFFF',},
    textStyle:
    { color: '#2ACF3B', fontSize: 14 ,lineHeight:16,
     textAlign:'center',fontFamily:'Roboto', fontWeight:'normal',
    fontStyle:'normal'},
    activeTabStyle:
    { backgroundColor: '#2ACF3B' },
    activeTextStyle:
    { color: '#FFFFFF', fontWeight: 'bold',fontSize: 14 },

 
})
