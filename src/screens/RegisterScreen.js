import React, {Component} from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { TextInput, HelperText } from 'react-native-paper';
import { BLUE } from '../../utils/commoncolors';
import auth from '@react-native-firebase/auth';

export default class RegisterScreen extends Component{

    constructor(){
        super();
        this.state = {
            name: null,
            email: null,
            phone: null,
            password: null,
            confirmPassword: null,
            errors: {},
            status: true,
        }
        this.signUp = this.signUp.bind(this);
        this.navigateToHomeScreen = this.navigateToHomeScreen.bind(this);
        this.navigateToLoginScreen = this.navigateToLoginScreen.bind(this);
    }

    componentDidMount(){

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

    signUp(){
        this.setState({errors: {}});
        let error = {}
        let {name, phone, email, password, confirmPassword} = this.state;

        if(name == null || name.length < 3)
            error.name = name == null ? "Enter name" : "Name should be more than 2 characters";
        if(email == null || !email.includes("@gmail.com"))
            error.email = email == null ? "Enter email": "Invaild email";
        if(phone == null || phone.length != 10){
            error.phone = phone == null ? "Enter phone number" : "Invalid phone number";
        }
        if(password == null || password.length < 6)
            error.password = password == null ? "Enter password" : "Password must be more than 5 characters";
        if(confirmPassword == null || confirmPassword != password)
            error.confirmPassword = confirmPassword == null ? "Enter password" : "Password is not same";

        if(Object.keys(error).length > 0){
            this.setState({errors: error});
            return;
        }
        this.setState({errors: {}});

        auth()
            .createUserWithEmailAndPassword(email, password)
            .then((user) => {
                console.log(user)
                let {navigation} = this.props;
                navigation.navigate("Home")
            })
            .catch(error => {
                if (error.code === 'auth/email-already-in-use') {
                    this.setState({status: false});
                }
              
                if (error.code === 'auth/invalid-email') {
                    this.setState({status: false});
                }
              
            })
    }

    render() {
        let {name, email, phone, password, confirmPassword} = this.state.errors;
        return (
            <SafeAreaView style={styles.container}>
                <Text style={styles.title}>Register</Text>
                <Text style={styles.label}>Please enter details to register</Text>
               <View style={styles.inputs}>
                    <TextInput 
                        style={styles.input} 
                        label="Name"
                        outlineColor={BLUE}
                        selectionColor={BLUE}
                        error={name != undefined}
                        onFocus={() => this.setState({errors: {}})}
                        onChangeText={(value) => this.setState({name: value, status: true, errors: {}})}
                    />
                    {name != undefined && 
                        <HelperText type="error" visible={name != null}>
                            {name}
                        </HelperText> 
                    }
                    <TextInput 
                        style={styles.input} 
                        label="Email" 
                        selectionColor={BLUE}
                        keyboardType="email-address"
                        error={email != undefined}
                        onFocus={() => this.setState({errors: {}})}
                        onChangeText={(value) => this.setState({email: value, status: true, errors: {}})}
                    />
                    {email != undefined && 
                        <HelperText type="error" visible={email != undefined}>
                            {email}
                        </HelperText> 
                    }
                    <TextInput 
                        style={styles.input} 
                        label="Mobile Number"
                        selectionColor={BLUE}
                        keyboardType="number-pad"
                        error={phone != undefined}
                        onFocus={() => this.setState({errors: {}})}
                        onChangeText={(value) => this.setState({phone: value, status: true, errors: {}})}
                        />
                    {phone != undefined && 
                        <HelperText type="error" visible={phone != undefined}>
                            {phone}
                        </HelperText> 
                    }
                    <TextInput 
                        style={styles.input} 
                        label="Password" 
                        secureTextEntry={true}
                        selectionColor={BLUE}
                        error={password != undefined}
                        onFocus={() => this.setState({errors: {}})}
                        onChangeText={(value) => this.setState({password: value, status: true, errors: {}})}
                    />
                    {password != undefined && 
                        <HelperText type="error" visible={password != undefined}>
                            {password}
                        </HelperText> 
                    }
                    <TextInput 
                        style={styles.input} 
                        label="Confirm Password"
                        selectionColor={BLUE}
                        secureTextEntry={true}
                        error={confirmPassword != undefined}
                        onFocus={() => this.setState({errors: {}})}
                        onChangeText={(value) => this.setState({confirmPassword: value, status: true})}
                    />
                    {confirmPassword != undefined && 
                        <HelperText type="error" visible={confirmPassword != undefined }>
                            {confirmPassword}
                        </HelperText> 
                    }
                    {this.state.status == false && (
                        <Text style={styles.errorMessage}>Email already in used</Text>
                    )}
               </View>
               <TouchableOpacity 
                    style={styles.registerButton}
                    onPress={this.signUp}>
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
        color: BLUE
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
        color: BLUE,
        fontWeight: 'bold'
    },
    registerButton:{ 
        height: 56,
        backgroundColor: BLUE,
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
        color: BLUE
    },  
    bottomLabel: {
        color: 'black',
        fontSize: 14
    },
    loginButton: {
        marginLeft: 5,
    },
    errorMessage: {
        color: 'red',
        marginTop: 30,
        fontSize: 14,
        alignSelf: 'center'
    }
})