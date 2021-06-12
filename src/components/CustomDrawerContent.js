import { 
    DrawerContentScrollView, 
    DrawerItemList } 
from '@react-navigation/drawer';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { GREY } from '../../utils/commoncolors';

const image = "https://i.pinimg.com/originals/41/d9/bb/41d9bb48a889196dac7c6bc36dc80935.jpg";

export default function(props){
    return (
        <DrawerContentScrollView {...props}>
            <View style={styles.profileContatiner}>
                <Image source={{uri: image}} style={styles.userImage}/>
                <Text style={styles.userName}>Abhishek</Text>
                <Text style={styles.userEmail}>abhi@gmail.com</Text>
            </View>
            <DrawerItemList {...props}/>
        </DrawerContentScrollView>
    )
}

const styles = StyleSheet.create({
    profileContatiner: {
        paddingHorizontal: 10,
        paddingVertical: 30,
        marginVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: GREY
    },
    userImage: {
        height: 60,
        width: 60,
        borderRadius: 30
    },
    userName: {
        marginTop: 15,
        fontSize: 20,
        fontWeight: 'bold'
    },
    userEmail: {
        fontSize: 15,
        color: '#616161'
    }
})
