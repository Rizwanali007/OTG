import React from "react";
import { View, FlatList, Text } from "react-native";
import feed from "./feed";
import Post from "./index";

const SearchResultsScreen = (props) => {

    const { posts } = props;

    return (
        <View>
            <View style={{ alignItems: 'center' }}><Text style={{ fontWeight: 'bold', fontSize: 30, color: 'black', textDecorationLine: 'underline' }} >HOTELS.</Text></View>
            <FlatList
                data={feed}
                renderItem={({ item }) => <Post post={item} />}
            />
        </View>
    );
};

export default SearchResultsScreen;
