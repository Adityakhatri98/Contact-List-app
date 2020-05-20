// import Example from './switch1/switch'
// export default Example
import React from 'react';
import { StyleSheet, Text, View, Button, ScrollView, FlatList, SectionList } from 'react-native';
import Constants from 'expo-constants'
import { createStackNavigator, createSwitchNavigator,createBottomTabNavigator } from 'react-navigation'
import ViewPager from '@react-native-community/viewpager';
import contacts, { compareNames } from './contacts.js'


import AddContactScreen from './switch/addContactScreen.js';
import ContactListScreen from './switch/contactListScreen.js';
import ContactDetailScreen from './switch/contactDetailScreen.js';
import LoginScreen from './switch/LoginScreen.js';
import SettingsScreen from './switch/SettingScreen.js';

import {Ionicons} from 'react-native-vector-icons'

const ContactTab = createStackNavigator({
    AddCnt: AddContactScreen,
    CntList: ContactListScreen,
    CntDetail: ContactDetailScreen, 
}, {
    initialRouteName: 'CntList',
    navigationOptions:{
        headerTintColor:'#a41034'
    }
});

ContactTab.navigationOptions={
    tabBarIcon:({focused,tintColor}) =>(
        <Ionicons
            name={`ios-contacts${focused ? '':''}`}
            size={25}
            color={tintColor}
        />
    )
}

const MainNavigator = createBottomTabNavigator({
    Contacts:ContactTab,
    Settings:SettingsScreen
},{
    tabBarOptions:{
        activeTintColor:'#a41034'
    }
})

const AppNavigator = createSwitchNavigator({
    Main: MainNavigator,
    Login:LoginScreen,
}, {
    initialRouteName: 'Login',
})



export default class App extends React.Component {
    state = {
        showContact: true,
        contacts: contacts
    }

    addContact = newContact => {
        this.setState(prevState => ({
            showForm: false,
            contacts: [...prevState.contacts, newContact]
        }));
    };

    render() {
        return (
            <AppNavigator
                screenProps={{
                    contacts: this.state.contacts,
                    addContact: this.addContact
                }}
            />
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    not: {
        flex: 1,
        paddingTop: Constants.statusBarHeight,
    },
    cntList: {
        padding: 4,
    }

});


