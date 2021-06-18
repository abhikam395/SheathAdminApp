import React, {Component} from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { FAB } from 'react-native-paper';
import { connect } from 'react-redux';
import { BLUE } from '../../../utils/commoncolors';
import { addProducts } from '../../store/actions/productAction';
import ProductItem from './ProductItem';

let products = [
    {id: 1, name: 'Cloths', price: '1', description: 'asdflkasdlfjasdkflsadf', stock: 1},
    {id: 2, name: 'Cloths', price: '1', description: 'asdflkasdlfjasdkflsadf', stock: 3},
    {id: 3, name: 'Cloths', price: '1', description: 'asdflkasdlfjasdkflsadf', stock: 0}, 
];

function mapDispatchToProps(dispatch){
    return {
        fetch: function(){
            dispatch(addProducts(products));
        }
    }
}

function mapStateToProps(state){ 
    let {products} = state.product;
    return {
        products: state.product.products
    }
}

class ProductsScreen extends Component{

    constructor(){
        super();
        this.unsubscribe = null;
        this.renderProductItem = this.renderProductItem.bind(this);
    }

    componentDidMount(){
        this.props.fetch(products);
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
        return (
            <View style={styles.container}>
                <FlatList
                    data={this.props.products}
                    numColumns={2}
                    renderItem={this.renderProductItem}
                    keyExtractor={(item, index) => index}
                    columnWrapperStyle={{justifyContent: 'space-between'}}
                    ItemSeparatorComponent={() => <View style={styles.separator}/>}>
                </FlatList>
                {this.renderFabButton()}
            </View>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsScreen);

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