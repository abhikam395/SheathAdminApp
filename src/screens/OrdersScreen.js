import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class OrderScreen extends Component{
    render(){
        return (
            <View style={styles.container}>
                <Text>OrderScreen</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})