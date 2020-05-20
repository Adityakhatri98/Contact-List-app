// import Example from './switch/switch'
// export default Example

import React from 'react';
import { StyleSheet, Text, View, Button,ScrollView , FlatList, SectionList } from 'react-native';
import Constants from 'expo-constants'

import Contacts,{compareNames} from '../contacts.js'
// import Row from'./rowView.js'
import ContactList from '../contactList'
// import AddContact from'./addContact'


const styles=StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  not:{
    flex:1,
    paddingTop: Constants.statusBarHeight,
  },
  cntList:{
    padding: 4,
  }

});



export default class ContactListScreen extends React.Component  {
  state={
      showContact: true,
      // showForm:false,
    //   Contacts:Contacts
    }

  
  toogleContact = ()=>{
    this.setState(prevState =>({
      showContact: !prevState.showContact,
    }))
  }
  showForm =()=>{
    // console.error(this.props.navigation.navigate('AddContact'));  
    this.props.navigation.navigate('AddContact')
      
      
  }
  render(){

    return (
      
      <View style={styles.not}>
        {/* {console.error(this .state.Contacts)} */}
      
        <Button title="Show" onPress={this.toogleContact} ></Button>
        <Button title="Add Contact" onPress={this.showForm}  ></Button>
        {/* <View style={styles.container}> */}
        
        {this.state.showContact ?
        
          
         <ContactList Contacts={this.props.screenProps.Contacts}/>
         : []
        }
        {/* </View> */}
        
      </View>
    );
  }
}