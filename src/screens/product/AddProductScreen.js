import React, {Component} from 'react';
import { FlatList, Image, SafeAreaView, StyleSheet, Text, ToastAndroid, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { TextInput } from 'react-native-paper';
import { BLUE } from '../../../utils/commoncolors';
import {launchImageLibrary} from 'react-native-image-picker';
import { addProduct } from '../../store/actions/productAction';
import { connect } from 'react-redux';

const initialState = {
    name: null,
    price: 0,
    stock: 0,
    description: null,
    images: []
}


const mapDispatchToProps = function(dispatch){
    return {
        upload: function(data){
            dispatch(addProduct(data));
        }
    }
}

class AddProductScreen extends Component{

    constructor(){
        super();
        this.state = initialState
        this.upload = this.upload.bind(this);
        this.addImage = this.addImage.bind(this);
        this.renderImage = this.renderImage.bind(this);
    }

    upload(){
        let {name, price} = this.state;
        this.props.upload({name: name, price: price});
        this.setState(initialState);
        this.props.navigation.navigate('Product');
        ToastAndroid.showWithGravity('Product Uploaded', 500, ToastAndroid.BOTTOM)
    }

    addImage(){
        let options = {
            mediaType: 'photo'
        }
        let context = this;
        launchImageLibrary(options, function(data){
            let {images} = context.state;
            images.push(data.assets[0].uri);
            context.setState({images: images})
        });
    }

    renderImage({item}){
        return (
            <View style={styles.imageContainer}>
                <Image 
                    source={{uri: item}} 
                    style={styles.image} 
                />
            </View>
        )
    }

    render(){
        return (
            <FlatList 
                style={styles.container}
                ListEmptyComponent={
                    <View>
                        <TextInput
                            placeholder="Name"
                            style={styles.input}
                            mode="outlined"
                            onChangeText={(text) => this.setState({name: text})}
                        />
                        <TextInput
                            placeholder="Price"
                            style={styles.input}
                            mode="outlined"
                            keyboardType="number-pad"
                            onChangeText={(text) => this.setState({price: text})}
                        />
                         <TextInput
                            placeholder="Stock"
                            style={styles.input}
                            mode="outlined"
                            keyboardType="number-pad"
                            onChangeText={(text) => this.setState({stock: text})}
                        />
                        <TextInput
                            placeholder="Description"
                            style={styles.input}
                            numberOfLines={4}
                            multiline={true}
                            mode="outlined"
                            onChangeText={(text) => this.setState({description: text})}
                        />
                        {this.state.images.length != 0 && (
                            <Text style={styles.label}>Product Images</Text>
                        )}
                        <View style={styles.imagesContainer}>
                            <FlatList
                                data={this.state.images}
                                numColumns={3}
                                renderItem={this.renderImage}
                                keyExtractor={(item, index) => index}
                                ItemSeparatorComponent={() => <View style={styles.separator}/>}>

                            </FlatList>
                            <TouchableOpacity 
                                style={styles.addImageButton}
                                onPress={this.addImage}>
                                <Text style={styles.addImageLabel}>Add Image</Text>
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity 
                            style={styles.uploadButton} 
                            onPress={this.upload}>
                            <Text style={styles.uploadLabel}>Upload</Text>
                        </TouchableOpacity>
                    </View>
                }>
            </FlatList>
        )
    }
}

export default connect(null, mapDispatchToProps)(AddProductScreen);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20
    },
    input: {
        backgroundColor: 'transparent',
        marginTop: 15,
        fontSize: 14
    },
    imagesContainer: {
        marginVertical: 20
    },
    addImageButton: {
        height: 40,
        width: 100,
        borderRadius: 10,
        marginTop: 20,
        backgroundColor: BLUE,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 'auto'
    },
    addImageLabel: {
        color: 'white',
        fontWeight: 'bold',
    },
    uploadButton: {
        height: 56,
        width: '100%',
        backgroundColor: BLUE,
        marginVertical: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    uploadLabel: {
        fontSize: 16,
        color: 'white',
        fontWeight: 'bold'
    },
    imageContainer: {
        flex: 1,
        justifyContent: "space-around"
    },
    image: {
        height: 100,
        width: 100,
    },
    label: {
        marginVertical: 15,
        fontWeight: 'bold',
        fontSize: 14
    },
    separator: {
        height: 20
    }
})