import { ScrollView, StyleSheet, Text, View } from "react-native";
import Header from './components/Header';
import Stories from "./components/Stories";
import Post from "../../components/shared/Post";
import posts from "../../data/posts";



export default function Home() {
    console.log(posts)
    return (
        <View style={styles.container}>
            <Header />
            <ScrollView>
                <Stories />
                {posts?.map((post) => (
                    <Post key={post.id} post={post} />
                ))}

                {/* //  <Post /> */}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    }
})