import { View, StyleSheet, ScrollView } from "react-native";
import stories from "../../../data/stories";
import Story from "./Story";




export default function Stories() {
    return (
        <View style={styles.stories}>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                {stories?.map((story) => (
                    <Story story={story} />
                ))}
            </ScrollView>
        </View>
    );
}
const styles = StyleSheet.create({

    stories: {
        paddingVertical: 10,
    },

})