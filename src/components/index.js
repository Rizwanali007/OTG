import React from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import styles from './style.js';
import { useNavigation } from '@react-navigation/native';
import screenNames from '../helpers/screenNames.js';

const days = 7;

const Post = (props) => {

    const post = props.post;

    const navigation = useNavigation();

    const goToPostPage = ({ navigation }) => {
        navigation.navigate(screenNames.NewSearchResultScreen);
    }

    return (
        <View style={{}}>
            <Pressable onPress={() => { navigation.navigate(screenNames.NewSearchResultScreen) }} style={styles.container}>
                {/* Image  */}
                <Image
                    style={styles.image}
                    source={{ uri: post.image }}
                />
                {/* Type & Description */}
                <Text style={styles.description} numberOfLines={2}>
                    {post.type}. {post.title}
                </Text>
            </Pressable>
        </View>
    );
};

export default Post;
