import React from 'react';
import AddContactForm from'../addContact'
import { Alert } from 'react-native';

export default class AddContactScreen extends React.Component{
    handleSubmit = (formState)=>{
        // console.error(this.props.addContact);
        
        this.props.screenProps.addContact(formState)
        this.props.navigation.navigate('Contactlist')
        // console.error(formState);
        console.error(this.props.screenProps.addContact(formState));

        // this.props.navigation.navigate('Contactlist')
        

    };
    render(){
        return(
            // <Alert >Hi</Alert>
            <AddContactForm onSubmit={this.handleSubmit}/>
        )
    }
}