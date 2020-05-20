import React from 'react'
import { Text, View, StyleSheet, Button } from 'react-native'
import { createAppContainer, createStackNavigator } from 'react-navigation'
// import{createStackNavigator} from 'react-navigation-stack'
const styles = StyleSheet.create({
    cont1: {
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'center',
        borderColor: 'teal',
        borderWidth: 25,
    },
    cont2: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: 'orange',
        borderWidth: 25,
    },
    cont3: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: 'purple',
        borderWidth: 25,
    }
})

const randomNumber = () => {
    return Math.floor(Math.random() * 10)
}

class ScreenComponentOne extends React.Component {
    static navigationOptions = {
        headerTitle: "First Screen",
        headerTintColor: 'teal'
    }
    render() {
        return (
            <View style={styles.cont1}>
                <Button title="Go to Screen 2" onPress={() => {
                    this.props.navigation.navigate('RouteNameTwo')
                }} />
            </View>
        )
    }
}
class ScreenComponentTwo extends React.Component {
    static navigationOptions = {
        headerTitle: "Second Screen",
        headerTintColor: 'orange',
    }
    render() {
        return (
            <View style={styles.cont2}>
                <Button title="Go to Screen 3" onPress={() => {
                    this.props.navigation.navigate('RouteNameThree', {
                        number: randomNumber(),
                    })
                }} />
            </View>
        )
    }
}
class ScreenComponentThree extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
            headerTitle: `Number: ${navigation.getParam('number')}`,
        }
    }
    render() {
        return (
            <View style={styles.cont3}>
                <Text style={{ fontSize: 25 }}>{this.props.navigation.getParam('number')}</Text>
                <Button title="Go Back" onPress={() => {
                    this.props.navigation.goBack()
                }} />
                <Button title="New Number" onPress={() => {
                    this.props.navigation.setParams({ number: randomNumber() })
                }} />
            </View>
        )
    }
}

const AppNavigator1 = createStackNavigator({
    "RouteNameOne": ScreenComponentOne,
    "RouteNameTwo": ScreenComponentTwo,
    "RouteNameThree": ScreenComponentThree,
})
export default class Example extends React.Component {
    render() {
        return (
            <AppNavigator1 />
        )
    }
}
