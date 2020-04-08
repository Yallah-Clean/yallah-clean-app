import React from 'react'
import { StyleSheet,  View ,FlatList} from 'react-native'
import { Container, Header, Content, Button, ListItem, Text, Icon, Left, Body, Right, Switch } from 'native-base';
import { globalStyles } from '../../styles/global';

const OrgHome = () => {
    const items=[1,2,3];
    return (
    //     <View>
    //          <FlatList
    //     data={items}
    //     renderItem={({item, index, separators}) => (
    //         <Text>
               
    //           <Text >matrial</Text> 
    //           <Text style={styles.tx}> weight</Text>  <Text> KG</Text> 
    //         </Text>
    //     )}
    //   />
    //     </View>
    <Container style={globalStyles.container}>
    <Content style={globalStyles.sectionContainer}>
    
      <ListItem icon>
        <Left>
          <Button style={{ backgroundColor: "#007AFF" }}>
            <Icon name="ios-person" size={30} color="#4F8EF7"/>
          </Button>
        </Left>
        <Body>
          <Text>collector</Text>
        </Body>
        <Right>
        <Button
                small
                rounded
                 
                success
                style={styles.btn}
                onPress={console.log('approved')}>
                <Text> Approve </Text>
              </Button>
         </Right>
      </ListItem>
    </Content>
  </Container>
    )
}

export default OrgHome

const styles = StyleSheet.create({})
