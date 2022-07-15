import React, { useContext } from "react";
import { StyleSheet, View, Text, SafeAreaView, Button, FlatList, Image, TouchableOpacity, ScrollView } from "react-native"
import { CartContext } from "../context/CartContext";


export const ProductList = [
    {
        id: 100,
        name: 'ProHeadset',
        price: 790,
        image: require('./assets/a.jpg'),
        quntity: 1

    },
    {
        id: 101,
        name: 'RemoteCar',
        price: 430,
        image: require('./assets/b.jpg'),
        quntity: 1
    },
    {
        id: 102,
        name: 'Smartwatch',
        price: 2000,
        image: require('./assets/c.jpg'),
        quntity: 1
    },

    {
        id: 103,
        name: 'Tshirt',
        price: 750,
        image: require('./assets/a.jpg'),
        quntity: 1
    },
    {
        id: 104,
        name: 'stLanekktyui Toy Car',
        price: 900,
        image: require('./assets/b.jpg'),
        quntity: 1
    },

    {
        id: 105,
        name: 'Bag',
        price: 200,
        image: require('./assets/c.jpg'),
        quntity: 1
    },

    {
        id: 106,
        name: 'socks',
        price: 350,
        image: require('./assets/a.jpg'),
        quntity: 1
    },
    {
        id: 107,
        name: 'pen',
        price: 60,
        image: require('./assets/b.jpg'),
        quntity: 1
    },
    {
        id: 108,
        name: 'geometry box',
        price: 20,
        image: require('./assets/c.jpg'),
        quntity: 1
    },
    {
        id: 109,
        name: 'jeans',
        price: 1100,
        image: require('./assets/c.jpg'),
        quntity: 1
    }
];

export default function Products() {
    const App = useContext(CartContext);
    let { cartState, add } = App;

    const Item = (item) => {
        return (<View style={styles.productStyle}>
            <Image source={item.image} style={styles.imageStyle} />
            <View style={styles.textStyle}>
                <Text style={styles.nameStyle}>{item.name}</Text>
                <Text style={styles.priceStyle}>{item.price}</Text>
                <TouchableOpacity
                    onPress={() => AddtoCartItem(item)}
                    style={styles.button}>
                    <Text style={styles.AddToCart}>Add To Cart</Text>
                </TouchableOpacity>
            </View>
        </View>)
    }


    const AddtoCartItem = async (item) => {
        await add(item)
    };


    return (
        <SafeAreaView>
            <FlatList
                data={ProductList}
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
