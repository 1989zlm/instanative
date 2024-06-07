import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/Home';
import SearchScreen from './screens/Search';
import ReelScreen from './screens/Reel';
import ShopScreen from './screens/Shop';
import ProfileScreen from './screens/Profile';
import { SearchField, Home, HomeField, Search, ReelField, Reel, Shop, ShopField } from './Icons';
import { Image, StyleSheet } from 'react-native';



const Tab = createBottomTabNavigator();

export default function Screen() {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarshownLabel: false,
            }}>
            {/* headershown header da homa yazısını saklasın dıye veridk */}
            <Tab.Screen options={{
                tabBarIcon: ({ focused }) => focused ? <HomeField size={30} /> : <Home size={30} />
            }} name='home' component={HomeScreen} />

            <Tab.Screen options={{
                tabBarIcon: ({ focused }) => focused ? <SearchField size={30} /> : <Search size={30} />
            }} name='search' component={SearchScreen} />

            <Tab.Screen name='reel' options={{
                tabBarIcon: ({ focused }) => focused ? <ReelField size={26} /> : <Reel size={30} />
            }} component={ReelScreen} />


            <Tab.Screen name='shop' options={{
                tabBarIcon: ({ focused }) => focused ? <ShopField size={30} /> : <Shop size={30} />
            }} component={ShopScreen} />

            <Tab.Screen
                name='profile'
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Image
                            style={[styles.avatar, { borderColor: focused ? '#000' : 'transparent' }]}
                            source={require('./../assets/profile.png')} />
                    ),
                }}
                component={ProfileScreen}
            />

        </Tab.Navigator>
    );
}
const styles = StyleSheet.create({
    avatar: {
        width: 30,
        height: 30,
        borderWidth: 1,
        borderRadius: 25,
    }
})

//birden fazla style tanımlanacaksa styless köşeli paranteze alıır virgül koyulur ve ydiğer özellikler yazılır