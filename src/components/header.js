import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { width, customWidth } from '../utils/customDimension';


export default function Header({navigation}) {
    const handleProfile = () => {
        console.log("Profile Button Pressed");
    };
    const handleNotification = () => {
        console.log("Notification Button Pressed");
    };
    const handleCart = () => {
        console.log("Add To Cart");
    };
    const handleHead = () => {
        console.log(" Shop It Button Pressed");
    };


    return (
        <View style={styles.wrapper}>
            <View style={styles.header}>
                <Icon
                    name='person-pin'
                    size={40}
                    onPress={handleProfile}
                    style={styles.profileIcon} />
                {/* <Text style={styles.headerText} onPress={handleHead}>{'Shop It'}</Text> */}
                <Icon
                    name='notifications'
                    size={40}
                    onPress={handleNotification}
                    style={styles.notificationIcon} />
                <Icon
                    name='add-shopping-cart'
                    size={40}
                    onPress={handleCart} 
                    // onPress={() => navigation.navigate('CartScreen')}
                    style={styles.cartIcon} />
            </View>
        </View>


    );
}
const styles = StyleSheet.create({
    wrapper: {
        position: 'absolute',
        top: 2,
        width,
        alignItems: 'center',
        justifyContent: 'center'
    },
    header: {
        top: 5,
        height: 60,
        width: customWidth(95),
        flexDirection: 'row',
        alignItems: 'center',
        elevation: 2,
        //justifyContent: 'center',
        backgroundColor: '#606060',
        borderTopEndRadius: 30,
        borderTopStartRadius: 30,
        borderBottomRightRadius: 30,
        borderBottomLeftRadius: 30,
        margin: 5,
    },
    headerText: {
        fontWeight: 'bold',
        fontSize: 30,
        color: '#C4C4C4',
        letterSpacing: 1,
    },
    profileIcon: {
        flex: 3,
        marginLeft: 15,
        color: '#C4C4C4',
    },
    notificationIcon: {
        flex: 1,
        marginLeft: 60,
        color: '#C4C4C4',
    },
    cartIcon: {
        flex: 1,
        margin: 10,
        color: '#C4C4C4',
        marginLeft: 15,
    },


})