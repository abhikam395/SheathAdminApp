import React, {Component} from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

const image = 'https://www.businessinsider.in/thumb/msid-78807720,width-640,resizemode-4/Master.jpg';

export default class ProductItem extends Component{
    render(){
        let {stock} = this.props.product;
        return (
            <View style={styles.container}>
                <Image source={{uri: image}} style={styles.image}/>
                <View style={styles.productInfo}>
                    <Text style={styles.name}>Cloths</Text>
                    <Text style={styles.price}>$12</Text>
                </View>
                <View style={styles.status}>
                    {stock < 1 && (
                        <Text style={styles.fail}>Out of stock</Text>
                    )}
                    {stock >= 1 && (
                        <Text style={styles.success}>In Stock</Text>
                    )}
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        width: '47%',
        backgroundColor: 'white',
        elevation: 5,
        paddingVertical: 10
    },
    image: {
        height: 150,
    },
    productInfo: {
        justifyContent: 'center',
        padding: 10
    },
    name: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    price: {
        fontSize: 13
    },
    status: {
        paddingHorizontal: 10
    },
    warningLabel: {
        color: 'red',
        fontWeight: 'bold'
    },
    success: {
        color: 'green'
    },
    fail: {
        color: 'red'
    }
})