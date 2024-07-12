import { View, Text, ScrollView, StyleSheet, TouchableOpacity, FlatList, Image, Dimensions } from 'react-native'
import React from 'react'
import { BurgerMenu, Dropdown, Plus } from '../../Icons'
import ProfileHeader from './components/ProfileHeader.jsx'
import ProfileInfo from './components/ProfileInfo.jsx'
import ProfileBio from './components/ProfileBio.jsx'
import ProfileStory from './components/ProfileStory.jsx'
import posts from '../../data/posts.js'


export default function Profile({ item }) {
    //profilde ekrana basılan paylaşımları ekran boyutuna göre ayarlamak için dimension kullnadık
    const screenWidth = Dimensions.get('window').width;
    //console.log(screenWidth)
    const numColumns = 3;
    // basılacak resimlerin boyutunu ayarladık
    const imageSize = (screenWidth - (numColumns + 1) * 2) / numColumns;
    console.log(imageSize)

    //profilde kişinin yaptığı önceki paylaşımları bastık ekrana
    const renderProps = ({ item }) => (
        // console.log(item)
        <TouchableOpacity>
            <Image source={{ uri: item.image }} style={{ width: imageSize, height: imageSize, margin: 1 }}></Image>
        </TouchableOpacity>
    )
    return (
        <ScrollView style={styles.container}>
            <ProfileHeader />
            <ProfileInfo />
            <ProfileBio />
            <ProfileStory />
            <FlatList
                keyExtractor={(item, index) => index.toString()} numColumns={numColumns}
                data={posts}
                renderItem={renderProps}
                contentContainerStyle={styles.photoGrid}
                style={{ marginTop: 15 }}
            />
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flex: 1,
    },
    photoGrid: {
        paddingHorizontal: 5,
    }

})