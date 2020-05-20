import React from 'react'
import { View, Button, Text, StyleSheet } from 'react-native'
import {Ionicons} from 'react-native-vector-icons'

export default class SettingsScreen extends React.Component {
    static navigationOptions={
        tabBarIcon:({focused,tintColor}) =>(
            <Ionicons
                name={`ios-options${focused ? '':''}`}
                size={25}
                color={tintColor}
            />
        )
    }
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.Text}>Settings Comming Soon !..........</Text>
            </View>
        )
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