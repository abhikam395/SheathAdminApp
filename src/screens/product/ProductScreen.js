import React, {Component} from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { FAB } from 'react-native-paper';
import { BLUE } from '../../../utils/commoncolors';
import ProductItem from './ProductItem';

export default class ProductsScreen extends Component{

    constructor(){
        super();
        this.state = {
            products: [
                {id: 1, name: 'Cloths', price: '1', description: 'asdflkasdlfjasdkflsadf', stock: 1},
                {id: 2, name: 'Cloths', price: '1', description: 'asdflkasdlfjasdkflsadf', stock: 3},
                {id: 3, name: 'Cloths', price: '1', description: 'asdflkasdlfjasdkflsadf', stock: 0}, 
            ]
        }
        this.renderProductItem = this.renderProductItem.bind(this);
    }

    renderProductItem({item}){
        return <ProductItem  product={item}/>
    }

    renderFabButton(){
        let {navigation} = this.props;
        return (
            <FAB
                style={styles.fab}
                icon="plus"
                color="white"
                onPress={() => navigation.navigate('AddProduct')}
            />
        )
    }

    render(){
        let {products} = this.state;
        return (
            <View style={styles.container}>
                <FlatList
                    data={products}
                    numColumns={2}
                    renderItem={this.renderProductItem}
                    keyExtractor={item => item.id.toString()}
                    columnWrapperStyle={{justifyContent: 'space-between'}}
                    ItemSeparatorComponent={() => <View style={styles.separator}/>}>

                </FlatList>
                {this.renderFabButton()}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10
    },
    fab: {
        backgroundColor: BLUE,
        position: 'absolute',
        right: 0,
        bottom: 0,
        margin: 30
    },
    separator: {
        height: 20
    }
})