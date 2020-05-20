import React from 'react'
import { View, Button, Text, StyleSheet } from 'react-native'

export default class ContactDetailScreen extends React.Component{
    static navigationOptions =({navigation})=>({
        headerTitle:navigation.getParam('name')
    })
     
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.Number}>Mobile: {this.props.navigation.getParam('number')}</Text>
                <Button title="go to"></Button>
            </View>
        )
    }
}

const styles=StyleSheet.create({
    Number:{
        fontSize:25,
    
    },
    container:{
        flex:1,
        backgroundColor:'#fff',
        alignContent:'center',
    }
})