import { MaterialCommunityIcons, EvilIcons } from '@expo/vector-icons';
import { FlatList, Image, SafeAreaView, ScrollView, StyleSheet, TextInput } from 'react-native';
import categoriesData from '../assets/data/categoriesData';
import popularData from '../assets/data/popularData';
import CategoriesItem from '../components/Category/CategoriesItem';

import EditScreenInfo from '../components/EditScreenInfo';
import PopularItem from '../components/Popular/PopularItem';
import { Text, View } from '../components/Themed';
import Colors from '../constants/Colors';
import { RootTabScreenProps } from '../types';

export default function AccountScreen({ navigation }: RootTabScreenProps<'Account'>) {


    const renderCategoryItem = (item: any) => {
        const CategoryItem = item?.item
        return (
            <CategoriesItem data={CategoryItem} />
        )
    };

    const renderPopularItem = (item: any) => {
        return (
            <PopularItem data={item?.item} />
        )
    }
    return (
        <View style={styles.container}>
            <ScrollView
                showsVerticalScrollIndicator={false}
            >
                {/* <Text style={styles.title}>Account Screen</Text> */}
                {/* Header Wrapper */}
                <View style={styles.headerWrapper}>
                    <Image source={require('../assets/images/avatar.png')} style={styles.headerImage} />
                    <MaterialCommunityIcons size={30} name='menu' style={styles.headerIcon} />
                </View>
                {/* under Header Wrapper */}
                <View style={styles.underWrapper}>
                    <Text style={styles.textHeader}>Food</Text>
                    <Text style={styles.textTitle}>Delivery</Text>
                </View>
                {/* search sWrapper */}
                <View style={styles.searchWrapper}>
                    <EvilIcons name="search" size={28} color="black" />
                    <View style={styles.searchButton}>
                        <TextInput
                            // onChangeText={onChangeNumber}
                            // value={number}
                            placeholder="Search...."
                        />
                        <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
                    </View>
                </View>
                {/* Categories Wrapper */}
                <View style={styles.categoriesWrapper}>
                    <Text style={styles.categoriesTitle}>
                        Categories
                    </Text>
                    <View style={styles.categoriesListWrapper}>
                        <FlatList
                            data={categoriesData}
                            renderItem={renderCategoryItem}
                            keyExtractor={item => item.id}
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                        />
                    </View>
                </View>
                {/* Popular Wrapper */}
                <View style={styles.popularWrapper}>
                    <Text style={styles.popularTitle}>
                        Popular
                    </Text>
                    <View style={styles.popularListWrapper}>
                        <FlatList
                            data={popularData}
                            renderItem={renderPopularItem}
                            keyExtractor={item => item.id}
                            showsVerticalScrollIndicator={false}
                            horizontal={false}
                        />
                    </View>
                </View>
            </ScrollView>
        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        paddingHorizontal: 20,
    },
    headerWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: 20,
    },
    title: {
        color: Colors['light'].cyan,
        fontSize: 20,
        fontWeight: 'bold',
    },
    headerImage: {
        width: 40,
        height: 40,
        borderRadius: 50,
    },
    headerIcon: {

    },
    underWrapper: {
        paddingTop: 30,
    },
    textHeader: {
        fontSize: 16,
        fontFamily: 'Helvetica',
        color: Colors['light'].text,
        paddingBottom: 5
    },
    textTitle: {
        fontFamily: 'Helvetica',
        fontSize: 32,
        fontWeight: 'bold',
    },
    separator: {
        height: 1,
        width: '100%',
        marginTop: 6,
    },
    searchWrapper: {
        flexDirection: 'row',
        paddingTop: 30
    },
    searchButton: {
        paddingLeft: 8,
        flexDirection: 'column',
        width: '90%',
        // backgroundColor: Colors['light'].cyan
    },
    categoriesWrapper: {
        paddingTop: 30,
    },
    categoriesTitle: {
        fontSize: 16,
        fontFamily: 'Helvetica',
        fontWeight: 'bold',
    },
    categoriesListWrapper: {
        paddingVertical: 15,
        backgroundColor: '#Ffffff'
    },
    popularTitle: {
        fontSize: 16,
        fontFamily: 'Helvetica',
        fontWeight: 'bold',
    },
    popularWrapper: {
        justifyContent: 'center',
        paddingBottom: 10,
    },
    popularListWrapper: {
        paddingVertical: 20,
    }
});
