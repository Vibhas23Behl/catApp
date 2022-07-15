import React, { useContext } from "react";
import { StyleSheet, View, Text, SafeAreaView, Button, FlatList, Image, TouchableOpacity, ScrollView } from "react-native"
import { CartContext } from "../context/CartContext";

export default function Cart() {
    const App = useContext(CartContext);
    let { cartState, remove } = App;

    const Item = (item) => {
        return (<View style={styles.productStyle}>
            <Image source={item.image} style={styles.imageStyle} />
            <View style={styles.textStyle}>
                <Text style={styles.nameStyle}>{item.name}</Text>
                <Text style={styles.priceStyle}>{item.price * item.quntity} </Text>
                <Text style={styles.priceStyle}>{item.quntity}</Text>
                <TouchableOpacity
                    onPress={() => removeFromCartItem(item,false)}
                    style={styles.button}>
                    <Text style={styles.AddToCart}>Decrement quantity</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => removeFromCartItem(item,true)}
                    style={styles.button}>
                    <Text style={styles.AddToCart}>Remove All</Text>
                </TouchableOpacity>
            </View>
        </View>)
    }


    const removeFromCartItem = async (item,selectAll) => {
        await remove(item,selectAll)
    };


    return (
        <SafeAreaView>
            <FlatList
                data={cartState.products}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (Item(item))}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    Textstyle: {
        marginLeft: 90,
        fontSize: 20,
        marginTop: 10,
        height: 40,
    },

    productStyle: {
        flexDirection: 'row',
        margin: 10,
        backgroundColor: 'white',
        borderRadius: 5,
    },

    textStyle: {
        flexDirection: 'column',
    },
    imageStyle: {
        height: 80,
        width: 90,
        borderRadius: 5,
    },

    nameStyle: {
        marginLeft: 15,
    },

    priceStyle: {
        marginLeft: 15,
        marginTop: 10,
    },

    button: {
        backgroundColor: '#7EA8F7',
        borderRadius: 5,
        marginTop: 15,
        marginLeft: 22,
        width: 80,
        height: 20,
    },

    AddToCart: {
        paddingLeft: 15,
    },
});
