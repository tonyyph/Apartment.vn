import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { FC } from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Colors from '../../constants/Colors';


interface PopularItemProps {
    data: {
        crust?: string;
        deliveryTime?: number;
        id?: string;
        image?: any;
        ingredients?: any[];
        price?: number;
        rating?: string;
        sizeName?: string;
        sizeNumber?: number;
        title?: string;
        weight?: string;
    };
    onPress?: () => void;
}

const PopularItem: FC<PopularItemProps> = ({ data, onPress }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.cardPopularWrapper} onPress={onPress}>

                <View style={styles.topPopularTitle}>
                    {/* <Image source={data?.image} style={styles.iconCrown} /> */}
                    <MaterialCommunityIcons name="crown" size={12} color="gold" />
                    <Text style={styles.textPopular}>{'top of the week'}</Text>
                </View>
                <View style={styles.mainPopular} >
                    <Text style={styles.infoPopular}>{data?.title}</Text>
                    <Text style={styles.weightPopular}>{data?.weight}</Text>
                </View>
                <View style={styles.bottomPopular}>
                    <TouchableOpacity style={styles.inputButton} >
                        <MaterialCommunityIcons name="plus" size={16} color="black" />
                    </TouchableOpacity>
                    <MaterialCommunityIcons name="star" size={12} color="black" />
                    <Text style={styles.ratingPopular}>{data?.rating}</Text>
                </View>
                <View style={styles.cardPopular}>
                    <Image style={styles.imagePopular} source={data?.image} />
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default PopularItem

const styles = StyleSheet.create({
    container: {
        shadowColor: Colors['light'].indigo,
        shadowOpacity: 0.6,
        shadowOffset: {
            width: 1,
            height: 1,
        },
        shadowRadius: 4.6,
        elevation: 6,
    },
    cardPopularWrapper: {
        opacity: 1,
        width: '98%',
        marginLeft: '1%',
        marginTop: 4,
        height: 161,
        backgroundColor: '#ffffff',
        borderRadius: 25,
        borderColor: '#000000',
        marginBottom: 16,
        paddingLeft: 20,
        paddingVertical: 18,
        overflow: 'hidden',
    },
    topPopularTitle: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    textPopular: {
        fontSize: 14,
        fontWeight: 'bold',
        paddingHorizontal: 10,
        lineHeight: 17,
        fontFamily: 'Helvetica',
        letterSpacing: 0.75,
    },
    mainPopular: {
        paddingTop: 20
    },
    infoPopular: {
        fontSize: 14,
        fontWeight: 'bold',
        lineHeight: 17,
        fontFamily: 'Helvetica',
        letterSpacing: 0.5,
        paddingBottom: 5,
    },
    weightPopular: {
        fontSize: 12,
        letterSpacing: 0.5,
        color: Colors['light'].tabIconDefault
    },
    bottomPopular: {
        position: 'absolute',
        flexDirection: 'row',
        alignItems: 'center',
        bottom: 0,
    },
    inputButton: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 90,
        height: 53,
        marginRight: 10,
        backgroundColor: Colors['light'].yellow,
        borderTopRightRadius: 25,
        borderBottomLeftRadius: 25
    },
    ratingPopular: {
        fontSize: 12,
        fontWeight: 'bold',
        letterSpacing: 0.5,
        lineHeight: 15,
        paddingHorizontal: 2
    },
    cardPopular: {
        position: 'absolute',
        top: 15,
        right: -60,
        overflow: 'hidden',
    },
    imagePopular: {
        width: 210,
        height: 125,
        resizeMode: 'contain',
    }
})