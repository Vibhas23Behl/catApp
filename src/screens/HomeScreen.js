import React from 'react';
import { View, StyleSheet } from 'react-native';
import Products from '../components/products';

const HomeScreen = () => {

    return (
        <View style={styles.container}>
            <Products />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f8ff',
        position: 'relative'
    },
});

export default HomeScreen;