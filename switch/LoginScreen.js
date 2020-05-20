import React from 'react'
import { View, Button, Text, StyleSheet } from 'react-native'

export default class LoginScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.Text}>Please Login By clicking below button</Text>
                <Button title="Login" onPress={this.login}></Button>
            </View>
        )
    }
    login = () =>{
        this.props.navigation.navigate('Main')
    }
}

const styles = StyleSheet.create({
    Text: {
        fontSize: 25,
        textAlign:'center'

    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignContent: 'center',
        justifyContent:'center', 
    }
})