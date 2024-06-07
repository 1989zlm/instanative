import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Bookmark, Comment, Dots, Heart, Share } from "../../Icons";
import FitImage from "./FitImage";

export default function Post({ post }) {

    return (
        <View style={styles.post}>
            <View style={styles.header}>
                <View style={styles.username}>
                    <Image source={{ uri: post?.user?.avatar }} style={styles.avatar} />
                    <Text style={styles.title}>{post?.user.name}</Text>

                </View >

                <Dots />
            </View>
            <FitImage src={post?.image} />
            <View style={styles.content}>
                <View style={styles.actions}>
                    <View style={styles.leftActions}>
                        <TouchableOpacity style={styles.action} activeOpacity={0.7} >
                            <Heart size={24} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.action} activeOpacity={0.7}>
                            <Comment />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.action} activeOpacity={0.7}>
                            <Share />
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity activeOpacity={0.7}>
                        <Bookmark />
                    </TouchableOpacity>
                </View>
            </View>

        </View >
    )
}
const styles = StyleSheet.create({
    post: {
        marginBottom: 30,
    },
    header: {

        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 15
    },
    username: {
        flexDirection: 'row',
        alignItems: 'center',

    },
    avatar: {
        width: 30,
        height: 30,
        borderRadius: 30,
        marginRight: 10,
    },
    title: {
        fontSize: 14,
        fontWeight: '600',
    },
    content: {
        paddingHorizontal: 15,
    },
    actions: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 40,
    },
    leftActions: {
        flexDirection: 'row'
    },
    action: {
        marginRight: 12,
    }

})