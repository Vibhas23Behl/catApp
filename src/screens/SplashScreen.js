import React, { useEffect } from "react";
import {
    View,
    Text,
    StyleSheet
} from "react-native";
import { useSelector } from "react-redux";

export default function SplashScreen({ navigation }) {
    const auth = useSelector((state) => state.auth);

    if (!auth.user) {
        return null;
    }

    useEffect(() => {
        if (auth.user) {
            setTimeout(() => {
                navigation.navigate('HomeStack')
            }, 1500);
        } else {
            setTimeout(() => {
                navigation.navigate('AuthStack', { screen: 'login' })
            }, 1500);
        }
    }, []);
    return (
        <View style={styles.wrapper}>
            <View style={styles.titleWrapper}>
                <Text style={styles.title}>Welcome To Shop It</Text>
            </View>

        </View>
    );
}
const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: '#f0f8ff',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        color: '#191970',
        fontSize: 35,
        fontWeight: 'bold'
    },

    titleWrapper: {
        justifyContent: 'center',
        flex: 1
    },

});