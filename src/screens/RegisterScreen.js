import React, {Component} from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { TextInput } from 'react-native-paper';

const blueColor = "#42a5f5"

export default class RegisterScreen extends Component{

    constructor(){
        super();
        this.state = {
            name: null,
            email: null,
            number: null,
            password: null,
            confirmPassword: null,
        }
        this.navigateToHomeScreen = this.navigateToHomeScreen.bind(this);
        this.navigateToLoginScreen = this.navigateToLoginScreen.bind(this);
    }

    navigateToLoginScreen(){
        let {navigation} = this.props;
        navigation.navigate('Login');
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
                <Text style={styles.title}>Register</Text>
                <Text style={styles.label}>Please enter details to register</Text>
               <View style={styles.inputs}>
                    <TextInput 
                        style={styles.input} 
                        label="Name"
                        outlineColor={blueColor}
                        theme={{colors: {primary: blueColor}}}
                        selectionColor={blueColor}
                        onChangeText={(value) => this.setState({name: value})}
                    />
                    <TextInput 
                        style={styles.input} 
                        label="Email" 
                        theme={{colors: {primary: blueColor}}}
                        selectionColor={blueColor}
                        onChangeText={(value) => this.setState({email: value})}
                    />
                    <TextInput 
                        style={styles.input} 
                        label="Mobile Number"
                        theme={{colors: {primary: blueColor}}}
                        selectionColor={blueColor}
                        onChangeText={(value) => this.setState({number: value})}
                        />
                    <TextInput 
                        style={styles.input} 
                        label="Password" 
                        secureTextEntry={true}
                        theme={{colors: {primary: blueColor}}}
                        selectionColor={blueColor}
                        onChangeText={(value) => this.setState({password: value})}
                    />
                    <TextInput 
                        style={styles.input} 
                        label="Confirm Password"
                        theme={{colors: {primary: blueColor}}}
                        selectionColor={blueColor}
                        secureTextEntry={true}
                        onChangeText={(value) => this.setState({confirmPassword: value})}
                    />
               </View>
               <TouchableOpacity 
                    style={styles.registerButton}
                    onPress={this.navigateToHomeScreen}>
                   <Text style={styles.registerLabel}>REGISTER</Text>
               </TouchableOpacity>
               <View style={styles.bottom}>
                    <Text style={styles.bottomLabel}>Already have an account?</Text>
                    <TouchableOpacity 
                        style={styles.loginButton} 
                        onPress={this.navigateToLoginScreen}>
                        <Text style={styles.loginLabel}>Login</Text>
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
    registerButton:{ 
        height: 56,
        backgroundColor: blueColor,
        marginTop: 60,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 2
    },
    registerLabel: {
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
    loginLabel: {
        fontSize: 15,
        fontWeight: 'bold',
        color: blueColor
    },  
    bottomLabel: {
        color: 'black',
        fontSize: 14
    },
    loginButton: {
        marginLeft: 5,
    }
})