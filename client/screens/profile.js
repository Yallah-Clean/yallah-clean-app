import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  TextInput,
  View,
  Image,
} from 'react-native';
import {
  Container,
  Button,
  Content,Badge,
  Card,
  CardItem,
  Text,Body,
  Thumbnail,
} from 'native-base';
import {globalStyles} from '../styles/global';
import Wallet from './wallet';
const Profile = () => {
  return (
    <Container style={globalStyles.container}>
      <Content>
        <Card style={styles.card}>
          <Thumbnail
            source={require('../assets/images/profile.jpeg')}
            style={styles.imageFrame}
          />
              <Body style={styles.body}>
          <Text> Mohaned </Text>
          <Badge style={styles.badgeProfile}>
            <Text>COLLECTOR</Text>
          </Badge>
          <CardItem style={globalStyles.sectionDescription}>
            <Text> You have in your wallet </Text>
          </CardItem>
          <CardItem style={globalStyles.sectionDescription}>
      
              
            <Text>
              {' '}
              <Text style={styles.badgeBalance}> 200 $</Text> <Text> =</Text>{' '}
              <Text style={styles.tx}> 200 points </Text>{' '}
            </Text>
        
          </CardItem>
          <CardItem style={globalStyles.sectionContainer}>
            <Button small rounded block success style={styles.btn}>
              <Text> REDEEM </Text>
            </Button>
          </CardItem>
          </Body>
        </Card>
      </Content>
      {/* <View style={globalStyles.container}>
    <Thumbnail source={url} style={styles.imageFrame}></Thumbnail>

      </View>  */}
    </Container>
    // <React.Fragment>
    //   <View style={styles.box} />

    //   <View style={globalStyles.container}>
    //     <Image
    //       source={require('../assets/images/profile.jpeg')}
    //       style={styles.imageFrame}
    //     />
    //     <SafeAreaView>
    //       <ScrollView
    //         contentInsetAdjustmentBehavior="automatic"
    //         style={styles.scrollView}>
    //         <Wallet />
    //       </ScrollView>
    //     </SafeAreaView>

    //     {/* <Wallet /> */}
    //     <View />
    //   </View>
    // </React.Fragment>
  );
};

export default Profile;

const styles = StyleSheet.create({
  tx: {
    flex: 1,
    borderRadius: 33,
    height: 35,
    width: 276,
    borderColor: '#2ACF3B',
    top: 15,
    color: '#2ACF3B',
    borderWidth: 1,
    flexDirection: 'column',
    alignContent: 'center',
  },
  badgeProfile: {backgroundColor: 'rgba(139, 139, 139, 0.75)', color: 'white', alignSelf:'center'},
  badgeBalance: {backgroundColor: 'rgba(139, 139, 139, 0.75)', color: 'white'},
  card: {
   // flex: 1,
    height: 700,
   },
  body: {
    marginTop:5,
    textDecorationColor: 'rgba(139, 139, 139, 0.75)',
  },
  btn: {
    padding: 5,
    color: 'white',
    borderRadius: 25,
    // left: '30%',
    backgroundColor: '#2ACF3B',
    top: 15,

    flexDirection: 'row',
    alignItems: 'center',
  },
  imageFrame: {
    width: 150,
    height: 200,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
});
