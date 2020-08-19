import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from 'react-navigation';
import ProductOverviewScreen from "../screens/shop/ProductOverviewsScreen";
import Colors from "../constants/Colors";
import { Platform } from 'react-native';
import ProductDetailScreen from "../screens/shop/ProductDetailScreen";

const ProductsNavigator = createStackNavigator({
    PoductsOverview: ProductOverviewScreen,
    ProductDetail: ProductDetailScreen
}, {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: Platform.OS === 'android' ? Colors.primary : ''
        },
        headerTitleStyle: { 
            fontFamily: 'open-sans-bold'
        },
        headerBackTitleStyle: {
            fontFamily: 'open-sans'
        },
        headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary
    }
});

export default createAppContainer(ProductsNavigator);
