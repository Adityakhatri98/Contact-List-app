import React from 'react';
import AddContact from '../addContact';
import { Button } from 'react-native';

export default class AddContactScreen extends React.Component {
    static navigationOptions = {
        headerTitle: 'Add Contacts',
        
    }
    handleSubmit = (formState) => {
        this.props.screenProps.addContact(formState);
        this.props.navigation.navigate('CntList');
    };
    render() {
        return (
            <AddContact onSubmit={this.handleSubmit} />
        )
    }
}