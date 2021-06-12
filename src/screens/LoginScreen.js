import React, {Component} from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { TextInput } from 'react-native-paper';

const blueColor = "#42a5f5"

export default class LoginScreen extends Component{

    constructor(){
        super();
        this.state = {
            email: null,
            password: null
        }
        this.navigateToHomeScreen = this.navigateToHomeScreen.bind(this);
        this.navigateToRegisterScreen = this.navigateToRegisterScreen.bind(this);
    }

    navigateToRegisterScreen(){
        let {navigation} = this.props;
        navigation.navigate('Register');
    }

    navigateToHomeScreen(){
        let {navigation} = this.props;
        navigation.reset({
            index: 0,
            routes: [{name: 'Home'}]
        });
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <Text style={styles.title}>Login</Text>
                <Text style={styles.label}>Please login to your account</Text>
               <View style={styles.inputs}>
                    <TextInput 
                        style={styles.input} 
                        label="Email"
                        theme={{colors: {primary: blueColor}}}
                        selectionColor={blueColor}
                        onChangeText={(value) => this.setState({email: value})}
                    />
                    <TextInput 
                        style={styles.input} 
                        label="Password" 
                        secureTextEntry={true}
                        theme={{colors: {primary: blueColor}}}
                        selectionColor={blueColor}
                        onChangeText={(value) => this.setState({password: value})}
                    />
               </View>
               <TouchableOpacity style={styles.forgetButton}>
                   <Text style={styles.forgetLabel}>Forget Password?</Text>
               </TouchableOpacity>
               <TouchableOpacity 
                    style={styles.loginButton}
                    onPress={this.navigateToHomeScreen}>
                   <Text style={styles.loginLabel}>LOGIN</Text>
               </TouchableOpacity>
               <View style={styles.bottom}>
                    <Text style={styles.bottomLabel}>Don't have an account?</Text>
                    <TouchableOpacity 
                        style={styles.registerButton} 
                        onPress={this.navigateToRegisterScreen}>
                        <Text style={styles.registerLabel}>Register</Text>
                    </TouchableOpacity>
               </View>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20
    },
    title: {
        fontSize: 26,
        fontWeight: 'bold',
        color: blueColor
    },
    label: {
        fontSize: 16,
        marginTop: 10
    },
    inputs: {
        marginTop: 20
    },
    input: {
        marginTop: 10,
        backgroundColor: 'transparent',
        fontSize: 14,
    },
    forgetButton: {
        marginLeft: 'auto',
        marginVertical: 20
    },
    forgetLabel: {
        color: blueColor,
        fontWeight: 'bold'
    },
    loginButton:{ 
        height: 56,
        backgroundColor: blueColor,
        marginTop: 20,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 2
    },
    loginLabel: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16
    },
    bottom: {
        flexDirection: 'row',
        alignSelf: 'center',
        marginTop: 40,
        alignItems: 'center'
    },
    registerLabel: {
        fontSize: 15,
        fontWeight: 'bold',
        color: blueColor
    },  
    bottomLabel: {
        color: 'black',
        fontSize: 14
    },
    registerButton: {
        marginLeft: 5,
    }
})