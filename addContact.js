import React from 'react'
import { Text, TextInput, View, StyleSheet, Button, KeyboardAvoidingView } from 'react-native'
import propTypes from 'prop-types'
import Constants from 'expo-constants'

const styles = StyleSheet.create({
    input: {
        padding: 10,
        borderColor: 'black',
        borderWidth: 1,
        marginTop: 10,
        marginBottom: 10
    },
    container: {
        flex: 1,
        // alignItems: 'center',
        justifyContent: 'center',
        paddingTop: Constants.statusBarHeight,
        paddingLeft: 20,
        paddingRight: 20

    }
})



export default class AddContact extends React.Component {
    
    static propTypes = {
        addcontact: propTypes.func
    }
    state = {
        name: '',
        phone: '',
        isFormValid: false,

    }
    validateForm = () => {
        if (+this.state.phone >= 0 && this.state.phone.length == 10 && this.state.name.length >= 3) {
            this.setState({ isFormValid: true })
        }
        else {
            this.setState({ isFormValid: false })
        }
    }
    handleName = name => { this.setState({ name }, this.validateForm) }
    handlePhone = phone => {
        if (+this.state.phone >= 0) {
            this.setState({
                phone: phone,
            }, this.validateForm)
        }
    }
    handleSubmit = () => {
        if (+this.state.phone >= 0 && this.state.phone.length == 10 && this.state.name.length >= 3) {
            this.props.onSubmit({ ...this.state })
        }
    }

    render() {

        return (
            <View style={{ backgroundColor: '#fff',flex:1 }}>
            <KeyboardAvoidingView behavior="padding" style={styles.container} >
                <TextInput
                    style={styles.input}
                    value={this.state.name}
                    onChangeText={this.handleName}
                    placeholder="Name"
                />
                <TextInput
                    style={styles.input}
                    value={this.state.phone}
                    onChangeText={this.handlePhone}
                    keyboardType="numeric"
                    placeholder="Phone number"
                />

                <Button
                    title="Add Contact"
                    style={{ borderWidth: 2 }}
                    disabled={!this.state.isFormValid}
                    onPress={this.handleSubmit}></Button>
            </KeyboardAvoidingView>
            </View>
        )
    }
}