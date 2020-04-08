// import React, {useState} from 'react';
// import {
//   StyleSheet,
//   View,
//   Modal,FlatList,
//   TouchableWithoutFeedback,
//   Keyboard,
// } from 'react-native';
// import {
//   Icon,
//   Container,
//   Button,
//   Content,
//   Badge,
//   Card,
//   CardItem,
//   Text,
//   Body,
//   Thumbnail,
// } from 'native-base';
// import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

// import CollectionRequestForm from '../../components/collectionRequestForm';
// import {globalStyles} from '../../styles/global';
// import CollectionData from './collectionData';
// const FullfillCollection = ({navigation}) => {
//   const [modalOpen, setModalOpen] = useState(true);
//   const test = [{item:"0",wieght:"5"}]
//   const [items, setNewItem] = useState(test);
//   const addItem = item => {
//     console.log(item, 'item');

//     item.key = Math.random().toString();
//     setNewItem(items => {
//       return [item, ...items];
//     });
//   };
//   const submit = () => {
//     setModalOpen(false);
//     navigation.navigate('CollectorRequest');
//   };

//   return (
//     <KeyboardAwareScrollView>
//          <Container style={globalStyles.container}>
//       <Modal visible={modalOpen} animationType="slide">
//         <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
//           <Content>
//             <Card style={styles.card}>
            
//               <View style={styles.modalContent}>
             
//                 <CollectionRequestForm add={addItem} />
//                 <CollectionData items={items}/>
//               </View>
//               {/* <Body style={globalStyles.sectionContainer}>
//               <FlatList data={items} renderItem={({ item }) => (
//              <CardItem >
//   <Text>
//               {' '}
//               <Text style={styles.badgeBalance}> 200 $</Text> <Text> =</Text>{' '}
//               <Text style={styles.tx}> 200 points </Text>{' '}
//             </Text>
//           </CardItem>          
//        )} />

//               <CardItem >
//             <Button small rounded block success style={styles.btn}>
//               <Text> REDEEM </Text>
//             </Button>
//           </CardItem>
//           </Body> */}
//             </Card>
//           </Content>
//         </TouchableWithoutFeedback>
//       </Modal>
//     </Container>
//     </KeyboardAwareScrollView>
   
//   );
// };

// export default FullfillCollection;

// const styles = StyleSheet.create({
//   modalToggle: {
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginBottom: 10,
//     borderWidth: 1,
//     borderColor: '#f2f2f2',
//     padding: 10,
//     borderRadius: 10,
//     alignSelf: 'center',
//   },
//   modalClose: {
//     marginTop: 20,
//     marginBottom: 0,
//   },
//   modalContent: {
//     //flex: 1,
//   },
//   tx: {
//     flex: 1,
//     borderRadius: 33,
//     height: 35,
//     width: 276,
//     borderColor: '#2ACF3B',
//     top: 15,
//     color: '#2ACF3B',
//     borderWidth: 1,
//     flexDirection: 'column',
//     alignContent: 'center',
//   },
//   badgeProfile: {backgroundColor: 'rgba(139, 139, 139, 0.75)', color: 'white', alignSelf:'center'},
//   badgeBalance: {backgroundColor: 'rgba(139, 139, 139, 0.75)', color: 'white'},
//   card: {
//    // flex: 1,
//     height: 700,
//    },
//   body: {
//     marginTop:5,
//     textDecorationColor: 'rgba(139, 139, 139, 0.75)',
//   },
//   btn: {
//     padding: 5,
//     color: 'white',
//     borderRadius: 25,
//     // left: '30%',
//     backgroundColor: '#2ACF3B',
//     top: 15,

//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   imageFrame: {
//     width: 150,
//     height: 200,
//     resizeMode: 'contain',
//     alignSelf: 'center',
//   },
// });
