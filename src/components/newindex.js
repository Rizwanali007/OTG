import React from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import styles from './newStyles';
import { useNavigation } from '@react-navigation/native';
import screenNames from '../helpers/screenNames.js';

const days = 7;

const NewPost = (props) => {

    const post = props.post;

    const navigation = useNavigation();

    const goToPostPage = ({ navigation }) => {
        navigation.navigate(screenNames.Booking);
    }

    return (
        <Pressable onPress={() => { navigation.navigate(screenNames.Booking) }} style={styles.container}>
            {/* Image  */}
            <Image
                style={styles.image}
                source={{ uri: post.image }}
            />

            {/* Bed & Bedroom  */}
            <Text style={styles.bedrooms}>
                {post.bed} bed {post.bedroom} bedroom
            </Text>

            {/* Type & Description */}
            <Text style={styles.description} numberOfLines={2}>
                {post.type}. {post.title}
            </Text>

            {/*  Old price & new price */}
            <Text style={styles.prices}>
                <Text style={styles.oldPrice}>${post.oldPrice}</Text>
                <Text style={styles.price}>  ${post.newPrice} </Text>
                / night
            </Text>

            {/*  Total price */}
            <Text style={styles.totalPrice}>${post.newPrice * days} total</Text>
        </Pressable>
    );
};

export default NewPost;
