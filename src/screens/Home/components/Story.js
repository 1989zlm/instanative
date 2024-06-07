import { Image, StyleSheet, Text, View } from "react-native"
import LinearGradient from "react-native-linear-gradient"


export default function Story({ story }) {
    console.log(story.user.avatar)
    return (
        <View key={story.id} style={styles.story}>

            <LinearGradient style={styles.cover} colors={['#DE0046', '#F7A34B']}>
                <Image source={{ uri: story.user.avatar }} style={styles.avatar} />
            </LinearGradient>
            <Text numberOfLines={1} style={styles.username}>{story.user.name}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    avatar: { width: 60, heigth: 60, borderRadius: 60 },
    story: {
        width: 67,
        marginHorizontal: 8,
    },
    cover: {
        width: 65,
        height: 65,
        borderRadius: 33.5,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 5,
    },
    username: {
        fontSize: 12,
    }

})