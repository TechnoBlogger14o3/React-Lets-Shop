import React from 'react';
import { View, ScrollView, Text, Button, Image, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import Colors from '../../constants/Colors';

const ProductDetailScreen = props => {
    const productId = props.navigation.getParam('productId');
    const selectedProduct = useSelector(state => state.products.availableProducts.find(prod => prod.id === productId));

    return ( 
        <View>
            <ScrollView>
                <Image style={styles.image}source={{uri: selectedProduct.imageUrl}}/>
                <View style={styles.action}>
                    <Button color={Colors.primary}title ="Add to Cart" onPress={() => {}}/> 
                </View>
                <Text style={styles.price}>${selectedProduct.price.toFixed(2)}</Text>
                <Text style={styles.description}> {selectedProduct.description}</Text>
            </ScrollView>
        </View>
     );
}

ProductDetailScreen.navigationOptions = navData => {
    return {
        headerTitle: navData.navigation.getParam('productTitle')
    };
}

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 300
    },
    price: {
        fontSize: 20,
        color: '#888',
        textAlign: 'center',
        marginVertical: 20,
        fontFamily: 'open-sans-bold',
    },
    description: {
        fontSize: 14,
        textAlign: 'center',
        marginHorizontal: 20,
        fontFamily: 'open-sans',

    }, 
    action: {
        marginVertical: 10,
        alignItems: 'center'
    }

});
 
export default ProductDetailScreen;