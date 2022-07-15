import React from 'react';
import { View, StyleSheet } from 'react-native';
import Cart from '../components/cart';

const CartScreen = () => {

    return (
        <View style={styles.container}>
            <Cart />
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

export default CartScreen;