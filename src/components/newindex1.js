import React from "react";
import { View, FlatList, Text } from "react-native";
import newfeed from "./newfeed";
import NewPost from "./newindex";

const NewSearchResultsScreen = (props) => {

    const { posts } = props;

    return (
        <View>
            <View style={{ alignItems: 'center' }}><Text style={{ fontWeight: 'bold', fontSize: 30, color: 'black', textDecorationLine: 'underline' }} >ROOMS.</Text></View>
            <FlatList
                data={newfeed}
                renderItem={({ item }) => <NewPost post={item} />}
            />
        </View>
    );
};

export default NewSearchResultsScreen;
