import React from 'react'
import { Button, View, StyleSheet } from 'react-native'
import Constants from 'expo-constants'

import ContactList from '../contactList'

export default class ContactListScreen extends React.Component {
    static navigationOptions = ({ navigation }) => ({
        headerTitle: 'Contacts',
        headerRight: <Button title="Add"
            color="#a41034"
            onPress={() => {
                navigation.navigate('AddCnt')
            }} />
    })
    state = {
        showContacts: true,
    };

    toogleContact = () => {
        this.setState(prevState => ({
            showContacts: !prevState.showContacts
        }));
    };

    showForm = () => {
        this.props.navigation.navigate('AddCnt');
    };

    render() {
        return (
            <View style={{ paddingTop: Constants.statusBarHeight, flex: 1, backgroundColor: '#fff' }}>
                <Button title="Toogle Contact" onPress={this.toogleContact} />
                {/* <Button title="Add contact" onPress={this.showForm} /> */}
                {this.state.showContacts && (
                    <ContactList
                        contacts={this.props.screenProps.contacts}
                        onSelectContact={contact =>{
                            this.props.navigation.navigate('CntDetail',{
                                number:contact.phone,
                                name:contact.name
                            });
                        }}
                    />
                )}
            </View>
        )
    }
}